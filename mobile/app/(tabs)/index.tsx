import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { window } from '@/constants/sizes';

// Substituindo URLs externas por imagens locais
const imageData = [
  require('@/assets/images/dr.png'), 
  require('@/assets/images/km.png'), 
  require('@/assets/images/dr.png'), 
  require('@/assets/images/km.png'), 
  require('@/assets/images/dr.png'), 
  require('@/assets/images/km.png'), 
];

export default function HomeScreen() {
  const progress = useSharedValue<number>(0);

  const renderItem = React.useCallback(({ item }: { item: any; index: number }) => {
    return (
      <View style={styles.card}>
        <Image
          source={item} // Usando a imagem local
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  }, []);

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
          loop={true}
          pagingEnabled={true}
          snapEnabled={true}
          width={window.width}
          style={{ width: window.width }}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.70,
            parallaxScrollingOffset: 50,
          }}
          onProgressChange={progress}
          renderItem={renderItem}
        />
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
    gap: 0,
    backgroundColor: '#00002b',
    fontFamily: 'ui-sans-serif',
    paddingVertical: 1,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    marginHorizontal: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 0,
    width: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
