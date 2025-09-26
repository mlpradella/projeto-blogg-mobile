import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { DefaultTheme } from '@react-navigation/native';
import { Colors } from '@/constants/theme';
import { Background } from '@react-navigation/elements';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={styles.teste4}>RECOMENDAÇÕES</ThemedText>
        </ThemedView>

        <ThemedText type="title" style={styles.topico}>ROMANCE</ThemedText >

        <Image
 source={require('@/assets/images/antesdoamanecer 1.png')}
 style={styles.newImageStyle}
 />

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
      backgroundColor: '#00002B',
    alignItems: 'center',
    gap: 8,
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  teste4: {
    color: '#FFBE63',
    fontFamily: 'ui-sans-serif',
  },

  topico: {
    color: '#FF3860',
    fontSize: 20,
    
  },

newImageStyle: {
   width: '100%',
   height: 200,
   resizeMode: 'contain',
   marginTop: 5,
   marginLeft: -120,
   
    },
  });



