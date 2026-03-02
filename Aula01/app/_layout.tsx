import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

/**
 * Define que o grupo de abas é a âncora da navegação principal.
 * Isso facilita quando você quiser adicionar telas fora das tabs
 * (ex.: modal, detalhes, configurações).
 */
export const unstable_settings = {
  anchor: '(tabs)',
};

/**
 * Layout raiz do app.
 *
 * Responsabilidades deste arquivo:
 * - aplicar tema global (claro/escuro)
 * - registrar as rotas principais no Stack
 * - configurar a StatusBar
 */
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // ThemeProvider injeta as cores de navegação em toda a aplicação.
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Grupo principal de abas (Início, Buscar, Biblioteca, Criar) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="playlists/vitamina" options={{ headerShown: false }} />
        <Stack.Screen name="playlists/macarrao" options={{ headerShown: false }} />
        {/* Exemplo de rota fora das tabs, apresentada como modal */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      {/* Barra de status clara combina melhor com fundo escuro da interface */}
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
