import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'shadcn/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: '위험 경고',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: '완료',
  },
};
