import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentProps } from 'react';
import Header from '../Header';
import '../Header.scss'

type StoryProps = ComponentProps<typeof Header> & {
  device: 'desktop' | 'mobile';
};

const meta: Meta<StoryProps> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    device: {
      options: ['desktop', 'mobile'],
      control: 'radio',
      description: 'Select the device view for the Header component',
      defaultValue: 'desktop',
    }
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Desktop: Story = {
  args: {
    device: 'desktop',
  }
};

export const Mobile: Story = {
  args: {
    device: 'mobile',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};