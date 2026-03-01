import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Mini player fixo no rodapé da tela.
 *
 * É apenas visual para referência de layout,
 * sem controles reais de áudio.
 */
export function MiniPlayer() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cover} />

        <View style={styles.textArea}>
          <Text numberOfLines={1} style={styles.trackName}>
            REBECA · Alee
          </Text>
          <Text numberOfLines={1} style={styles.device}>
            Web Player (Chrome)
          </Text>
        </View>

        <View style={styles.actions}>
          <Ionicons name="laptop-outline" size={18} color="#3bd170" />
          <Ionicons name="add-circle-outline" size={22} color="#ffffff" />
          <Ionicons name="pause" size={22} color="#ffffff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6a1f1f',
    borderRadius: 6,
    bottom: 20,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 9,
    position: 'absolute',
    right: 10,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  cover: {
    backgroundColor: '#8c2a2a',
    height: 36,
    width: 36,
  },
  textArea: {
    flex: 1,
    gap: 2,
  },
  trackName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  device: {
    color: '#d8d8d8',
    fontSize: 11,
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
