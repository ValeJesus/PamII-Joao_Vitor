import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Tela placeholder para a aba "Criar".
 *
 * Mantida mínima para que você implemente seus próprios fluxos.
 */
export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="add-circle-outline" size={32} color="#ffffff" />
      <Text style={styles.title}>Criar</Text>
      <Text style={styles.description}>Adicione aqui playlist, post ou novos recursos.</Text>
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
