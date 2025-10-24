import { Image } from 'expo-image';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainContainer}>
          {/* Título Principal */}
          <ThemedView style={styles.titulo}>
            <ThemedText type="title" style={styles.tituloacao}>Ação</ThemedText>
          </ThemedView>

          {/* Filme 1 - Tropa de Elite */}
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle" style={styles.tituloFilme}>Tropa de Elite</ThemedText>
          </ThemedView>

          <View style={styles.contentRow}>
            <Image
              source={require('@/assets/images/tropa-elite.png')}
              style={styles.capaFilme}
            />
            <View style={styles.rightContent}>
              <Image
                source={require('@/assets/images/avaliacao-acao.png')}
                style={styles.avaliacao}
              />
              <ThemedText type='default' style={styles.sinopse}>
                O filme Tropa de Elite acompanha o Capitão Nascimento, do BOPE, que procura um sucessor enquanto
                lidera a pacificação de uma favela. Durante a operação, ele salva os aspirantes Neto e Matias,
                que se tornam inspirados e desejam se juntar à sua equipe.            
              </ThemedText>
            </View>
          </View>

          <ThemedView style={styles.textoContainer}>
            <ThemedText style={styles.opiniao} type="default">
              O filme vai muito além de ser apenas um filme de ação ele é uma análise profunda sobre corrupção,
              violência e os dilemas morais enfrentados pelos policiais.
              O que realmente marca o filme é a narração de Wagner Moura como o Capitão Nascimento.
              Sua voz, direta e incisiva, nos guia por um universo de decisões extremas, onde não há espaço para fraquezas.
              As cenas de treinamento do BOPE são intensas e brutalmente realistas, mostrando o nível de pressão psicológica
              e física que os aspirantes a oficiais precisam suportar.
            </ThemedText>
            <ThemedText style={styles.data} type='default'>04/06/2025</ThemedText>
          </ThemedView>

          {/* Filme 2 - Busca Implacável */}
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle" style={styles.tituloFilme}>Busca Implacável</ThemedText>
          </ThemedView>

          <View style={styles.contentRow}>
            <Image
              source={require('@/assets/images/busca-implacavel.png')}
              style={styles.capaFilme}
            />
            <View style={styles.rightContent}>
              <Image
                source={require('@/assets/images/avaliacao-busca.png')}
                style={styles.avaliacao}
              />
              <ThemedText type='default' style={styles.sinopse}>
                Bryan Mills, um ex-agente do governo com habilidades especiais, precisa usar seu passado para resgatar sua filha, Kim,
                que é sequestrada por traficantes em Paris. Ele tem pouco tempo para encontrá-la antes que ela seja vendida.
              </ThemedText>
            </View>
          </View>

          <ThemedView style={styles.textoContainer}>
            <ThemedText style={styles.opiniao} type="default">
              O filme vai muito além de ser apenas um filme de ação ele é uma análise profunda sobre corrupção,
              violência e os dilemas morais enfrentados pelos policiais.
              O que realmente marca o filme é a narração de Wagner Moura como o Capitão Nascimento.
              Sua voz, direta e incisiva, nos guia por um universo de decisões extremas, onde não há espaço para fraquezas.
              As cenas de treinamento do BOPE são intensas e brutalmente realistas, mostrando o nível de pressão psicológica
              e física que os aspirantes a oficiais precisam suportar.
            </ThemedText>
            <ThemedText style={styles.data} type='default'>04/06/2025</ThemedText>
          </ThemedView>

          {/* Filme 3 - Invasão a Casa Branca */}
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle" style={styles.tituloFilme}>Invasão a Casa Branca</ThemedText>
          </ThemedView>

          <View style={styles.contentRow}>
            <Image
              source={require('@/assets/images/invasao-casa-branca.png')}
              style={styles.capaFilme}
            />
            <View style={styles.rightContent}>
              <Image
                source={require('@/assets/images/avaliacao-casa.png')}
                style={styles.avaliacao}
              />
              <ThemedText type='default' style={styles.sinopse}>
                O Serviço Secreto dos Estados Unidos conta com a ajuda do ex-segurança particular e amigo pessoal
                do presidente para resgatar o chefe de Estado e sua família de terroristas norte coreanos, que os
                fizeram reféns e assumiram o controle da Casa Branca.
              </ThemedText>
            </View>
          </View>

          <ThemedView style={styles.textoContainer}>
            <ThemedText style={styles.opiniao} type="default">
              Mesmo sendo um filme nem tanto conhecido. Oque realmente destaca, é como o filme nos
              deixa sentir e ver a lealdade e desespero do agente, para salvar o presidente. 
              A ação do filme é totalmente pensada no realismo, os confrontos corporais brutais e realistas, deixando
              que a gente fique tenso para saber o proximo movimento. 
              A tensão e suspense são diretos, assim quem assiste, pode perceber de como a pressão pode moldar o caráter 
              humano em situações extremas.
            </ThemedText>
            <ThemedText style={styles.data} type='default'>04/06/2025</ThemedText>
          </ThemedView>
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
  mainContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  titulo: {
    alignItems: 'center',
    backgroundColor: '#00002B',
    marginTop: 15,
    marginBottom: 25,
  },
  tituloacao: {
    fontFamily: 'ui-sans-serif',
    color: '#3D723F',
    fontSize: 50,
    marginBottom: -15,
    paddingTop: 20,
  },
  tituloFilme: {
    color: '#3d723f',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#00002B',
    marginLeft: 15,
    marginTop: 15,
  },
  contentRow: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  capaFilme: {
    height: 310,
    width: 150,
    resizeMode: 'contain',
  },
  rightContent: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  avaliacao: {
    height: 80,
    width: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  sinopse: {
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    flex: 1,
  },
  textoContainer: {
    backgroundColor: '#00002B',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  opiniao: {
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  data: {
    color: '#3d723f',
    textAlign: 'right',
    fontSize: 12,
  },
});