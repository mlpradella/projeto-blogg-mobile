import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titulo}>Animação</ThemedText>
      </ThemedView>
      <Image
          source={require('@/assets/images/noiva-cadaver.png')}
          style={styles.imagem}
          contentFit="cover"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: { 
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#00002B',
  },

  imagem: {
    width: 150,
    height: 200,
    borderRadius: 10,
    borderLeftWidth: 40,
    borderTopWidth: 30,
    borderColor: '#00002B',
  },
  titulo: {
    color: '#AB51DF',
    fontSize: 24,
    fontWeight: 'bold',
    borderTopWidth: 15,
    borderColor: '#00002B',
  },
  
  container: {
    flex: 1,
    backgroundColor: '#00002B',
  },
});
