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
          <ThemedText style={styles.filmetitulo}>
            <ThemedText type='subtitle' style={styles.filme1}>A Noiva Cadáver</ThemedText>
          </ThemedText>
          <Image
            source={require('@/assets/images/noiva-cadaver.png')}
            style={styles.imagem}
            contentFit="cover"
          />
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
            <ThemedText type='default' style={styles.filme2}>Valente</ThemedText>
          </ThemedText>
          <Image
            source={require('@/assets/images/valente.png')}
            style={styles.imagem}
            contentFit="cover"
          />
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
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'ui-sans-serif',
    backgroundColor: '#00002B',
  },
  filmeimagem: {
    paddingLeft: 20,
    gap: 15,
  },
  filmetitulo: {
    marginBottom: -5,
    paddingLeft: 25,
  },
  filme1: {
    color: '#D85CFC',
    fontFamily: 'ui-sans-serif',
  },
  opiniao1: {
    color: '#CF94EC',
    fontFamily: 'ui-sans-serif',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filmeimagem2: {
    paddingLeft: 20,
    gap: 15,
    marginTop: 20,
  },
  filmetitulo2: {
    marginBottom: -5,
    paddingLeft: 50,
    paddingTop: 15,
  },
  filme2: {
    color: '#D85CFC',
    fontFamily: 'ui-sans-serif',
  },
  imagem: {
    width: 160,
    height: 250,
    borderRadius: 10,
    borderColor: '#00002B',
  },
});
