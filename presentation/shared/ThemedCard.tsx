import { View, Text, ViewProps } from 'react-native';

interface Props extends ViewProps {
  className?: string;
}

const ThemedCard = ({ className, children }: Props) => {
  return (
    <View className={`rounded-xl bg-white p-2 shadow shadow-black/5 dark:bg-black/10 ${className}`}>
      {children}
    </View>
  );
};
export default ThemedCard;
