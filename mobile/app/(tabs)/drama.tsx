import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ThemedText type="title" style={styles.titleText}>DRAMA</ThemedText>

      <ThemedText type="subtitle" style={styles.movieTitle}>As vantagens de ser invisível</ThemedText>

     
      <View style={styles.posterAndDetailsRow}>
        
        <View style={styles.posterColumn}>
          <Image
            source={require('@/assets/images/vant.png')}
            style={styles.posterImage}
          />
        </View>

      
        <View style={styles.detailsColumn}>
          
          <View style={styles.ratingRow}>
            <Image source={require('@/assets/images/12.png')} style={styles.ageRatingImage} />
            <ThemedText type="defaultSemiBold" style={styles.yearText}>2012</ThemedText>
          </View>

          <View style={styles.starsAndScoreRow}>
            <View style={styles.starsContainer}>
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/group.png')} style={styles.starImage} /> 
            </View>
            <ThemedText type="subtitle" style={styles.scoreText}>4.5</ThemedText>
          </View>
        
          <View style={styles.durationRow}>
            <Image source={require('@/assets/images/relogio.png')} style={styles.durationIcon} />
            <ThemedText type="defaultSemiBold" style={styles.durationText}>1h 43min</ThemedText>
          </View>
          
          <ThemedText type="subtitle" style={styles.sinopseTitle}>Sinopse:</ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.sinopseBody}>
            Charlie é um jovem que tem dificuldades para interagir em sua nova escola. Ele se sente deslocado no ambiente. Seu professor de literatura, no entanto, acredita nele e o vê como um gênio.
          </ThemedText>
        </View>
      </View>
      

      <ThemedText type="subtitle" style={styles.reviewTitle}>Resenha:</ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.reviewBody}>
        Ver esse filme durante a adolescência é uma experiencia surreal, te fazendo refletir em diversos aspectos, com ótimos atores que me identifiquei, chorando muito com o fim. Simplesmente um dos meus favoritos
      </ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.reviewDate}>18/01/2009</ThemedText>

      <ThemedText type="subtitle" style={styles.directorTitle}>Diretor</ThemedText>
      <View style={styles.directorInfoRow}>
        <Image
          source={require('@/assets/images/diretor1.png')}
          style={styles.directorImage}
        />
        <ThemedText style={styles.directorFilmText}> Stephen Chbosky.</ThemedText>
      </View>


      <ThemedText type="subtitle" style={styles.movieTitle1}>Sociedade dos poetas mortos </ThemedText>

      <View style={styles.posterColumn1}>
          <Image
            source={require('@/assets/images/sociedade.png')}
            style={styles.posterImage1}
          />
        </View>

        <View style={styles.ratingRow1}>
            <Image source={require('@/assets/images/12.png')} style={styles.ageRatingImage} />
            <ThemedText type="defaultSemiBold" style={styles.yearText}>1990</ThemedText>
          </View>

          <View style={styles.starsAndScoreRow1}>
            <View style={styles.starsContainer}>
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/estrela.png')} style={styles.starImage} />
                <Image source={require('@/assets/images/group.png')} style={styles.starImage} /> 
            </View>
            <ThemedText type="subtitle" style={styles.scoreText}>4.7</ThemedText>
          </View>

          <View style={styles.durationRow1}>
            <Image source={require('@/assets/images/relogio.png')} style={styles.durationIcon} />
            <ThemedText type="defaultSemiBold" style={styles.durationText}>2h 8min</ThemedText>
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00002E', 
  },
  contentContainer: {
    paddingBottom: 40, 
  },
 
  titleText: {
    fontSize: 40,
    textAlign: 'center', 
    color: '#244A80',
    marginTop: 30,
    fontFamily: 'ui-sans-serif',
  },
  movieTitle: {
    color: '#377A98',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
  },
  movieTitle1: {
    color: '#377A98',
    marginTop: 50,
    marginLeft: 20,
    fontSize: 22,
  },
  posterAndDetailsRow: {
    flexDirection: 'row', 
    marginTop: 10,
    paddingHorizontal: 20, 
  },
  
  posterColumn: {
    flex: 0.45, 
  },

  posterColumn1: {
    flex: 0.45, 
    marginTop: 30,
  },
  posterImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },

  posterImage1: {
    width: '50%',
    height: 230,
    resizeMode: 'contain',
  },

  detailsColumn: {
    flex: 0.55, 
    paddingLeft: 10, 
  },
 
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 185,
    marginTop: -100,
  },
  ageRatingImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  yearText: {
    color: '#E0E0E0',
    fontSize: 20,
  },
  starsAndScoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starsAndScoreRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 185,
    marginTop: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  starImage: {
    width: 20,
    height: 20,
    marginRight: 2, 
  },
  scoreText: {
    fontSize: 18,
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  durationRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 185,
  },
  durationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  durationText: {
    fontSize: 17,
  },

  sinopseTitle: {
    color: '#377A98',
    marginTop: 10,
    fontSize: 18,
  },
  sinopseBody: {
    color: '#D2FFF4',
    marginTop: 5,
    fontSize: 12,
  },
 
  reviewTitle: {
    color: '#377A98',
    marginTop: -10,
    marginLeft: 20,
  },
  reviewBody: {
    color: '#D2FFF4',
    marginHorizontal: 20, 
    marginTop: 10,
    fontSize: 12,
  },
  reviewDate: {
    color: '#69C6AF',
    fontSize: 12,
    marginTop: 5,
    marginRight: 20,
    textAlign: 'right', 
  },
  
  directorTitle: {
    color: '#377A98',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
  },
  directorInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 5,
  },
  directorImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  directorFilmText: {
    color: '#69C6AF',
  },
});