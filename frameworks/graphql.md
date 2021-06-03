# GraphQL

É uma linguagem de consulta de dados desenvolvida pelo Facebook em 2012, surgiu devido a problemas com a quantidade de dados que ele necessitava passar e receber.

A consulta nos permite informar de quais dados precisamos como resposta de uma determinada requisição, evitando assim, a criação de DTOs, converters para esses DTOs, criação rotas desnecessárias no backend, etc...

<br>

# GraphQL Clients

São responsáveis por criar camadas de abstração para que ajudam na utilização dos recursos do GraphQL como realizar queries e mutations, cache, validações e otimizações.

<br>

## Fetch Client x Caching Client

- Fetch Client: facilita a realização de chamadas e recebimento de dados
- Caching Client: são responsáveis por obter os dados e colocar em camadas de cache

## Clients mais conhecidos/utilizados:

- FetchQL
- GraphQL Request
- uRQL
- Relay Modern
- Apollo Client
