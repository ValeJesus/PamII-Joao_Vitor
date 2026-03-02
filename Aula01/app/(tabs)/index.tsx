import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

type LibraryItem = {
  id: 'vitamina' | 'macarrao';
  title: string;
  subtitle: string;
  coverSource: ImageSourcePropType;
  route: '/playlists/vitamina' | '/playlists/macarrao';
};

const quickFilters = ['Playlists', 'Podcasts', 'Álbuns', 'Artistas', 'Baixado'];

const libraryItems: LibraryItem[] = [
  {
    id: 'vitamina',
    title: 'Vitamina de banana',
    subtitle: 'Playlist · João',
    coverSource: require('../../assets/images/vitaminabanana.png'),
    route: '/playlists/vitamina',
  },
  {
    id: 'macarrao',
    title: 'Macarrão',
    subtitle: 'Playlist · João',
    coverSource: require('../../assets/images/macarrao.png'),
    route: '/playlists/macarrao',
  },
];

export default function LibraryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Sua Biblioteca</Text>
          <View style={styles.headerIcons}>
            <Ionicons name="search" size={20} color="#ffffff" />
            <Ionicons name="add" size={24} color="#ffffff" />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersRow}>
          {quickFilters.map((filter) => (
            <View key={filter} style={styles.filterChip}>
              <Text style={styles.filterText}>{filter}</Text>
            </View> 
          ))}
        </ScrollView>

        <FlatList
          data={libraryItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.itemRow} onPress={() => router.push(item.route)}>
              <Image source={item.coverSource} style={styles.coverImage} />
              <View style={styles.textArea}>
                <Text numberOfLines={1} style={styles.itemTitle}>
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={styles.itemSubtitle}>
                  {item.subtitle}
                </Text>
              </View>
            </Pressable>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        <View style={styles.miniPlayer}>
          <Image source={require('../../assets/images/vitaminabanana.png')} style={styles.miniCover} />
          <View style={styles.miniTextArea}>
            <Text numberOfLines={1} style={styles.miniTitle}>
              DNA
            </Text>
            <Text numberOfLines={1} style={styles.miniSubtitle}>
              Ryu, The Runner
            </Text>
          </View>
          <Ionicons name="play" size={18} color="#ffffff" />
        </View>
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
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  filtersRow: {
    gap: 6,
    marginBottom: 2,
    paddingRight: 12,
    
  },
  filterChip: {
    backgroundColor: '#1f1f1f',
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 6,
    height:40,
  },
  filterText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    
  },
  itemRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  coverImage: {
    borderRadius: 3,
    height: 54,
    width: 54,
    
  },
  textArea: {
    flex: 1,
    gap: 4,
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  itemSubtitle: {
    color: '#a8a8a8',
    fontSize: 13,
  },
  listContent: {
    paddingTop:10,
    paddingBottom: 130,
  },
  miniPlayer: {
    alignItems: 'center',
    backgroundColor: '#3d3f3b',
    borderRadius: 10,
    bottom: 10,
    flexDirection: 'row',
    gap: 10,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 8,
    position: 'absolute',
    right: 0,
  },
  miniCover: {
    borderRadius: 4,
    height: 40,
    width: 40,
  },
  miniTextArea: {
    flex: 1,
  },
  miniTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  miniSubtitle: {
    color: '#d2d2d2',
    fontSize: 12,
  },
});
