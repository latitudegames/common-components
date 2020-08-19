import React from 'react'
import { Switch, Text, View } from 'react-native'

import type { UserText } from 'src/styles/StyleTypes'

interface Props {
  label?: string
  info?: string
  value?: boolean
  userText?: UserText
  onChange?(value?: boolean): void
}

const SwitchField: React.FC<Props> = (props) => {
  const { label, info, value, onChange } = props

  return (
    <View>
      <Text accessible={true}>{label}</Text>
      <Text accessible={true}>{info}</Text>

      <Switch
        accessibilityLabel={label}
        thumbColor="blue"
        ios_backgroundColor="red"
        onValueChange={onChange}
        value={value}
      />
    </View>
  )
}

export default SwitchField
