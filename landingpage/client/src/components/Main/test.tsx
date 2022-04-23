import { render, screen } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: 'React Avançado'
      })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #06092b;
        color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 100%;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 3rem;
        text-align: center;
        width: 100%;
      }

      .c1 {
        margin-bottom: 2rem;
        width: 25rem;
      }

      .c2 {
        font-size: 2.5rem;
      }

      .c3 {
        font-size: 2rem;
        font-weight: 400;
      }

      .c4 {
        margin-top: 3rem;
        width: min(30rem,100%);
      }

      <main
        class="c0"
      >
        <img
          alt="Imagem de um átomo e React Avançado escrito ao lado."
          class="c1"
          src="/img/logo.svg"
        />
        <h1
          class="c2"
        >
          React Avançado
        </h1>
        <h2
          class="c3"
        >
          TypeScript, React.js, Next.js e styled-components
        </h2>
        <img
          alt="Um desenvolvedor de frente para uma tela com código."
          class="c4"
          src="/img/hero-illustration.svg"
        />
      </main>
    `);
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    });
  });
});
