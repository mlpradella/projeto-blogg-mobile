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
      
        <ThemedText type="title" style={styles.teste2}>TERROR</ThemedText >
        <ThemedText type="title" style={styles.teste22}>top terror da atualidade</ThemedText >
        <Image
        source={require('@/assets/images/invocaçao.png')}
        style={styles.newImageStyle}
        />
         <ThemedText type="title" style={styles.teste222}>o filme e muito bom, uma das minhas franquias de filmes favorita, eu amo esse tipo de filme de terror religioso mas acho que mesmo sem gostar, todo mundo deveria ver esse filme, a trilha sonora e o suspense antes do susto sao os seus pontos altos  </ThemedText >
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
    color: '#00000',
  },
  reactLogo: {
    height: 280,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  teste2: {
    color: '#911315',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'ui-sans-serif',
  },
  teste22: {
    color: '#E0E0E0',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'ui-sans-serif',
  },
  subtitulo: {
    color: '#ffffff',
  },
  newImageStyle: {
    height: 280, 
    width: 170,
  marginLeft: 10,
  marginTop: 30,
  borderRadius: 25,
  },
  teste222: {
    marginTop: 20,
    width: 200,
    height: 15,
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'ui-sans-serif',
  },
});
