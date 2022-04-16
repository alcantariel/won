import { render, screen } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { asFragment } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: 'React Avançado'
      })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <main>
          <h1>
            React Avançado
          </h1>
        </main>
      </DocumentFragment>
    `);
  });
});
