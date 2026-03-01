import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Cabeçalho principal da tela "Sua Biblioteca".
 *
 * Ele foi separado para você reutilizar o padrão em outras telas:
 * - bloco de título
 * - ações no canto direito
 */
export function SpotifyLibraryHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.leftArea}>
        <View style={styles.avatar} />
        <Text style={styles.title}>Sua Biblioteca</Text>
      </View>

      <View style={styles.actions}>
        <Ionicons name="search" size={22} color="#ffffff" />
        <Ionicons name="add" size={24} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  leftArea: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  avatar: {
    backgroundColor: '#305a3f',
    borderRadius: 100,
    height: 28,
    width: 28,
    marginBottom:-50,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: -50,
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
  },
});
