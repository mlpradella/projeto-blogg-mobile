import { Image } from 'expo-image';
import { ScrollView, SafeAreaView, StyleSheet, View,  } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.container}>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={styles.teste4}>RECOMENDAÇÕES</ThemedText>
        </ThemedView>


<ThemedView style={styles.opniao}>
        <ThemedText type="subtitle" style={styles.topico}>ROMANCE</ThemedText >
</ThemedView>

<ThemedView style={styles.im}>
  
        <Image source={require('@/assets/images/antesdoamanecer 1.png')}
 style={styles.newImageStyle}/>
    <ThemedText type='subtitle' style={styles.nome}>Antes do Amanhecer</ThemedText>
 </ThemedView>

 <Image source={require('@/assets/images/Vector (2).png')}
    style={styles.see}/>
<ThemedText type='subtitle' style={styles.nota}>5.0 estrelas</ThemedText>

<Image source={require('@/assets/images/rl.png')}
style={styles.relogio}/>
<ThemedText type='subtitle' style={styles.tempo}>1h45min</ThemedText>

    <Image source={require('@/assets/images/12.png')}
    style={styles.clas}/>
       
        <ThemedText type='subtitle' style={styles.texto}>Sinto que nunca vi o amor ser retratado de forma tão pura, sincera e carinhosa, falando sobre paixão, conversa e segurança. Não é apenas sobre um romance jovem, é sobre conversar sobre nada e tudo ao mesmo tempo, é ter diálogo, paciência, ter conversas profundas andando nas ruas de Vienna, sobre se conhecer, compartilhar e aproveitar os momentos. O primeiro filme mudou a química do meu cérebro, ver eles apenas conversando e falando sobre a vida, o amor, a morte, sobre banalidades do cotidiano, e apenas aproveitando a companhia um do outro me fez tão bem que não sei como colocar em palavras.</ThemedText>
        <ThemedText type='subtitle' style={styles.data}>23/08/2025</ThemedText>

    
  <ThemedText type='subtitle'style={styles.terror}>TERROR</ThemedText>

    <ThemedView style={styles.imvila}>
      <Image source={require('@/assets/images/VILA123.png')}
       style={styles.newImageStyle54}/>
    <ThemedText type='subtitle' style={styles.nomev}>A Vila</ThemedText>
    </ThemedView>
    <Image source={require('@/assets/images/14v.png')}
    style={styles.see2}/>

    <Image source={require('@/assets/images/esV.png')}
    style={styles.see}></Image>
    <ThemedText type='subtitle' style={styles.nota}>4.0 estrelas</ThemedText>

    <Image source={require('@/assets/images/relV.png')}
    style={styles.relogio}></Image>
    <ThemedText type='subtitle' style={styles.tempo}>1h48min</ThemedText>

    <ThemedText type='subtitle' style={styles.texto}>Achei dolorosamente triste, imaginei que seria mais um filme sobre uma comunidade isolada sofrendo com “coisas estranhas estão acontecendo”, mas fui surpreedida com um filme que fala sobre os perigos de negar coletivamente a realidade do sofrimento e construir uma mitologia enganosa para um suposto “bem maior”. A dor é uma parte natural do progresso, e a verdadeira fé seria permitir que as pessoas descobrissem isso por si mesmas.</ThemedText>
    <ThemedText type='subtitle' style={styles.data}>18/04/2025</ThemedText>

  <ThemedText type='title' style={styles.acao}>Ação</ThemedText>

  <ThemedView style={styles.im}>
    <Image source={require('@/assets/images/old.png')}
    style={styles.newImageStyle545}></Image>

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
    marginLeft: 180,
    marginTop: 25,
    marginRight: 32,
  },

clas: {
  marginRight: 50,
  width: 27,
  height: 27,
  marginTop: -67,
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
  width: 19,
  height: 19,
  marginRight: 75,
},

nota: {
  marginLeft: 30,
  marginTop: -24,
  fontSize: 12,
},

relogio: {
  width: 19,
  height: 19,
  marginRight: -150,
  marginTop: -25,
},

tempo: {
  marginLeft: 250,
  marginTop: -25,
  fontSize: 12,
},

data:{
  marginTop: 30,
  fontSize: 12,
  marginLeft: '80%'
},

terror: {
    color: '#A22020',
    fontSize: 20,
    backgroundColor: '#00002B',
    marginRight: '67%'
},

imvila: {
  marginTop: 5,
   backgroundColor: '#00002B',
   alignContent: 'center',
},

newImageStyle54: {
  width: 200,
  height: 200,
  resizeMode: 'contain',
  marginTop: 10,
  marginRight: 266,
},

nomev: {
  color: '#A22020',
  fontSize: 20,
  marginTop: -200,
  marginLeft: 186,
},

see2: {
  width: 19,
  height: 19,
  marginLeft: 65,
  marginTop: -30,
},

acao: {
  color: '#519548',
  fontSize: 20,
  backgroundColor: '#00002B',
  marginRight: '73%'
},

newImageStyle545: {
  width: 200,
  height: 200,
  resizeMode: 'contain',
  marginTop: -5,
  marginRight: 266,
},








scrollContent: {
  
},
  });

