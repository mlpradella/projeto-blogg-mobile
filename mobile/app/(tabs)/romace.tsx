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
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Romance</ThemedText>
          </ThemedView>
    
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Simplismente Acontece</ThemedText>
          </ThemedView>

        
      
        </View>
      );
    }
   
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#00002B',
      },

      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#00002B'
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
    })

