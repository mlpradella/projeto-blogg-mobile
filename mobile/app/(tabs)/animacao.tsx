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

        <View style={styles.filmeimagem}>
  {/* Subtítulo separado */}
  <ThemedText style={styles.filmetitulo}>
    <ThemedText type='default' style={[styles.filme1, { fontSize: 19 }]}>A Noiva Cadáver</ThemedText>
  </ThemedText>
  <View style={styles.horizontal}>
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
</View>


        <ThemedText type='default' style={styles.opiniao1}>
          Gosto muito da animação e história geral do filme, o final não 
          é totalmente esperado pelos espectadores e digo isso por 
          experiência própria. Mesmo sendo um filme considerado infantil, 
          as músicas são boas e algumas falam sobre problemas pessoais como 
          comparação e o sentimento de solidão.
          Os personagens possuem um motivo existente por trás das ações, 
          não os deixando jogados e monótonos como acontece em alguns outros 
          programas.
        </ThemedText>

        <View style={styles.filmeimagem2}>
          <ThemedText style={styles.filmetitulo2}>
          <ThemedText type='default' style={[styles.filme1, { fontSize: 19 }]}>Valente</ThemedText>
          </ThemedText>
          <Image
            source={require('@/assets/images/valente.png')}
            style={styles.imagem}
            contentFit="cover"
          />
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
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'ui-sans-serif',
    backgroundColor: '#00002B',
  },
  filmetitulo: {
    marginBottom: -5,
    paddingLeft: 16,
  },
  filmetitulo2: {
    marginBottom: -5,
    paddingLeft: 49,
},

  filme1: {
    color: '#D85CFC',
    fontFamily: 'ui-sans-serif',
  },
  filme2: {
    color: '#D85CFC',
    fontFamily: 'ui-sans-serif',
  },

  opiniao1: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  opiniao2: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  filmeimagem2: {
    paddingLeft: 20,
    gap: 15,
    marginTop: 20,
  },

  horizontal: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  avaliacao1: {
    width: 125,
    height: 75,
    marginBottom: 150,
  },
});
