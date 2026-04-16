# Attus Frontend Challenge

Projeto base em Angular 17+ para o desafio técnico de Front End.

## Stack

- Angular 17+
- Angular Material
- Signals para estado local da feature de usuários
- RxJS
- Jest para testes unitários
- Componentes standalone

## O que já está pronto

- Listagem de usuários em cards
- Busca por nome com `debounceTime(300)` e `distinctUntilChanged()`
- Loading e tratamento de erro
- Modal para criar e editar usuário
- Formulário reativo com validações de nome, e-mail, CPF e telefone
- Store baseada em Signals
- Mock de API em serviço local
- Exemplos de testes unitários

## Estrutura

```bash
src/app
├── core
│   ├── models
│   ├── utils
│   └── validators
├── data-access
│   └── users-api.service.ts
└── feature
    └── users
        ├── user-dialog.component.*
        ├── user-list.component.*
        └── users.store.ts
```

## Como rodar

```bash
npm install
npm start
```

Aplicação disponível em `http://localhost:4200`.

## Como testar

```bash
npm test
```

## Observações

- Os dados estão mockados em memória em `UsersApiService`.
- Para trocar por API real, basta substituir a implementação dos métodos `list` e `save` por chamadas com `HttpClient`.
- O projeto usa `OnPush`, `@for`, `trackBy`, `takeUntilDestroyed` e `Signals`.

## Próximos passos sugeridos

- Adicionar paginação
- Persistir em JSON Server ou MSW
- Melhorar cobertura de testes de componentes
- Separar por libs caso queira evoluir para Nx Monorepo
