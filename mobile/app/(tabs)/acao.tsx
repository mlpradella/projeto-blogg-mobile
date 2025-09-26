import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { getBackgroundColorAsync } from 'expo-system-ui';

export default function HomeScreen() {
  return (
        <View style={styles.container}>
          <ThemedView style={styles.titulo}>
            <ThemedText type="title" style={styles.tituloacao}>Ação</ThemedText>
          </ThemedView>
    
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Tropa de elite</ThemedText>
          </ThemedView>
          <Image
        source={require('@/assets/images/tropa-elite.png')}
        style={styles.newImageStyle}
        />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#00002B', 
      },

      titulo: {
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#00002B',
        textAlign: 'center'
      },

      tituloacao: {
        fontFamily: 'ui-sans-serif'
      },

      stepContainer: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B'
      },

      reactLogo: {
        height: 280,
        width: 550,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
      newImageStyle: {
        height: 250,
        width: 'auto', 
        resizeMode: 'contain',
        paddingTop: 5, 
        marginLeft: -420,
      },
    });

  
      

