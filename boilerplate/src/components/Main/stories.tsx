import Main from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, React.js, Next.js e styled-components'
    )}
  />
);
