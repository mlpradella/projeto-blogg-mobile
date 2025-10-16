import { Image } from 'expo-image';
import { Platform, StyleSheet, View,  } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { DefaultTheme } from '@react-navigation/native';
import { Colors } from '@/constants/theme';
import { Background } from '@react-navigation/elements';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={styles.teste4}>RECOMENDAÇÕES</ThemedText>
        </ThemedView>


<ThemedView style={styles.opniao}>
        <ThemedText type="subtitle" style={styles.topico}>ROMANCE</ThemedText >
</ThemedView>




<ThemedView style={styles.im}>
  

   


        <Image
 source={require('@/assets/images/antesdoamanecer 1.png')}
 style={styles.newImageStyle}
 />
    <ThemedText type='subtitle' style={styles.nome}>Antes do Amanhecer</ThemedText>
 </ThemedView>


 <Image 
    source={require('@/assets/images/Vector (2).png')}
    style={styles.see}/>


    <Image 
    source={require('@/assets/images/12.png')}
    style={styles.clas}/>
       
        <ThemedText type='subtitle' style={styles.texto}>Sinto que nunca vi o amor ser retratado de forma tão pura, sincera e carinhosa, falando sobre paixão, conversa e segurança. Não é apenas sobre um romance jovem, é sobre conversar sobre nada e tudo ao mesmo tempo, é ter diálogo, paciência, ter conversas profundas andando nas ruas de Vienna, sobre se conhecer, compartilhar e aproveitar os momentos. O primeiro filme mudou a química do meu cérebro, ver eles apenas conversando e falando sobre a vida, o amor, a morte, sobre banalidades do cotidiano, e apenas aproveitando a companhia um do outro me fez tão bem que não sei como colocar em palavras.</ThemedText>

        


    </View>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
      backgroundColor: '#00002B',
    alignItems: 'center',
    gap: 8,
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#00002B'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  teste4: {
    color: '#FFBE63',
    fontFamily: 'ui-sans-serif',
  },

opniao: {
  marginLeft: -300,
  color: '#FF3860',
  
},
   
  topico: {
    color: '#FF3860',
    fontSize: 20,
    backgroundColor: '#00002B',
    marginLeft: 10,
  },

  texto: {
    fontSize: 10,
    color: 'white',
    marginLeft: 150,
    marginTop: 25,
  },

clas: {
  marginRight: 50,
  width: 30,
  height: 30,
  marginTop: -70,
  marginLeft: 400,
  

},

im: {
  marginTop: 20,
   backgroundColor: '#00002B',
   alignContent: 'center',
  },
  
  newImageStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: -136,
    
  },
  
  nome: {
    color: '#FF3860',
    fontSize: 20,
    marginTop: -200,
    marginLeft: 100,
  },

see: {
  width: 20,
  height: 20,
  marginRight: 75,
}


  });

