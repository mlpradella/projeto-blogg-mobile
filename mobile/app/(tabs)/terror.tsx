import { Image } from 'expo-image';
import { StyleSheet, View, } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
        <ThemedText type="title" style={styles.teste2}>TERROR</ThemedText >
        <ThemedText type="title" style={styles.teste22}>top terror da atualidade</ThemedText >
        <Image
        source={require('@/assets/images/invocaçao.png')}
        style={styles.newImageStyle}
        />
         <ThemedText type="title" style={styles.teste222}>o filme e muito bom, uma das minhas franquias de filmes favorita, eu amo esse tipo de filme de terror religioso mas acho que mesmo sem gostar, todo mundo deveria ver esse filme, a trilha sonora e o suspense antes do susto sao os seus pontos altos  </ThemedText >
         <div style={styles.com}>
         <Image
        source={require('@/assets/images/Vector.png')} 
        style={styles.newImageStyle3}
        />
      

         </div>
         <div style={styles.ladinho}>
      <Image
        source={require('@/assets/images/14.png')} 
        style={styles.newImageStyle2}
      />
       </div>
       <div style={styles.blablu}>
       <ThemedText>
        4.5 ESTRELAS
       </ThemedText>

       </div>
       <div style={styles.blablu2}>
       <ThemedText>
       Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.          duraçao:1h e 52m            ano de lançamento:2013
       </ThemedText>

       </div>
       <div style={styles.linha}>
       <Image
        source={require('@/assets/images/linha.png')} 
        style={styles.newImageStyle3}
      />
       </div>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00002E',
  },
  titleContainer: {
   
    alignItems: 'center',
    gap: 8,

  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    color: '#00000',
  },
  reactLogo: {
    height: 280,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  teste2: {
    color: '#911315',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'ui-sans-serif',
  },
  teste22: {
    color: '#E0E0E0',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'ui-sans-serif',
  },
  subtitulo: {
    color: '#ffffff',
  },
  newImageStyle: {
    height: 250, 
    width: 150,
  marginLeft: 10,
  marginTop: 15,
  borderRadius: 25,
  },
  teste222: {
    marginTop: -5,
    width: 180,
    height: 15,
    fontSize: 14,
    marginRight: 10,
    fontFamily: 'ui-sans-serif',
  },
  teste3: {
    display: 'flex',
    marginLeft: 95,
    width: 50,
    height: 50,
    marginTop: -110,
    
  },
  com:{
marginTop: -250,
marginLeft: 168,
  },
  newImageStyle3: {
    width: 38,
    height: 38,
  },

  newImageStyle2: {
    width: 40,
    height: 40,
    
  },
 ladinho: {
   display: 'flex',
   justifyContent: 'center',
   marginLeft: 7,
   marginTop: 20,
   },
   
  blablu: {
    
    marginTop: -92,
    marginLeft: 210,
    fontFamily: 'ui-sans-serif',
  },
  blablu2: {
    fontSize: 16,
marginLeft: 180,
marginTop: 80,
fontFamily: 'ui-sans-serif',
  },
  linha:{
height: 300,
  },

});
