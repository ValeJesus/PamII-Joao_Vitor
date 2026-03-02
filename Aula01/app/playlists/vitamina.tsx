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
  { id: '1', title: 'Vinte Grãos de Areia', artist: 'Pecaos', cover: require('../../assets/images/vitaminabanana.png') },
  { id: '2', title: 'Traumas', artist: 'Gyylo, Tiizy', cover: require('../../assets/images/vitaminamorango.png') },
  { id: '3', title: 'Rosa', artist: 'iann guxtavo, Gyylo, Elleven', cover: require('../../assets/images/pelelist.png') },
  { id: '4', title: 'Poesia de Porão', artist: 'Gyylo', cover: require('../../assets/images/vitaminabanana.png') },
  { id: '5', title: 'Surtar Faz Parte do Processo', artist: 'Gyylo, iann guxtavo, Elleven', cover: require('../../assets/images/vitaminamorango.png') },
  { id: '6', title: 'Chá de Vida', artist: 'MC Marks, MC Hariel, Perera DJ', cover: require('../../assets/images/pelelist.png') },
];

export default function VitaminaPlaylistScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#ffffff" />
        </Pressable>

        <Image source={require('../../assets/images/vitaminabanana.png')} style={styles.cover} />

        <Text style={styles.title}>Vitamina de banana</Text>
        <Text style={styles.subtitle}>João · 1 salvamento · 35h 49min</Text>

        <View style={styles.actionsRow}>
          <Ionicons name="download-outline" size={24} color="#1ed760" />
          <Ionicons name="share-social-outline" size={24} color="#ffffff" />
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