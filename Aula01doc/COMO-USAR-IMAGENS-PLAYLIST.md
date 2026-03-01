# Como usar imagem na playlist (jeito simples)

Este guia mostra o fluxo mais fácil para exibir capa local na tela da biblioteca.

## 1) Coloque a imagem na pasta certa

Exemplo:

- `Aula01/imagem/vitaminabanana.png`

## 2) Declare o campo da imagem no tipo

Arquivo: `Aula01/data/library-data.ts`

```ts
import type { ImageSourcePropType } from 'react-native';

export type LibraryItem = {
  id: string;
  title: string;
  subtitle: string;
  category: LibraryCategory;
  accent?: 'green' | 'purple' | 'none';
  coverSource?: ImageSourcePropType;
};
```

## 3) Passe a imagem no item da playlist

```ts
coverSource: require('../imagem/vitaminabanana.png')
```

## 4) Renderize a capa no componente

Arquivo: `Aula01/components/library/library-list-item.tsx`

Regra aplicada:

- Se tiver `coverSource`, mostra a imagem.
- Se não tiver, mostra o bloco fallback com cor/ícone.

## Resumo rápido

- Dados da imagem ficam em `data/library-data.ts`
- UI da imagem fica em `components/library/library-list-item.tsx`

Esse padrão facilita manutenção e reaproveitamento nas próximas telas.
