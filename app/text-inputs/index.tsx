import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { TextInput } from 'react-native';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <ThemedView>
      <ThemedCard>
        <ThemedTextInput
          placeholder="Nombre Completo"
          autoCapitalize="words"
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </ThemedCard>

      <ThemedCard>
        <ThemedTextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
      </ThemedCard>

      <ThemedCard>
        <ThemedTextInput
          placeholder="Teléfono"
          keyboardType="number-pad"
          onChangeText={(text) => setForm({ ...form, phone: text })}
        />
      </ThemedCard>

      <ThemedCard className="mt-4">
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
