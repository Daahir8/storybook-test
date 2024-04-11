import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
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
    label: 'Contact Us',
  },
};
export const Large: Story = {
  
  args: {
    primary: false,
    size: 'large',
    label: 'Contact Us',
    backgroundColor: 'white',
  },
};

export const Small: Story = {
  
  
  args: {
    
    primary: true,
    size: 'small',
    label: 'Contact Us',
    backgroundColor: 'black',
    
  },
};


export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'white',
  },
};

