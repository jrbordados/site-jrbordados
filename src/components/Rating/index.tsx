'use client'

import React from 'react'
//
import { MdOutlineStarBorderPurple500 } from 'react-icons/md'
import { MdOutlineStarPurple500 } from 'react-icons/md'

import { RatingStartsGroup, RatingGroup, RateItem } from './styles'

const sizes = {
  small: 22,
  medium: 28,
  large: 32
} as const
type Sizes = keyof typeof sizes

type RatingItemProps = {
  size: number
  value: number
  selected: boolean
  onClick: (value: number) => void
  onMouse: (value: number, enter: boolean) => void
}

const Item: React.FC<RatingItemProps> = ({ size, value, selected, onClick, onMouse }) => {
  const stop = (cb: () => void) => {
    return (e: React.MouseEvent<HTMLLabelElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (cb) cb?.()
    }
  }

  const onMouseEnter = () => {
    if (onMouse) onMouse(value, true)
  }

  const onMouseLeave = () => {
    if (onMouse) onMouse(value, false)
  }

  const handleClick = () => {
    if (onClick) onClick?.(value)
  }

  return (
    <RateItem $size={size} onMouseEnter={stop(onMouseEnter)} onMouseLeave={stop(onMouseLeave)} onClick={stop(handleClick)}>
      {selected ? <MdOutlineStarPurple500 size={size} /> : <MdOutlineStarBorderPurple500 size={size} />}
    </RateItem>
  )
}

export type RatingProps = {
  labelSpace?: number
  count?: number
  label?: React.ReactNode
  children?: React.ReactNode
  gap?: number
  size?: Sizes
  value?: number
}

export const Rating: React.FC<RatingProps> = ({ count = 5, label, gap, size = 'medium', value = 0, children, labelSpace = 8 }) => {
  const [localValue, setLocalValue] = React.useState(value)
  const [hover, setHover] = React.useState(0)

  const $size = sizes?.[size] || sizes.medium

  const handleClick = (val: number) => {
    setLocalValue(old => (val === old ? 0 : val))
  }

  const handleMouse = (val: number, enter: boolean) => {
    if (val) setHover(enter ? val : 0)
  }

  const content = children || label || null

  return (
    <RatingGroup $gap={labelSpace}>
      {content ? <div>{content}</div> : null}
      <RatingStartsGroup $gap={gap}>
        {Array.from({ length: count }).map((_, index) => {
          const num = index + 1
          const selected = num <= hover || num <= localValue
          return <Item key={num} size={$size} value={num} selected={selected} onClick={handleClick} onMouse={handleMouse} />
        })}
      </RatingStartsGroup>
    </RatingGroup>
  )
}
