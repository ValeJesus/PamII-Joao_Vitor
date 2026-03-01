# Aula01 - Referência de tela estilo Spotify

Projeto em React Native com Expo Router, organizado para servir de base na construção de novas telas.

## Rodar o projeto

1. Instale dependências:

```bash
npm install
```

2. Rode o app:

```bash
npx expo start
```

## O que foi estruturado

- Tela principal "Sua Biblioteca" (inspirada no Spotify)
- Navegação por abas: `Início`, `Buscar`, `Sua Biblioteca`, `Criar`
- Componentes reutilizáveis separados por responsabilidade
- Dados mockados separados da UI

## Estrutura de referência

- `app/(tabs)/index.tsx` -> composição da tela biblioteca
- `components/library/*` -> blocos reutilizáveis da biblioteca
- `data/library-data.ts` -> tipos e dados mockados

## Guia de referência

Para entender o padrão usado e replicar em outras telas, veja:

- `../Aula01doc/GUIA-REFERENCIA-TELAS.md`
- `../Aula01doc/COMENTARIOS-E-ARQUITETURA.md`
