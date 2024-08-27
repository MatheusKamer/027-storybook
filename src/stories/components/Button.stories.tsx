import { Meta, StoryObj } from '@storybook/react';
import { Button } from "../../components/Button";

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'destructive', 'secondary', 'outline', 'link', 'ghost'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Story />
      </div>
    ),
  ]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  render: (args) => (
    <Button {...args}>
      <span className='mr-2'>🔥</span>
      Secondary
    </Button>
  ),
};

export const Outline: Story = {
  args: {
    children: 'Loading',
    variant: 'outline',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};
