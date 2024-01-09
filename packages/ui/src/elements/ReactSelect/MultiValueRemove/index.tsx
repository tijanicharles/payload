import type { MultiValueRemoveProps } from 'react-select'

import React from 'react'
import { useTranslation } from '../../../providers/Translation'

import type { Option as OptionType } from '../types'

import { X } from '../../../icons/X'
import { Tooltip } from '../../Tooltip'
import './index.scss'

const baseClass = 'multi-value-remove'

export const MultiValueRemove: React.FC<
  MultiValueRemoveProps<OptionType> & {
    innerProps: JSX.IntrinsicElements['button']
  }
> = (props) => {
  const {
    innerProps: { className, onClick, onTouchEnd },
  } = props

  const [showTooltip, setShowTooltip] = React.useState(false)
  const { t } = useTranslation()

  return (
    <button
      aria-label={t('general:remove')}
      className={[baseClass, className].filter(Boolean).join(' ')}
      onClick={(e) => {
        setShowTooltip(false)
        onClick(e)
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchEnd={onTouchEnd}
      type="button"
    >
      <Tooltip className={`${baseClass}__tooltip`} show={showTooltip}>
        {t('general:remove')}
      </Tooltip>
      <X className={`${baseClass}__icon`} />
    </button>
  )
}
