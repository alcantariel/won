import { Meta, Story } from '@storybook/react/types-6-0';

import Main from './index';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, React.js, Next.js e styled-components'
  },
  argTypes: {
    title: {
      name: 'title',
      type: 'string',
      defaultValue: 'React Avançado',
      description: 'Page title'
    },
    description: {
      name: 'description',
      type: 'string',
      defaultValue: 'TypeScript, React.js, Next.js e styled-components',
      description: 'Page description'
    }
  }
} as Meta;

export const Basic: Story = args => <Main {...args} />;
