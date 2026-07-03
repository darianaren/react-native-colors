import ThemedView from '@/presentation/shared/ThemedView';
import { Text } from 'react-native';

export default function Home() {
  return (
    <ThemedView>
      <Text className="text-3xl">Hola mundo</Text>
    </ThemedView>
  );
}
