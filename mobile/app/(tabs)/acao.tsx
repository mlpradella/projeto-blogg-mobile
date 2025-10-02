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

          <ThemedView style={styles.texto}>
            <ThemedText style={styles.opiniao}
            type="subtitle">O filme vai muito além de ser apenas um filme de ação ele é uma análise profunda sobre corrupção, violência e os dilemas morais enfrentados pelos policiais.
            O que realmente marca o filme é a narração de Wagner Moura como o Capitão Nascimento. Sua voz, direta e incisiva, nos guia por um universo de decisões extremas, onde não há espaço para fraquezas. As cenas de treinamento do BOPE são intensas e brutalmente realistas, mostrando o nível de pressão psicológica e física que os aspirantes a oficiais precisam suportar.</ThemedText>
          </ThemedView>

          <Image
        source={require('@/assets/images/busca-implacavel.png')}
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
        backgroundColor: '#00002B', 
      },

      opiniao: {
        fontSize:16,
        marginLeft: 10, 
      },

      texto: {
        backgroundColor: '#00002B',
        fontSize: 12,
      },

      newImageStyle: {
        height: 250,
        width: 'auto', 
        resizeMode: 'contain',
        paddingTop: 5, 
        marginLeft: -450,
      },
    });

  
      

