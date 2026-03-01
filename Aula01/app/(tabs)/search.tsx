import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Tela placeholder para a aba "Buscar".
 *
 * Mantida simples de propósito para você usar como base
 * e evoluir com sua própria interface depois.
 */
export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={30} color="#ffffff" />
      <Text style={styles.title}>Buscar</Text>
      <Text style={styles.description}>Use esta estrutura para montar sua próxima tela.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000000',
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    color: '#9f9f9f',
    fontSize: 14,
    textAlign: 'center',
  },
});
