/* eslint-disable no-unused-vars */
import {
  ProfileFragment,
  PublicationMetadataV2Input
} from '@lens-protocol/client'
import { MetadataAttributeInput } from '@lens-protocol/client'
import { ICity, ICountry, IState } from 'country-state-city'

export enum OpportunityMetadataVersion {
  '1.0.0' = '1.0.0'
}

export enum CauseMetadataVersion {
  '1.0.0' = '1.0.0'
}
export enum GoalMetadataVersion {
  '1.0.0' = '1.0.0'
}
export enum ProfileMetadataVersions {
  '1.0.0'
}
export enum VhrRequestMetadataVersions {
  '1.0.0' = '1.0.0'
}

export const MetadataVersion = {
  OpportunityMetadataVersion,
  CauseMetadataVersion,
  GoalMetadataVersion,
  ProfileMetadataVersions,
  VhrRequestMetadataVersions
}

interface OrgPublishMetadata<T> {
  /**
   * ProfileFragment type data for the profile that created the post
   */
  from: ProfileFragment
  /**
   * The metadata schema version
   */
  version: T
}
export interface GoalMetadata extends OrgPublishMetadata<GoalMetadataVersion> {
  /**
   * a uuid associated with a volunteer opporunity
   */

  /**
   * the opportunity nam e
   */
  goal: string
  /**
   * opportunity start date in YYYY-MM-DD format
   */

  /**
   * opportunity end date in YYYY-MM-DD format
   */
  goalDate: string
  /**

}

/**
 * Interface for a metadata field used when publishing a opportunity
 */
}
export interface GoalMetadataAttributeInput extends MetadataAttributeInput {
  traitType: keyof GoalMetadata | 'type'
}
export interface OpportunityMetadata
  extends OrgPublishMetadata<OpportunityMetadataVersion> {
  /**
   * a uuid associated with a volunteer opporunity
   */
  opportunity_id: string
  /**
   * the opportunity name
   */
  name: string
  /**
   * opportunity start date in YYYY-MM-DD format
   */
  startDate: string
  /**
   * opportunity end date in YYYY-MM-DD format
   */
  endDate: string
  /**
   * number of hours per week for this volunteer opportunity
   */
  hoursPerWeek: string
  /**
   * category associated with the volunteer opportunity
   */
  category: string
  /**
   * an optional url to link to an external webste
   */
  website: string
  /**
   * opportunity description
   */
  description: string
  /**
   * optional URL to image uploaded to IPFS. Empty string if no image
   */
  imageUrl: string
}

/**
 * Interface for a metadata field used when publishing a opportunity
 */
export interface OpportunityMetadataAttributeInput
  extends MetadataAttributeInput {
  traitType: keyof OpportunityMetadata | 'type'
}

export interface CauseMetadata
  extends OrgPublishMetadata<CauseMetadataVersion> {
  /**
   * a uuid associated with this cause
   */
  cause_id: string
  /**
   * the cause name
   */
  name: string
  /**
   * category associated with the cause
   */
  category: string
  /**
   * TODO
   */
  currency: string
  /**
   * TODO
   */
  contribution: string
  /**
   * TODO
   */
  goal: string
  /**
   * TODO
   */
  recipient: string
  /**
   * description for this fundraiser
   */
  description: string
  /**
   * optional URL to image uploaded to IPFS. Empty string if no image
   */
  imageUrl: string
  /**
   * Location in the form <City>, <State>, <Country>
   */
  location: string
}

/**
 * Interface for a metadata field used when publishing an cause
 */
export interface CauseMetadataAttributeInput extends MetadataAttributeInput {
  traitType: keyof CauseMetadata | 'type'
}

export interface VerifyMetadata {
  hoursToVerify: string
  comments: string
}

export interface VerifyMetadataAttributeInput extends MetadataAttributeInput {
  traitType: keyof VerifyMetadata | 'type'
}

enum OrgPublish {
  /**
   * Tag to use for an organization publishing or modifying a volunteer opportunity
   */
  Opportunity = 'ORG_PUBLISH_OPPORTUNITY',
  /**
   * Tag to use for an organization publishing or modifying a cause
   */
  Cause = 'ORG_PUBLISH_CAUSE',

  Goal = 'ORG_PUBLISH_Goal'
}

enum Bookmark {
  /**
   * Tag to use for bookmarking a volunteer opportunity
   */
  Opportunity = 'BOOKMARK_OPPORTUNITY',
  /**
   * Tag to use for bookmarking a cause
   */
  Cause = 'BOOKMARK_CAUSE'
}

enum VhrRequest {
  /**
   * Tags realted to making and verifying VHR requests for a volunteer opportunity
   */
  Opportunity = 'VHR_REQUEST_OPPORTUNITY',
  Reject = 'VHR_REJECT_REQUEST'
}

enum Donate {
  /**
   * Tags related to making donations
   */
  SetAmount = 'DONATE_SET_AMOUNT'
}

export type OpportunityMetadataRecord = Record<
  keyof OpportunityMetadata | 'type',
  string
>

export const PostTags = {
  /**
   * Collection of tags for organizations publishing and modifying
   */
  OrgPublish,
  /**
   * Collection of tags for bookmarking publications
   */
  Bookmark,
  /**
   * Collection of tags for making VHR requests
   */
  VhrRequest,
  /**
   * Collection of tags for making donations
   */
  Donate
}

export enum MetadataDisplayType {
  number = 'number',
  string = 'string',
  date = 'date'
}

export interface AttributeData {
  displayType?: MetadataDisplayType
  traitType?: string
  value: string
  key: string
}

export interface ProfileMetadata {
  /**
   * The metadata version.
   */
  version: ProfileMetadataVersions

  /**
   * The metadata id can be anything but if your uploading to ipfs
   * you will want it to be random.. using uuid could be an option!
   */
  metadata_id: string

  /**
   * The display name for the profile
   */
  name: string | null

  /**
   * The bio for the profile
   */
  bio: string | null

  /**
   * Cover picture
   */
  cover_picture: string | null

  /**
   * Any custom attributes can be added here to save state for a profile
   */
  attributes: AttributeData[]
}

export interface VhrRequestMetadata extends PublicationMetadataV2Input {
  /**
   * The metadata version.
   */
  version: VhrRequestMetadataVersions

  /**
   * Any custom attributes can be added here for a VHR request
   */
  attributes: MetadataAttributeInput[]
}

/**
 * Interface to hold location data, split into country, province, and city, all
 * portentially undefined
 */
export interface ILocationData {
  /**
   * The country of the user, possibly undefined
   */
  country: ICountry | undefined
  /**
   * The provincial subdivision of the user, possibly undefined
   */
  province: IState | undefined
  /**
   * The city of the user, possibly undefined
   */
  city: ICity | undefined
}

export interface IFormLocation {
  country: string
  province: string
  city: string
}

export interface VHRRequest {
  hoursToVerify: string
  comments: string
  from: ProfileFragment
  opportunity: OpportunityMetadata
  id: string
  createdAt: string
}
