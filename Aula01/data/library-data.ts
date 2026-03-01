/**
 * Dados mockados da tela "Sua Biblioteca".
 *
 * A ideia é manter os dados separados da UI.
 * Quando você quiser criar outra tela, pode repetir este padrão:
 * 1) cria um arquivo em /data
 * 2) define os tipos
 * 3) exporta os arrays para o componente consumir
 */
import type { ImageSourcePropType } from 'react-native';

export type QuickFilter = {
  id: string;
  label: string;
};

export type LibraryCategory = 'Playlist' | 'Álbum' | 'Artista';

export type LibraryItem = {
  id: string;
  title: string;
  subtitle: string;
  category: LibraryCategory;
  accent?: 'green' | 'purple' | 'none';
  // Capa local da playlist (ex.: pasta /imagem)
  coverSource?: ImageSourcePropType;
};

export const quickFilters: QuickFilter[] = [
  { id: 'playlists', label: 'Playlists' },
  { id: 'podcasts', label: 'Podcasts' },
  { id: 'albums', label: 'Álbuns' },
  { id: 'artists', label: 'Artistas' },
  { id: 'downloaded', label: 'Baixado' },
];

/**
 * Lista base inspirada na captura da tela.
 * Sem áudio ou player real: foco apenas em layout e estrutura visual.
 */
export const libraryItems: LibraryItem[] = [
  {
    id: 'vitamina',
    title: 'Vitamina de banana',
    subtitle: 'Playlist · João',
    category: 'Playlist',
    accent: 'green',
    // Caminho relativo partindo de /data para /imagem
    // coverSource: require('../imagem/vitaminabanana.png'), nao funciona sla pq, procurar amanha
  },
  {
    id: 'morango',
    title: 'Vitamina de morango',
    subtitle: 'Playlist · Nana',
    category: 'Playlist',
    accent: 'green',
  },
];
