import type { QuickFilter } from '@/data/library-data';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

type FilterChipsProps = {
  filters: QuickFilter[];
};

/**
 * Barra horizontal de filtros rápidos.
 *
 * O foco aqui é visual. Se quiser comportamento real,
 * você pode adicionar estado de seleção depois.
 */
export function FilterChips({ filters }: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {filters.map((filter) => (
        <TouchableOpacity key={filter.id} activeOpacity={0.85} style={styles.chip}>
          <Text style={styles.chipLabel}>{filter.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 8,
    paddingBottom: 14,
  },
  chip: {
    backgroundColor: '#202020',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  chipLabel: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});
