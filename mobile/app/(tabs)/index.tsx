import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { window } from '@/constants/sizes';
import { useRouter } from 'expo-router';

const cardData = [
  {
    title: 'AÇÃO',
    description:
      'Nada me empolga mais do que explosões, fugas e aventuras arriscadas! Cada cena me faz sentir a adrenalina correr nas veias! Neste post, você vai conhecer meus filmes de ação favoritos.',
    author: 'Maria Luiza',
    color: '#95b963',
    route: '/(tabs)/acao',
  },
  {
    title: 'ANIMAÇÃO',
    description:
      'É incrível como cada história animada consegue ensinar e encantar ao mesmo tempo. Te convido a ver meus filmes de animação preferidos para passar o tempo. ^^',
    author: 'Bianca Amorim',
    color: '#7d5b8c',
    route: '/(tabs)/animacao',
  },
  {
    title: 'DRAMA',
    description:
      'Filmes de drama falam sobre a vida real, sobre sentimentos e decisões que mudam tudo. Acho que se quer sentir uma dor emocional, meu post é para você...',
    author: 'Allan',
    color: '#5391c7',
    route: '/(tabs)/drama',
  },
  {
    title: 'ROMANCE',
    description:
      'Os filmes de romance me fazem sonhar, sorrir e até derramar algumas lágrimas. Vem se apaixonar comigo conhecendo aos meus filmes de romance preferidos <3',
    author: 'Kamilly',
    color: '#e994b7',
    route: '/(tabs)/romace',
  },
  {
    title: 'TERROR',
    description:
      'Quanto mais suspense e mistério, melhor! Gosto de mergulhar no clima sombrio e descobrir o que se esconde nas sombras. Se você tem esse sentimento vendo filmes de terror, conheça minhas recomendações!!',
    author: 'Maykon',
    color: '#a82223',
    route: '/(tabs)/terror',
  },
];

export default function HomeScreen() {
  const progress = useSharedValue<number>(0);
  const router = useRouter();

  const renderItem = React.useCallback(
    ({ item }: { item: any }) => (
      <View style={[styles.card, { backgroundColor: item.color }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.author}>by {item.author}</Text>

        <TouchableOpacity
          style={styles.buttonCard}
          activeOpacity={0.8}
          onPress={() => router.push(item.route)}
        >
          <Text style={styles.buttonText}>Ver Post</Text>
        </TouchableOpacity>
      </View>
    ),
    [router]
  );

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">new blog!</ThemedText>
        <ThemedText type="title" style={styles.fonte}>
          POCSCAST
        </ThemedText>
        <ThemedText type="subtitle">MOVIES</ThemedText>
        <ThemedText type="subtitle" style={styles.subtitulo}>
          principais destaques
        </ThemedText>
      </ThemedView>

      <View style={styles.carouselContainer}>
        <Carousel
          autoPlayInterval={2500}
          data={cardData}
          height={520}
          loop
          pagingEnabled
          snapEnabled
          width={window.width}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: 50,
          }}
          onProgressChange={progress}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.recommendationContainer}>
        <Text style={styles.recommendationText}>
          Conheça as recomendações da semana :)
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.push('/(tabs)/recomendacao')}
        >
          <Text style={styles.buttonText}>clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitulo: {
    marginTop: 12,
    fontSize: 15,
  },
  fonte: {
    fontFamily: 'ui-sans-serif',
  },
  container: {
    flex: 1,
    backgroundColor: '#00002B',
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#00002B',
    paddingVertical: 1,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 60,
  },
  card: {
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 20,
    padding: 25,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 30,
    flexGrow: 1,
  },
  author: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  recommendationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 25,

  },
  recommendationText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  }
});