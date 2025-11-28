import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'shadcn/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const RoleAdmin: Story = {
  args: {
    variant: 'roleAdmin',
    children: 'Admin',
  },
};

export const RoleModerator: Story = {
  args: {
    variant: 'roleModerator',
    children: 'Moderator',
  },
};

export const RoleUser: Story = {
  args: {
    variant: 'roleUser',
    children: 'User',
  },
};

export const StatusActive: Story = {
  args: {
    variant: 'statusActive',
    children: 'Active',
  },
};

export const StatusInactive: Story = {
  args: {
    variant: 'statusInactive',
    children: 'Inactive',
  },
};

export const StatusSuspended: Story = {
  args: {
    variant: 'statusSuspended',
    children: 'Suspended',
  },
};

export const StatusPublished: Story = {
  args: {
    variant: 'statusPublished',
    children: 'Published',
  },
};

export const StatusDraft: Story = {
  args: {
    variant: 'statusDraft',
    children: 'Draft',
  },
};

export const StatusArchived: Story = {
  args: {
    variant: 'statusArchived',
    children: 'Archived',
  },
};

export const CategoryDevelopment: Story = {
  args: {
    variant: 'categoryDevelopment',
    children: 'Development',
  },
};

export const CategoryDesign: Story = {
  args: {
    variant: 'categoryDesign',
    children: 'Design',
  },
};

export const CategoryAccessibility: Story = {
  args: {
    variant: 'categoryAccessibility',
    children: 'Accessibility',
  },
};
