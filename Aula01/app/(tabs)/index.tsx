import { FilterChips } from '../../components/library/filter-chips';
import { LibraryListItem } from '@/components/library/library-list-item';
import { ListToolbar } from '@/components/library/list-toolbar';
import { MiniPlayer } from '@/components/library/mini-player';
import { SpotifyLibraryHeader } from '@/components/library/spotify-header';
import { libraryItems, quickFilters } from '@/data/library-data';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

/**
 * Tela referência baseada na UI da biblioteca do Spotify.
 *
 * Boas práticas usadas aqui para você reaproveitar:
 * - dados em /data
 * - componentes pequenos em /components/library
 * - tela principal apenas orquestra a composição
 */
export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        {/* Cabeçalho com avatar, título e ações */}
        <SpotifyLibraryHeader />

        {/* Filtros horizontais (Playlists, Podcasts, etc.) */}
        <FilterChips filters={quickFilters} />

        {/* Linha de ordenação e mudança visual de layout */}
        <ListToolbar />

        {/*
          FlatList é usada no lugar de map comum para melhor performance
          quando a lista crescer.
        */}
        <FlatList
          data={libraryItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <LibraryListItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        {/* Mini player visual fixo acima da barra de abas */}
        <MiniPlayer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#000000',
    flex: 1,
  },
  screen: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  listContent: {
    paddingBottom: 130,
  },
});
