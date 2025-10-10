import { Image } from 'expo-image';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.container}>
          <ThemedView style={styles.titulo}>
            <ThemedText type="title" style={styles.tituloacao}>Ação</ThemedText>
          </ThemedView>
    
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Tropa de elite</ThemedText>
          </ThemedView>

          <View style={styles.imageRow}>
  <Image
    source={require('@/assets/images/tropa-elite.png')}
    style={styles.capa1elite}
  />
  <Image
    source={require('@/assets/images/avaliacao-acao.png')}
    style={styles.avaliacao1elite}
  />
</View>

          <ThemedView style={styles.texto}>
            <ThemedText style={styles.opiniao1}
            type="default">O filme vai muito além de ser apenas um filme de ação ele é uma análise profunda sobre corrupção, violência e os dilemas morais enfrentados pelos policiais.
            O que realmente marca o filme é a narração de Wagner Moura como o Capitão Nascimento. Sua voz, direta e incisiva, nos guia por um universo de decisões extremas, onde não há espaço para fraquezas. As cenas de treinamento do BOPE são intensas e brutalmente realistas, mostrando o nível de pressão psicológica e física que os aspirantes a oficiais precisam suportar.</ThemedText>
          
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Busca Implacável</ThemedText>
          </ThemedView>

          <View style={styles.imageRow}>
  <Image
    source={require('@/assets/images/busca-implacavel.png')}
    style={styles.capa2busca}
  />
  <Image
    source={require('@/assets/images/avaliacao-busca.png')}
    style={styles.avaliacao2busca}
  />
</View>

        </View>
        </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#00002B', 
      },

      titulo: {
        alignItems: 'center',
        backgroundColor: '#00002B',
        textAlign: 'center',
        marginTop: 15, 
        marginBottom: 25, 
      },

      tituloacao: {
        fontFamily: 'ui-sans-serif',
        color: '#3D723F',
        fontSize: 50,
        marginBottom: -15,
      },

      stepContainer: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B', 
        marginLeft: 15,
        marginTop: 15,
      },

      opiniao1: {
        fontSize:14,
        marginLeft: 10, 
        marginTop: -35,
        lineHeight: 21,
        maxWidth: 345,
      },

      texto: {
        backgroundColor: '#00002B',
        fontSize: 12,
        marginTop: 15,
      },


      scrollContent:{
      },

      imageRow: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      
      capa1elite:{
        height: 250,
        width: 150,
        resizeMode: 'contain',
        marginRight: 200,
        marginTop: -10,
        marginLeft: 10,
        alignItems: 'flex-start',
      },
      
      avaliacao1elite:{
        height: 270,
        width: 120,
        resizeMode: 'contain',
        marginLeft: -190,
        marginTop: -90,
        alignItems: 'flex-start',
      },
      capa2busca:{
        height: 250,
        width: 150,
        resizeMode: 'contain',
        marginRight: 200,
        marginTop: -20,
        marginLeft: 10,
        alignItems: 'flex-start',
      },
      avaliacao2busca:{
        height: 250,
        width: 100,
        resizeMode: 'contain',
        marginLeft: -190,
        marginTop: -68,
        alignItems: 'flex-start',
      },
    }
  );

  
      

