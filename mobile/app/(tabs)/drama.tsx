import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.teste}>DRAMA</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.testee}>As vantagens de ser invisível</ThemedText>
      </ThemedView>
      
      <Image
        source={require('@/assets/images/vant.png')} 
        style={styles.newImageStyle}
      />
      
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00002E', 
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 415,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  teste: {
    fontSize: 40,
    color: '#244A80',
    marginTop: 30,
  },
  testee: {
    color: '#377A98',
    marginTop: 35,
    marginLeft: 30,
  },
  newImageStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: -120,
  },
});