import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
    
      headerBackgroundColor={{ light: '#00002B', dark: '#00002B' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">new blog!</ThemedText>
        <ThemedText type="title">POCSCAST</ThemedText>
        <ThemedText type="subtitle">MOVIES</ThemedText>
      </ThemedView>

      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({

  titleContainer: {
    alignItems: 'center',
    gap: 8,
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
