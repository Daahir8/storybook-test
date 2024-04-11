import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  },
};

export const LabelButton: Story = {
  args: {
    label: 'Label Button',
    variant: 'label',
  },
};

export const EllipsisButton: Story = {
  args: {
    label: '...',
    variant: 'ellipsis',
  },
};

// Export LinkButton and LoadingButton stories at the end
export const LinkButton: Story = {
  args: {
    label: 'Go to Google',
    variant: 'link',
    onClick: () => window.open('https://www.google.com', '_blank'),
  },
};

export const LoadingButton: Story = {
  args: {
    label: 'Loading...',
    variant: 'loading',
    disabled: true,
    spinnerColor: 'red',
  },
};
