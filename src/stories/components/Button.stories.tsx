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
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'default',
    disabled: true,
  },
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
