import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { Text } from 'react-native';

export default function Home() {
  return (
    <ThemedView>
      <ThemedText className="text-3xl">Hola mundo</ThemedText>
    </ThemedView>
  );
}
