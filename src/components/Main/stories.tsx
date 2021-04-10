import { Story, Meta } from '@storybook/react';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'react',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
