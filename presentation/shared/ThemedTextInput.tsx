import { TextInputProps, TextInput } from 'react-native';

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className={`px-2 py-4 text-black dark:text-white ${className}`}
      placeholderTextColor="grey"
      {...rest}
    />
  );
};

export default ThemedTextInput;
