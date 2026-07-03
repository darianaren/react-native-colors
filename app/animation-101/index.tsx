import { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useAnimation } from '@/hooks/useAnimation';

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

  return (
    <ThemedView margin className="flex-1 items-center justify-center">
      <Animated.View
        className="rounded-xl bg-light-secondary dark:bg-dark-secondary"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity, //animatedOpacity
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 700,
          });
        }}>
        FadeIn
      </ThemedButton>

      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
