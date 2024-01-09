import React from 'react'
import { getTranslation } from '@payloadcms/translations'

import type { FieldWithSubFields } from 'payload/types'
import type { Props } from '../types'

import RenderFieldsToDiff from '../..'
import Label from '../../Label'
import './index.scss'

const baseClass = 'nested-diff'

const Nested: React.FC<Props & { field: FieldWithSubFields }> = ({
  comparison,
  disableGutter = false,
  field,
  fieldComponents,
  locale,
  locales,
  permissions,
  version,
}) => {
  // const { i18n } = useTranslation()

  return (
    <div className={baseClass}>
      {field.label && (
        <Label>
          {locale && <span className={`${baseClass}__locale-label`}>{locale}</span>}
          {field.label}
          // TODO(i18n)
          {/* {getTranslation(field.label, i18n)} */}
        </Label>
      )}
      <div
        className={[`${baseClass}__wrap`, !disableGutter && `${baseClass}__wrap--gutter`]
          .filter(Boolean)
          .join(' ')}
      >
        <RenderFieldsToDiff
          comparison={comparison}
          fieldComponents={fieldComponents}
          fieldPermissions={permissions}
          fields={field.fields}
          locales={locales}
          version={version}
        />
      </div>
    </div>
  )
}

export default Nested
