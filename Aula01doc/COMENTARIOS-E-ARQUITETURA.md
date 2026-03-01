# Comentários e arquitetura do código (referência)

Este documento resume **como e por que** os arquivos foram organizados, com foco em estudo e replicação.

## Objetivo

A ideia é te dar um padrão para criar novas telas sem bagunçar o projeto:

- Navegação separada da UI
- UI separada dos dados
- Componentes pequenos e reutilizáveis
- Comentários explicando decisões

## Arquivos principais alterados

## 1) Navegação

- `Aula01/app/_layout.tsx`
  - Responsável pelo `ThemeProvider`, `Stack` e `StatusBar`.
  - Comentado para explicar o papel do layout raiz.

- `Aula01/app/(tabs)/_layout.tsx`
  - Define as abas inferiores e ícones.
  - Comentado com a relação entre `name` e arquivo de rota.

## 2) Tela Biblioteca

- `Aula01/app/(tabs)/index.tsx`
  - Composição da tela.
  - Comentários em cada bloco: header, chips, toolbar, lista e mini-player.

## 3) Componentes da biblioteca

- `Aula01/components/library/spotify-header.tsx`
- `Aula01/components/library/filter-chips.tsx`
- `Aula01/components/library/list-toolbar.tsx`
- `Aula01/components/library/library-list-item.tsx`
- `Aula01/components/library/mini-player.tsx`
- `Aula01/components/library/library-types.ts`

Todos seguem a mesma ideia:

1. Um componente = uma responsabilidade.
2. Receber dados por `props` quando possível.
3. Evitar lógica complexa na camada visual.

## 4) Dados mockados

- `Aula01/data/library-data.ts`
  - Tipos e arrays da tela.
  - Comentado para mostrar padrão de separação de dados.

## 5) Abas placeholder

- `Aula01/app/(tabs)/home.tsx`
- `Aula01/app/(tabs)/search.tsx`
- `Aula01/app/(tabs)/create.tsx`

Esses arquivos estão simples de propósito para você copiar e evoluir.

## 6) Ícones cross-platform

- `Aula01/components/ui/icon-symbol.tsx`
  - Possui mapeamento de nomes de ícones para Android/Web.
  - Comentários indicam quais mapeamentos são do template e quais foram adicionados.

## Fluxo recomendado para criar nova tela

1. Criar dados em `data/nova-tela-data.ts`
2. Criar componentes em `components/nova-tela/`
3. Montar a tela em `app/(tabs)/nova-tela.tsx`
4. Registrar aba em `app/(tabs)/_layout.tsx`
5. Comentar decisões de estrutura no arquivo

## Observação

A implementação atual é uma **referência de estrutura e layout**.
Não existe integração com backend nem player de áudio real nesta etapa.
