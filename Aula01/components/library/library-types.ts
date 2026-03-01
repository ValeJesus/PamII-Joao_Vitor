import type { LibraryItem } from '@/data/library-data';

/**
 * Props compartilhadas pelos componentes da pasta /components/library.
 * Centralizar tipos ajuda a manter consistência quando a tela crescer.
 */
export type LibraryListItemProps = {
  item: LibraryItem;
};
