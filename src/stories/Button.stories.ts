import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import { Button } from './Button';

// This meta object contains metadata for the Storybook story. It defines the title, component, parameters including layout and backgrounds, tags, argument types, and default arguments. (Need update code)
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

// This line defines the type of a Story object based on the meta object.


type Story = StoryObj<typeof meta>;

// Story Definitions: Each story represents a different variation of the Button component. 

export const Primary: Story = {
 
  parameters: {
    backgrounds: {
      default: 'light', 
    },
  },
  args: {
    primary: true,
    label: 'Contact Us',
    
  },
};

export const Large: Story = {
  
  parameters: {
    backgrounds: {
      default: 'light', 
    },
  },
  args: {
    primary: true,
    label: 'Contact Us',
    backgroundColor: 'blue',
    
  },
};

export const Small: Story = {

  parameters: {
    backgrounds: {
      default: 'dark', 
    },
  },
  args: {
    primary: true,
    size: 'small',
    label: 'Contact Us',
    
  },
};


export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'light', 
    },
  },
  args: {
    primary: false,
    size: 'large',
    label: 'Contact Us',
  },
};