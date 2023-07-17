import {
  MetadataAttributeInput,
  PublicationMainFocus,
  PublicationMetadataDisplayTypes,
  PublicationMetadataV2Input
} from '@lens-protocol/client'
import { ProfileFragment as Profile } from '@lens-protocol/client'
import { signMessage } from '@wagmi/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import GradientModal from '@/components/Shared/Modal/GradientModal'
import { Form } from '@/components/UI/Form'
import { Input } from '@/components/UI/Input'
import { Spinner } from '@/components/UI/Spinner'
import { TextArea } from '@/components/UI/TextArea'
import { APP_NAME } from '@/constants'
import getUserLocale from '@/lib/getUserLocale'
import createPost from '@/lib/lens-protocol/createPost'
import lensClient from '@/lib/lens-protocol/lensClient'

import Error from './Error'

interface IPublishOpportunityModalProps {
  open: boolean
  onClose: (shouldRefetch: boolean) => void
  publisher: Profile | null
}

interface IFormProps {
  opportunityName: string
  dates: string
  numHours: string
  category: string
  website: string
  description: string
}

const PublishOpportunityModal: React.FC<IPublishOpportunityModalProps> = ({
  open,
  onClose,
  publisher
}) => {
  const [isPending, setIsPending] = useState<boolean>(false)

  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const form = useForm<IFormProps>()

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
  } = form

  const onCancel = () => {
    reset()
    onClose(false)
  }

  const onSubmit = async (data: IFormProps) => {
    setError(false)
    setIsPending(true)
    console.log('test')

    if (!publisher) {
      setErrorMessage('No publisher provided')
      setError(true)
      setIsPending(false)
      return
    }

    const attributes: MetadataAttributeInput[] = [
      {
        traitType: 'type',
        displayType: PublicationMetadataDisplayTypes.String,
        value: 'ORG_PUBLISH_OPPORTUNITY'
      },
      {
        traitType: 'opportunity_id',
        displayType: PublicationMetadataDisplayTypes.String,
        value: v4()
      },
      {
        traitType: 'opportunity_name',
        displayType: PublicationMetadataDisplayTypes.String,
        value: data.opportunityName
      },
      {
        traitType: 'dates',
        displayType: PublicationMetadataDisplayTypes.String,
        value: data.dates
      },
      {
        traitType: 'hours',
        displayType: PublicationMetadataDisplayTypes.String,
        value: data.numHours
      },
      {
        traitType: 'category',
        displayType: PublicationMetadataDisplayTypes.String,
        value: data.category
      },
      {
        traitType: 'website',
        displayType: PublicationMetadataDisplayTypes.String,
        value: data.website
      },
      {
        traitType: 'description',
        displayType: PublicationMetadataDisplayTypes.String,
        value: data.description
      }
    ]

    const metadata: PublicationMetadataV2Input = {
      version: '2.0.0',
      metadata_id: v4(),
      content: '#ORG_PUBLISH_OPPORTUNITY',
      locale: getUserLocale(),
      tags: ['ORG_PUBLISH_OPPORTUNITY'],
      mainContentFocus: PublicationMainFocus.TextOnly,
      name: `ORG_PUBLISH_OPPORTUNITY by ${publisher?.handle}`,
      attributes,
      appId: APP_NAME
    }

    try {
      setIsPending(true)

      const authenticated = await lensClient().authentication.isAuthenticated()
      if (!authenticated) {
        console.log('not authed')
        const address = publisher.ownedBy

        const challenge = await lensClient().authentication.generateChallenge(
          address
        )
        const signature = await signMessage({ message: challenge })

        await lensClient().authentication.authenticate(address, signature)
      }

      await createPost(publisher, metadata)
    } catch (e: any) {
      setErrorMessage(e.message)
      setError(true)
    }
    setIsPending(false)
  }

  return (
    <GradientModal
      title={'Publish New Volunteer Opportunity'}
      open={open}
      onCancel={onCancel}
      onSubmit={handleSubmit((data) => onSubmit(data))}
      submitDisabled={isPending}
    >
      <div className="mx-12">
        {!isPending ? (
          <Form
            form={form}
            onSubmit={() => handleSubmit((data) => onSubmit(data))}
          >
            <Input
              label="Volunteer opportunity name"
              placeholder="Medical internship"
              error={!!errors.opportunityName?.type}
              {...register('opportunityName', { required: true })}
            />
            <Input
              label="Date(s)"
              type="date"
              placeholder="yyyy-mm-dd"
              error={!!errors.dates?.type}
              {...register('dates', { required: true })}
            />
            <Input
              label="Expected number of hours"
              placeholder="5"
              error={!!errors.numHours?.type}
              {...register('numHours', { required: true })}
            />
            <Input
              label="Category"
              placeholder="Healthcare"
              error={!!errors.category?.type}
              {...register('category', { required: true })}
            />
            <Input
              label="Website (leave empty if not linking to external opportunity)"
              placeholder="https://ecssen.ca/opportunity-link"
              error={!!errors.website?.type}
              {...register('website')}
            />
            <TextArea
              label="Activity Description"
              placeholder="Tell us more about this volunteer opportunity"
              error={!!errors.description?.type}
              {...register('description', { required: true })}
            />
          </Form>
        ) : (
          <Spinner />
        )}

        {error && (
          <Error
            message={`An error occured: ${errorMessage}. Please try again.`}
          />
        )}
      </div>
    </GradientModal>
  )
}

export default PublishOpportunityModal