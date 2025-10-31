import { Image } from 'expo-image';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText type="title" style={styles.titulo}>Animação</ThemedText>
        </ThemedView>

        <View style={styles.filmeimagem}></View>
  <ThemedText style={styles.filmetitulo}>
    <ThemedText type='default' style={[styles.filme1, { fontSize: 19 }]}>A Noiva Cadáver</ThemedText>
  </ThemedText>
  <View style={styles.horizontal}>
  <View style={styles.capa1coluna}>
    <Image
      source={require('@/assets/images/noiva-cadaver.png')}
      style={styles.imagem}
      contentFit="cover"
    />
    <Image
      source={require('@/assets/images/noivacadaver-avaliacao.png')}
      style={styles.avaliacao1}
      contentFit="cover"
    />
  </View>
  <View style={styles.sinopse1coluna}>
    <ThemedText type='default' style={styles.sinopse1}>
      As famílias de Victor e Victoria estão arranjando seu 
      casamento. Nervoso com a cerimônia, Victor vai sozinho 
      à floresta para ensaiar. No entanto, o que ele pensava 
      ser um tronco de árvore na verdade é o braço esquelético 
      de uma noiva que foi assassinada. Convencida que Victor 
      acabara de lhe pedir a mão em casamento, Emily o leva 
      para o mundo dos mortos.
    </ThemedText>
  </View>
</View>

        
        <ThemedText type='default' style={styles.opiniao1}>
          Gosto muito da animação e história geral do filme, o final não 
          é totalmente esperado pelos espectadores e digo isso por 
          experiência própria. Mesmo sendo um filme considerado infantil, 
          as músicas são boas e várias falam sobre problemas pessoais como 
          comparação e o sentimento de solidão.
          Os personagens possuem um motivo existente por trás das ações, 
          não os deixando jogados e monótonos no meio dos acontecimentos.
        </ThemedText>

        <ThemedText type='default' style={styles.data1}>
          24/01/2025
        </ThemedText>


        <ThemedText style={styles.filmetitulo2}>
  <ThemedText type='default' style={[styles.filme2, { fontSize: 19 }]}>Valente</ThemedText>
</ThemedText>

        <View style={styles.horizontal}>
          <View style={styles.capa2linha}>
            <Image
              source={require('@/assets/images/valente.png')}
              style={styles.imagem}
              contentFit="cover"
            />
            <Image
              source={require('@/assets/images/valente-avaliacao.png')}
              style={styles.avaliacao2}
              contentFit="cover"
            />
          </View>

          <View style={styles.sinopse2coluna}>
            <ThemedText type='default' style={styles.sinopse2}>
              A princesa Merida deve seguir os costumes do seu reino e 
              tornar-se rainha ao lado do cavalheiro que conseguir a 
              sua mão durante um torneio de arco e flecha. Porém, a 
              jovem está determinada a trilhar seu próprio caminho e 
              desafia a tradição ancestral.
            </ThemedText>
          </View>
        </View>

        <ThemedText type='default' style={styles.opiniao2}>
        Este filme tem uma trama interessante que quebra a visão de 
        normalidade; princesas na grande maioria das vezes são postas 
        como frágeis e indefesas, Merida faz o contrário dos clichês.
        É extremamente satisfatório ver uma mulher tomando frente da própria 
        vida e decisões, mesmo que em uma animação. Erros e problemas acontecem 
        nesse meio, mas isso não a impede de seguir em frente e lidar com eles 
        de seu próprio jeito.
        </ThemedText>

        <ThemedText type='default' style={styles.data2}>
          24/01/2025
        </ThemedText>

        <ThemedText style={styles.filmetitulo3}>
  <ThemedText type='default' style={[styles.filme3, { fontSize: 19 }]}>Ponyo</ThemedText>
</ThemedText>

        <View style={styles.horizontal}>
          <View style={styles.capa3linha}>
            <Image
              source={require('@/assets/images/ponyo.png')}
              style={styles.imagem}
              contentFit="cover"
            />
            <Image
              source={require('@/assets/images/ponyo-avaliacao.png')}
              style={styles.avaliacao3}
              contentFit="cover"
            />
          </View>

          <View style={styles.sinopse3coluna}>
            <ThemedText type='default' style={styles.sinopse3}>
            O garoto Sousuke encontra um peixinho dourado preso em 
            uma garrafa e decide libertá-lo, sem saber que se trata 
            da deusa do mar Ponyo. Filha de um poderoso mago, ela 
            se comove com a atitude do menino e usa a magia do pai 
            para se transformar em humana. Porém, a substância de 
            sua poção mágica pode colocar em risco o vilarejo onde 
            mora o menino.
            </ThemedText>
          </View>
        </View>

        <ThemedText type='default' style={styles.opiniao3}>
        Mesmo sendo um filme "antigo", a animação e 
        a história são muito boas. Os personagens são inocentes 
        e fofos, mesmo assim entregando certa mensagem para o 
        público que assistiu.
        A animação possui momentos de conflitos e reconciliação, 
        em que a amizade que ambos tiveram é “posta a prova” para 
        salvarem o vilarejo.
        A ideia principal é muito interessante por se tratar de 
        algo não pensado normalmente, tendo em base um 
        peixinho dourado que se transforma em uma humana.
        </ThemedText>

        <ThemedText type='default' style={styles.data2}>
          24/01/2025
        </ThemedText>

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00002B',
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#00002B',
  },
  titulo: {
    color: '#AB51DF',
    fontSize: 35,
    marginTop: 30,
    fontWeight: 'bold',
    fontFamily: 'ui-sans-serif',
    backgroundColor: '#00002B',
  },
  horizontal:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  imagem: {
    width: 160,
    height: 250,
    borderRadius: 10,
    borderColor: '#00002B',
  },
  filmeimagem: {
    paddingLeft: 20,
    gap: 10,
  },


  filmetitulo: {
    marginBottom: -5,
    paddingLeft: 22,
  },
  filme1: {
    color: '#D85CFC',
    fontFamily: 'ui-sans-serif',
  },
  avaliacao1: {
    width: 125,
    height: 75,
    marginBottom: 150,
  },
  capa1coluna:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingLeft: 12,
  },
  sinopse1:{
    color: '#CF94EC',
    fontSize: 13,
    maxWidth: 190,
    lineHeight: 15,
    fontFamily: 'ui-sans-serif',
    marginLeft: -125,
  },
  sinopse1coluna:{
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 87,
  },
  opiniao1: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  data1: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -15,
    marginLeft: 270,
    fontSize: 12,
  },


  capa2linha:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingLeft: 12,
  },
  filmetitulo2: {
    marginBottom: -5,
    paddingLeft: 60,
    marginTop: 15,
  },
  filme2: {
    color: '#D85CFC',
    fontFamily: 'ui-sans-serif',
  },
  filmeimagem2: {
    paddingLeft: 20,
    gap: 15,
    marginTop: 20,
  },
  avaliacao2:{
    width: 125,
    height: 80,
    marginTop: 10,
  },
  sinopse2coluna:{
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 100,
  },
  sinopse2:{
      color: '#CF94EC',
      fontSize: 13,
      maxWidth: 180,
      lineHeight: 15,
      fontFamily: 'ui-sans-serif',
      marginLeft: -125,
      marginTop:10,
  },
  opiniao2: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  data2: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -15,
    marginLeft: 270,
    fontSize: 12,
  },


  filmetitulo3: {
    marginBottom: -5,
    paddingLeft: 68,
    marginTop: 15,
  },
  capa3linha:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingLeft: 12,
  },
  filmeimagem3: {
    paddingLeft: 20,
    gap: 15,
    marginTop: 20,
  },
  filme3: {
    color: '#D85CFC',
    fontFamily: 'ui-sans-serif',
  },
  avaliacao3:{
    width: 125,
    height: 80,
    marginTop: 3,
  },
  sinopse3coluna:{
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 88,
  },
  sinopse3:{
      color: '#CF94EC',
      fontSize: 13,
      maxWidth: 180,
      lineHeight: 15,
      fontFamily: 'ui-sans-serif',
      marginLeft: -125,
      marginTop:10,
  },
  opiniao3: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  data3: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -15,
    marginLeft: 270,
    fontSize: 12,
  },
});
