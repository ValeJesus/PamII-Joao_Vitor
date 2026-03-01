# Guia de referência para criar telas (React Native + Expo Router)

Este guia explica como a tela "Sua Biblioteca" foi organizada para servir de base nas próximas telas.

## 1) Estrutura usada

- `app/(tabs)/index.tsx`: tela principal (composição da interface)
- `components/library/*`: componentes pequenos e reutilizáveis
- `data/library-data.ts`: dados mockados da tela

## 2) Padrão recomendado (repita nas próximas telas)

1. Crie um arquivo de dados em `data/`
2. Crie componentes pequenos em `components/nome-da-tela/`
3. Na tela em `app/(tabs)/...`, apenas importe e componha os blocos

Esse padrão facilita manutenção, leitura e reaproveitamento.

## 3) Exemplo aplicado na Biblioteca

### Dados
Arquivo: `data/library-data.ts`

- Define tipos (`LibraryItem`, `QuickFilter`)
- Exporta arrays de dados (`libraryItems`, `quickFilters`)

### Componentes
Pasta: `components/library/`

- `spotify-header.tsx`: cabeçalho da tela
- `filter-chips.tsx`: filtros horizontais
- `list-toolbar.tsx`: linha de ordenação
- `library-list-item.tsx`: item da lista
- `mini-player.tsx`: player visual fixo
- `library-types.ts`: tipos compartilhados dos componentes

### Tela final
Arquivo: `app/(tabs)/index.tsx`

- Usa `SafeAreaView` para respeitar notch e barra superior
- Usa `FlatList` para lista vertical performática
- Importa dados e componentes para montar a UI

## 4) Como criar a próxima tela rapidamente

Exemplo: tela "Buscar"

1. Crie `data/search-data.ts`
2. Crie `components/search/` com seus blocos
3. Monte a composição em `app/(tabs)/search.tsx`

## 5) Dicas importantes

- Deixe cada componente com **uma responsabilidade**.
- Evite colocar tudo em um único arquivo grande.
- Comente o **porquê** da estrutura (não só o que o código faz).
- Comece por mock e depois conecte API/estado global.

## 6) Sobre o objetivo deste projeto

Esta implementação foca em layout e navegação, como você pediu.
O mini player e filtros são visuais (sem lógica de áudio/streaming), para servir como referência de construção.
