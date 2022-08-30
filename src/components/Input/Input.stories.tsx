import { Meta, Story } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Input',
  component: Input,
} as Meta

export const Default: Story = () => <Input placeholder='example placeholder' />
