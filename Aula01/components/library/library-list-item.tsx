import type { LibraryListItemProps } from '@/components/library/library-types';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Item de lista da biblioteca.
 *
 * Padrão sugerido para outras telas:
 * - componente pequeno e focado
 * - dados recebidos por props
 * - variação visual baseada no conteúdo
 */
export function LibraryListItem({ item }: LibraryListItemProps) {
  const coverStyle = [
    styles.cover,
    item.accent === 'green' && styles.coverGreen,
    item.accent === 'purple' && styles.coverPurple,
  ];

  return (
    <View style={styles.container}>
      <View style={coverStyle}>
        {item.id === 'episodes' ? <Ionicons name="bookmark" size={18} color="#ffffff" /> : null}
        {item.id === 'liked' ? <Ionicons name="heart" size={16} color="#ffffff" /> : null}
      </View>

      <View style={styles.textArea}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  cover: {
    alignItems: 'center',
    backgroundColor: '#343434',
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  coverGreen: {
    backgroundColor: '#127742',
  },
  coverPurple: {
    backgroundColor: '#6638c6',
  },
  textArea: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#a8a8a8',
    fontSize: 13,
  },
});
