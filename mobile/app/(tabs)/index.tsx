import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { window } from '@/constants/sizes';
import { useRouter } from 'expo-router';

const imageData = [
  { src: require('@/assets/images/verde.png'), route: '/(tabs)/acao' },
  { src: require('@/assets/images/roxo.png'), route: '/(tabs)/animacao' },
  { src: require('@/assets/images/azul.png'), route: '/(tabs)/drama' },
  { src: require('@/assets/images/rosa.webp'), route: '/(tabs)/romace' },
  { src: require('@/assets/images/vermelho.png'), route: '/(tabs)/terror' },
];

export default function HomeScreen() {
  const progress = useSharedValue<number>(0);
  const router = useRouter();

  const renderItem = React.useCallback(({ item }: { item: any; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => router.push(item.route)}
      >
        <Image source={item.src} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
    );
  }, [router]);

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">new blog!</ThemedText>
        <ThemedText type="title" style={styles.fonte}>POCSCAST</ThemedText>
        <ThemedText type="subtitle">MOVIES</ThemedText>
        <ThemedText type="subtitle" style={styles.subtitulo}>principais destaques</ThemedText>
      </ThemedView>

      <View style={styles.carouselContainer}>
        <Carousel
          autoPlayInterval={2000}
          data={imageData}
          height={550}
          loop
          pagingEnabled
          snapEnabled
          width={window.width}
          style={{ width: window.width }}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.7,
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
    backgroundColor: '#00002b',
    paddingVertical: 1,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, 
    marginBlockEnd:65,
    
  },
  card: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  recommendationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
    marginBottom: 40,
  },
  recommendationText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
    marginTop:10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
  },
});
