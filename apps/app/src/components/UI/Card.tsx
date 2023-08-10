import clsx from 'clsx'
import { FC, MouseEvent, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  forceRounded?: boolean
  testId?: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export const Card: FC<CardProps> = ({
  children,
  className = '',
  forceRounded = false,
  testId = '',
  onClick
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    // Prevent click propagation if the target is a button
    const et = event.target as HTMLInputElement
    console.log(et)
    if (et.tagName === 'BUTTON') {
      event.stopPropagation()
    } else if (onClick) {
      onClick(event)
    }
  }

  return (
    <div
      className={clsx(
        forceRounded ? 'rounded-xl' : 'rounded-none sm:rounded-xl',
        'border dark:border-gray-700/80 bg-purple-50 dark:bg-Card drop-shadow-md',
        className
      )}
      data-test={testId}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export const CardHeader: FC<CardHeaderProps> = ({
  children,
  className = ''
}) => {
  return <div className={`border-b p-3 ${className}`}>{children}</div>
}

interface CardBodyProps {
  children?: ReactNode
  className?: string
}
export const CardBody: FC<CardBodyProps> = ({ children, className = '' }) => {
  return <div className={`p-5 ${className}`}>{children}</div>
}
