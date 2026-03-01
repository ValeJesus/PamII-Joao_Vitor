import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

/**
 * Layout das abas inferiores.
 *
 * Dica para próximas telas:
 * - cada Tabs.Screen aponta para um arquivo dentro de app/(tabs)
 * - o `name` precisa ser o mesmo nome do arquivo da rota
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Cores da barra de navegação no estilo escuro (inspirado no Spotify).
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#8a8a8a',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#000000',
        },
        // Mantém feedback tátil no toque das abas.
        tabBarButton: HapticTab,
      }}>
      {/* Rota: app/(tabs)/home.tsx */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      {/* Rota: app/(tabs)/search.tsx */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
        }}
      />
      {/* Rota: app/(tabs)/index.tsx (biblioteca) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sua Biblioteca',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="books.vertical.fill" color={color} />,
        }}
      />
      {/* Rota: app/(tabs)/create.tsx */}
      <Tabs.Screen
        name="create"
        options={{
          title: 'Criar',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus" color={color} />,
        }}
      />
    </Tabs>
  );
}
