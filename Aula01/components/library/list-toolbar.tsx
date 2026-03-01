import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Linha entre os filtros e a lista.
 * Mostra ordenação e botão visual de layout.
 */
export function ListToolbar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftArea}>
        <Ionicons name="swap-vertical" size={14} color="#b3b3b3" />
        <Text style={styles.text}>Recentes</Text>
      </View>

      <Ionicons name="grid-outline" size={16} color="#b3b3b3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  leftArea: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  text: {
    color: '#b3b3b3',
    fontSize: 13,
    fontWeight: '600',
  },
});
