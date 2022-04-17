import { Story } from '@storybook/react';
import GlobalStyles from '../src/styles/global';

const withGlobalStyles = Story => (
  <>
    <GlobalStyles />
    <Story />
  </>
);

export default withGlobalStyles;
