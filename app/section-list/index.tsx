import { houses } from '@/constants/Houses';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { SectionList } from 'react-native';

const SectionListScreen = () => {
  houses;
  return (
    <ThemedView>
      <ThemedCard>
        <SectionList
          sections={houses}
          keyExtractor={(item) => item}
          renderItem={(entry) => <ThemedText>{entry.item}</ThemedText>}
          ListHeaderComponent={() => (
            <ThemedText type="h1" className="mb-3 font-bold">
              Personajes
            </ThemedText>
          )}
          renderSectionHeader={({ section }) => (
            <ThemedText
              type="h2"
              className="rounded bg-light-background p-4 text-center dark:bg-dark-background">
              {section.title}
            </ThemedText>
          )}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            <ThemedText
              type="semi-bold"
              className="my-4 bg-light-background text-2xl dark:bg-dark-background">
              Secciones: {houses.length}
            </ThemedText>
          )}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default SectionListScreen;
