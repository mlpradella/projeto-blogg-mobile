import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Títulos */}
          <ThemedText type="title" style={styles.titleMain}>TERROR</ThemedText>
          <ThemedText type="title" style={styles.subtitle}>top terror da atualidade</ThemedText>
          
          {/* Primeiro Filme */}
          <View style={styles.movieContainer}>
            <View style={styles.movieContent}>
              <Image
                source={require('@/assets/images/invocaçao.png')}
                style={styles.movieImage}
              />
              <View style={styles.movieDetails}>
                <ThemedText style={styles.movieDescription}>
                  O filme é muito bom, uma das minhas franquias de filmes favorita, eu amo esse tipo de filme de terror religioso mas acho que mesmo sem gostar, todo mundo deveria ver esse filme, a trilha sonora e o suspense antes do susto são os seus pontos altos.
                </ThemedText>
                
                <View style={styles.ratingContainer}>
                  <View style={styles.ratingIcons}>
                    <Image
                      source={require('@/assets/images/Vector.png')}
                      style={styles.heartIcon}
                    />
                    <Image
                      source={require('@/assets/images/14.png')}
                      style={styles.ageIcon}
                    />
                  </View>
                  <ThemedText style={styles.ratingText}>4.5 ESTRELAS</ThemedText>
                </View>
                
                <ThemedText style={styles.movieInfo}>
                  Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda. Duração: 1h e 52m. Ano de lançamento: 2013
                </ThemedText>
              </View>
            </View>
          </View>

          {/* Segundo Filme */}
          <View style={styles.movieContainer}>
            <View style={styles.movieContent}>
              <Image
                source={require('@/assets/images/anabeli.png')}
                style={styles.movieImage}
              />
              <View style={styles.movieDetails}>
                <ThemedText style={styles.movieDescription}>
                  Gostei muito da parte em que eles contam mais sobre a história da Anabelle e assim me fez ter pelo menos um pouco de empatia mesmo com o vilão da história, eu gosto quando mostram todos os pontos de vista da história.
                </ThemedText>
                
                <View style={styles.ratingContainer}>
                  <View style={styles.ratingIcons}>
                    <Image
                      source={require('@/assets/images/Vector.png')}
                      style={styles.heartIcon}
                    />
                    <Image
                      source={require('@/assets/images/14.png')}
                      style={styles.ageIcon}
                    />
                  </View>
                  <ThemedText style={styles.ratingText}>3.9 ESTRELAS</ThemedText>
                </View>
                
                <ThemedText style={styles.movieInfo}>
                  Anos após a trágica morte de sua filha, um habilidoso artesão de bonecas e sua esposa decidem, por caridade, acolher em sua casa uma freira e dezenas de meninas desalojadas de um orfanato. Atormentado pelas lembranças traumáticas, o casal ainda precisa lidar com um aterrador demônio do passado: Annabelle, criação do artesão. Duração: 1h e 49m. Ano de lançamento: 2013
                </ThemedText>
              </View>
            </View>
          </View>

          {/* Terceiro Filme */}
          <View style={styles.movieContainer}>
            <View style={styles.movieContent}>
              <Image
                source={require('@/assets/images/oija.png')}
                style={styles.movieImage}
              />
              <View style={styles.movieDetails}>
                <ThemedText style={styles.movieDescription}>
                  É um filme bom no começo e no desenvolvimento, eu gosto quando o suspense religioso gira em torno de uma criança, porém o final do filme deixou muito a desejar, não suprindo as expectativas do público.
                </ThemedText>
                
                <View style={styles.ratingContainer}>
                  <View style={styles.ratingIcons}>
                    <Image
                      source={require('@/assets/images/Vector.png')}
                      style={styles.heartIcon}
                    />
                    <Image
                      source={require('@/assets/images/14.png')}
                      style={styles.ageIcon}
                    />
                  </View>
                  <ThemedText style={styles.ratingText}>2.5 ESTRELAS</ThemedText>
                </View>
                
                <ThemedText style={styles.movieInfo}>
                  Doris é uma menina solitária e sua mãe finge se comunicar com espíritos. Certo dia, a garota usa um tabuleiro de Ouija para contato com o falecido pai e uma série de seres malignos se apoderam de seu corpo. Duração: 1h e 52m. Ano de lançamento: 2013
                </ThemedText>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00002E',
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: screenHeight * 0.02,
  },
  content: {
    flex: 1,
    paddingHorizontal: screenWidth * 0.04,
  },
  titleMain: {
    color: '#911315',
    textAlign: 'center',
    fontFamily: 'ui-sans-serif',
    fontSize: screenWidth * 0.08,
    marginBottom: screenHeight * 0.01,
  },
  subtitle: {
    color: '#E0E0E0',
    textAlign: 'center',
    fontFamily: 'ui-sans-serif',
    fontSize: screenWidth * 0.05,
    marginBottom: screenHeight * 0.03,
  },
  movieContainer: {
    marginBottom: screenHeight * 0.04,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: screenWidth * 0.04,
  },
  movieContent: {
    flexDirection: screenWidth > 768 ? 'row' : 'column',
    alignItems: screenWidth > 768 ? 'flex-start' : 'center',
  },
  movieImage: {
    width: screenWidth > 768 ? screenWidth * 0.25 : screenWidth * 0.4,
    height: screenWidth > 768 ? screenHeight * 0.3 : screenHeight * 0.25,
    borderRadius: 12,
    marginRight: screenWidth > 768 ? screenWidth * 0.04 : 0,
    marginBottom: screenWidth > 768 ? 0 : screenHeight * 0.02,
  },
  movieDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  movieDescription: {
    color: '#E0E0E0',
    fontSize: screenWidth * 0.035,
    lineHeight: screenHeight * 0.02,
    marginBottom: screenHeight * 0.02,
    textAlign: 'left',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: screenHeight * 0.02,
    flexWrap: 'wrap',
  },
  ratingIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: screenWidth * 0.04,
  },
  heartIcon: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    marginRight: screenWidth * 0.02,
  },
  ageIcon: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
  },
  ratingText: {
    color: '#E0E0E0',
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
  },
  movieInfo: {
    color: '#E0E0E0',
    fontSize: screenWidth * 0.033,
    lineHeight: screenHeight * 0.02,
    textAlign: 'left',
  },
});