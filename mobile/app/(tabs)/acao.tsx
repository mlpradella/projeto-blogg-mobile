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
            <ThemedText type="subtitle" style={styles.titulo1}>Tropa de elite</ThemedText>
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

      <View style={styles.sinopse1coluna}>
         <ThemedText type='default' style={styles.sinopse1}>
         Em "Tropa de Elite", o Capitão Nascimento, do Batalhão de Operações Especiais (BOPE),
         precisa encontrar um substituto enquanto comanda a missão de pacificar uma favela. Durante a operação, 
         ele resgata dois aspirantes a oficiais, Neto e Matias, que, inspirados, buscam entrar para a sua equipe.
        </ThemedText>
        </View>

          <ThemedView style={styles.texto}>
            <ThemedText style={styles.opiniao1}
            type="default">O filme vai muito além de ser apenas um filme de ação ele é uma análise profunda sobre corrupção,
             violência e os dilemas morais enfrentados pelos policiais.
            O que realmente marca o filme é a narração de Wagner Moura como o Capitão Nascimento. 
            Sua voz, direta e incisiva, nos guia por um universo de decisões extremas, onde não há espaço para fraquezas.
             As cenas de treinamento do BOPE são intensas e brutalmente realistas, mostrando o nível de pressão psicológica 
             e física que os aspirantes a oficiais precisam suportar.
             </ThemedText>

             <ThemedText  style={styles.data1} type='default'> 04/06/2025</ThemedText>
          
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle" style={styles.titulo2}>Busca Implacável</ThemedText>
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

    <View style={styles.sinopse2coluna}>
         <ThemedText type='default' style={styles.sinopse2}>
         Bryan Mills, um ex-agente do governo com habilidades especiais, precisa usar seu passado para resgatar sua filha, Kim,
        que é sequestrada por traficantes em Paris. Ele tem pouco tempo para encontrá-la antes que ela seja vendida.
        </ThemedText>
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

      titulo1: {
        color: '#3d723f',
      },
      
      titulo2: {
        color: '#3d723f',
      },

      stepContainer: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B', 
        marginLeft: 15,
        marginTop: 15,
      },

      sinopse1coluna:{
       flex: 1,
       justifyContent: 'flex-start',
       marginTop: -181,
      },

      sinopse1:{
        fontSize: 13,
        maxWidth: 190,
        lineHeight: 15,
        marginLeft: 175,
      },

      sinopse2:{
        fontSize: 13,
        maxWidth: 190,
        lineHeight: 14,
        marginLeft: 175,
      },

      sinopse2coluna:{
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: -159,
      },

      opiniao1: {
        fontSize:14,
        marginLeft: 10, 
        marginTop: 1,
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
        marginTop: -97,
        alignItems: 'flex-start',
      },

      data1:{
        color: '#3d723f',
        marginTop: 20,
        marginLeft: 252,
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
        marginTop: -80,
        alignItems: 'flex-start',
      },
    }
  );

  
      

