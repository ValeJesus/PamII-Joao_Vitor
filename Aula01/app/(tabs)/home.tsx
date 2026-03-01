import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Tela placeholder para a aba "Início".
 *
 * Você pode copiar o mesmo padrão da tela biblioteca:
 * Header + blocos + lista + componentes pequenos.
 */
export default function HomePlaceholderScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={30} color="#ffffff" />
      <Text style={styles.title}>Início</Text>
      <Text style={styles.description}>Crie aqui a tela de recomendações.</Text>
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
