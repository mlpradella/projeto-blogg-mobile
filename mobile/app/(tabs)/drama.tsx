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
        <ThemedText type="title" style={styles.teste}>DRAMA</ThemedText>
        <ThemedText type="subtitle" style={styles.testee}>As vantagens de ser invisível</ThemedText>
      <div style={styles.ladinho}>
      <Image
        source={require('@/assets/images/vant.png')} 
        style={styles.newImageStyle}
      />
      <Image
        source={require('@/assets/images/12.png')} 
        style={styles.newImageStyle2}
      />
      <div>
      <ThemedText type="subtitle" style={styles.testeee}>2o12</ThemedText>
      </div>
      </div>
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
    display: 'flex',
    justifyContent: 'center',
    color: '#244A80',
    marginTop: 30,
    fontFamily: 'ui-sans-serif',
  },
  testee: {
    color: '#377A98',
    marginTop: 35,
    marginLeft: 30,
  },
  testeee: {
    color: '#E0E0E0',
    marginLeft: -100,
  },
  newImageStyle: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: -170,
  },
  newImageStyle2: {
    height: 10,

  },
  ladinho: {
    display: 'flex',
    justifyContent: 'center',
  },
});