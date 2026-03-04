import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

type SongItem = {
  id: string;
  title: string;
  artist: string;
  cover: ImageSourcePropType;
};

const songs: SongItem[] = [
  { id: '1', title: 'SLOW DANCING IN THE DARK', artist: 'Joji', cover: require('../../assets/images/slow.png') },
  { id: '2', title: 'Lonely Day', artist: 'System Of A Down', cover: require('../../assets/images/sofd.png') },
  { id: '3', title: 'Constellations', artist: 'Jade LeMac', cover: require('../../assets/images/constellations.png') },
  { id: '4', title: 'Please, Please, Please, Let Me Get W...', artist: 'The Smiths', cover: require('../../assets/images/thesmiths.png') },
  { id: '5', title: 'In the End', artist: 'Linkin Park', cover: require('../../assets/images/linkpark.png') },
  { id: '6', title: 'Moth To a Flame(With the Weeknd)', artist:'Swedish House Mafia', cover: require('../../assets/images/moth.png') },
  { id: '7', title: 'Apocalypse', artist:'Cigarettes After Sex', cover: require('../../assets/images/cigarettes.png')},
  { id: '8', title: 'Training Wheels', artist: 'Melanie Martinez', cover: require('../../assets/images/crybaby.png')},
  { id: '9', title: 'The Way I Love You', artist: 'Jorja Smith', cover: require('../../assets/images/thewayilove.png')},
  { id: '10', title: 'Veludo Marrom', artist: 'Liniker', cover: require('../../assets/images/veludo.png')},
  { id: '11', title: 'Tempo Perdido', artist: 'Legião Urbana', cover: require('../../assets/images/legiao.png')},
  { id : '12', title: 'Lanterna Dos Afogados', artist: 'Os Paralamas Do Sucesso', cover: require('../../assets/images/lantafogados.png')},
  { id : '13', title:'Anti-Heroi' , artist: 'Link Do Zap', cover: require('../../assets/images/linkpark.png')},
  { id : '13', title:'Te Esperando' , artist: 'Luan Santana', cover: require('../../assets/images/luan.png')},
  { id : '13', title:'Me Um Block Nele' , artist: 'João Gomes', cover: require('../../assets/images/joaogomes.png')},
  { id : '13', title:'Flashback' , artist: 'MC Paulin da Capital', cover: require('../../assets/images/flashback.png')},
  
];

export default function MacarraoPlaylistScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#ffffff" />
        </Pressable>

        <Image source={require('../../assets/images/dogmal.png')} style={styles.cover} />

        <Text style={styles.title}>Nana Playlist</Text>
        <Text style={styles.subtitle}>João · 1h 2min</Text>

        <View style={styles.actionsRow}>
          <Ionicons name="add" size={24} color="#ffffff" />
          <Ionicons name="shuffle" size={24} color="#1ed760" />
          <Ionicons name="play-circle" size={60} color="#1ed760" />
        </View>

        {songs.map((song) => (
          <View key={song.id} style={styles.songCard}>
            <Image source={song.cover} style={styles.songCover} />
            <View style={styles.songTextArea}>
              <Text numberOfLines={1} style={styles.songTitle}>
                {song.title}
              </Text>
              <Text numberOfLines={1} style={styles.songArtist}>
                {song.artist}
              </Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={18} color="#9b9b9b" />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#000000',
    flex: 1,
  },
  content: {
    paddingBottom: 24,
    paddingHorizontal: 18,
  },
  backButton: {
    marginBottom: 12,
    marginTop: 8,
    width: 32,
  },
  cover: {
    alignSelf: 'center',
    borderRadius: 8,
    height: 240,
    marginBottom: 18,
    width: 240,
  },
  title: {
    color: '#ffffff',
    fontSize: 44,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#bebebe',
    fontSize: 17,
    marginBottom: 16,
  },
  actionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 22,
    marginBottom: 16,
  },
  songCard: {
    alignItems: 'center',
    backgroundColor: '#111111',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  songCover: {
    borderRadius: 6,
    height: 54,
    marginRight: 10,
    width: 54,
  },
  songTextArea: {
    flex: 1,
  },
  songTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10,
  },
  songArtist: {
    color: '#a8a8a8',
    fontSize: 15,
    marginTop: 2,
  },
});
