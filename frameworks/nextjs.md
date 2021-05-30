# Next.js

É um framework web desenvolvido em React.js e lançado em 2016 por Guilhermo Rauch. Guilhermo também é Co-founder da Vercel.

<br>

## Por que utilizar o Next.js ou um framework em geral?

Ao iniciar um projeto, vários tópicos devem ser atendidos:

- Qual blunder será utilizado? webpack? Parcel?
- Como as rotas serão definidas?
- SPA? SSG? SSR?

Um framework provavelmente já irá ter todas essa estrutura, rotas, etc... Nos deixando apenas a preocupação de desenvolvimento e foco no produto do que em como utilizar as ferramentas. Isso não quer dizer que o código não tem que ser bom e bem estruturado.

O Next.js vem para responder todas essas perguntas e facilitar o desenvolvimento de aplicações, possuindo:

- Renderização do lado do servidor (Server Side Rendering - SSR)
- Geração de sites estáticos (Static Site Generation - SSG)
- CSS-in-JS (Styled-jsx, styled-components, Emotion)
- Zero configuração (rotas, hot reloading, code splitting)
- Extensível (É possível fazer modificações nos plugins utilizado por baixo dos panos)
- Otimizado para produção (Código gerado com todas as otimizações possíveis)

<br>

## Vantagens e Desvantagens

Para entender a diferença entre o Next.js, Create React App e qualquer outro framework, é necessário ter noção dos tipos de uma aplicação:

- Static Site (HTML/CSS/JS) - Gatsby ou html, css e js puros
- Client Side Rendering (Single Page Application - SPA) - CRA
- Server Side Rendering (SSR) - Next.js

<br>

Vantagens:

SSG:

- Uso do servidor é quase nulo
- Pode ser servido em uma CDN (melhor cache)
- Melhor performance entre todos os outros tipos
- Flexibilidade para utilizar qualquer servidor

<br>

SPA:

- Páginas ricas em interações, já que a aplicação só é baixada uma vez e as interações dependem das requisições de cada página
- Ótimo para aplicações web, visto que possuem muitas bibliotecas para integrar
- Site rápido após o load inicial

<br>

SSR:

- Ótimo em SEO, já que tudo é renderizado no servidor, o carregamento inicial da página e seu conteúdo já está pronto
- Meta tags com previews mais adequados
- Melhor performance para o usuário (conteúdo visto mais rápido)
- Menor processamento do lado do usuário

<br>

Desvantagens:

SSG:

- O tempo de build pode ser muito alto
- Dificuldade para escalar em aplicações grandes
- Dificultade para realizar atualizações constantes, a cada mudança será necessário realizar outro build, o que volta no primeiro tópico de desvantagens do SSG

<br>

SPA:

- Load inicial pode ser demorado
- Dificuldades no SEO, já que as páginas são renderizadas após o load inicial e após isso carrega o que há na página
- A maioria do conteúdo não é indexado

<br>

SSR:

- TTFB (Time to first byte) maior, já que o servidor terá que preparar tudo e exibir a página e seu conteúdo, pode ser que demore um pouco para exibir esse conteúdo em tela
- Reload completo nas mudanças de rota

<br>

O Next.js possui suporte para os três tipos de aplicação. Inclusive, os três tipos na mesma aplicação.

<br>

## Quando usar cada um dos tipos?

SSG:

- Site simples e sem muita interação do usuário
- Uma única pessoa que publica conteúdo
- Se o conteúdo muda muito pouco
- Quando a performance é extremamente importante
- Exemplos: portfólio, blogs, landing page

<br>

SPA:

- Quando não tem tanta necessidade em anexar informações no Google
- Quando o usuário faz muitas interações com a página
- Quando as informações são diferentes para cada usuário
- Exemplos: Twitter web, Facebook web

<br>

SSR:

- Quando o conteúdo muda muito e a aplicação possui um grande número de páginas
- Quando necessita de uma boa indexação no Google
- Exemplos: E-commerce, sites de notícias
