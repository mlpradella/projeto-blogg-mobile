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


  <ThemedText type='title' style={styles.acao}>AÇÃO</ThemedText>

  <ThemedView style={styles.im}>
    <Image source={require('@/assets/images/old.png')}
    style={styles.newImageStyle545}></Image>
    <ThemedText type='subtitle' style={styles.nomeo}>OldBoy</ThemedText>
  </ThemedView>

    <Image source={require('@/assets/images/16.png')}
    style={styles.see2}></Image>

    <Image source={require('@/assets/images/eso.png')}
    style={styles.see}></Image>
    <ThemedText type='subtitle' style={styles.nota}>4.0 estrelas</ThemedText>

    <Image source={require('@/assets/images/relo.png')}
    style={styles.relogio}></Image>
    <ThemedText type='subtitle' style={styles.tempo}>2 horas</ThemedText>

    <ThemedText type='subtitle' style={styles.texto}>Acho que nunca fiquei tão horrorizada, chocada, estupefata, atônita, pasma, perplexa, estarrecida, boquiaberta, espantada, abalada, impactada, assombrada assistindo qualquer coisa em toda a minha existência. 
THIS IS CINEMA.
Esse filme definitivamente não é para qualquer um, não por apresentar uma trama difícil, mas por abordar um tema tão complicado, principalmente nos minutos finais do filme, por mais que talvez fosse “esperado” ou “previsível” (para mim não foi) ter a confirmação embrulha o estômago.
  </ThemedText>
  <ThemedText type='subtitle' style={styles.data}>22/08/2025</ThemedText>


  <ThemedText type='title' style={styles.animacao}>ANIMAÇÃO</ThemedText>

  <ThemedView style={styles.im}>
    <Image source={require('@/assets/images/jardim.png')}
    style={styles.newImageStyle545}></Image>
    <ThemedText type='subtitle' style={styles.nomej}>O túmulo dos vagalumes</ThemedText>
  </ThemedView>

    <Image source={require('@/assets/images/12.png')}
    style={styles.see3}></Image>

    <Image source={require('@/assets/images/esj.png')}
    style={styles.see}></Image>
    <ThemedText type='subtitle' style={styles.nota}>4.5 estrelas</ThemedText>

    <Image source={require('@/assets/images/relj.png')}
    style={styles.relogio}></Image>
    <ThemedText type='subtitle' style={styles.tempo}>1h39min</ThemedText>

    <ThemedText type='subtitle' style={styles.texto}>Quando decidi assistir esse filme, eu sabia que ia machucar minha alma, mas eu precisava sentir isso. Sempre gostei de longas que tocassem em uma parte mais sensível de mim (não por algum motivo em específico, apenas gosto quando um filme não é apenas um filme, se isso faz sentido) e amo todos os filmes do Studio Ghibli, acho lindo como eles retratam os personagem, as relações entre eles e as interações com o cenário, em especial esse por abordar um tema tão doloroso com uma animação tão rica.</ThemedText>
    <ThemedText type='subtitle' style={styles.data}>17/08/2025</ThemedText>


    <ThemedText type='title' style={styles.drama}>DRAMA</ThemedText>

    <ThemedView style={styles.im}>
      <Image source={require('@/assets/images/dia.png')}
      style={styles.newImageStyle545}></Image>
      <ThemedText type='subtitle' style={styles.nomed}>Dias perfeitos</ThemedText>
    </ThemedView>

    <Image source={require('@/assets/images/12.png')}
    style={styles.see4}></Image>

    <Image source={require('@/assets/images/esd.png')}
    style={styles.see}></Image>
    <ThemedText type='subtitle' style={styles.nota}>5.0 estrelas</ThemedText>

    <Image source={require('@/assets/images/reld.png')}
    style={styles.relogio}></Image>
    <ThemedText type='subtitle' style={styles.tempo}>2h5min</ThemedText>

    <ThemedText type='subtitle' style={styles.texto}>Amo filmes em que “nada acontece”, no sentido de não ter uma grande trama ou um roteiro extremamente complexo, apenas mostrando a beleza da vida, com uma fotográfia leve e que me faz pensar. E esse filme entrega exatamente isso através de uma perspectiva tão simples, com poucos diálogos e paisagens contemplativas uma bela visão, e muito carinhosa, da vida.</ThemedText>
    <ThemedText type='subtitle' style={styles.data}>10/11/2024</ThemedText>

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
  marginLeft: '70%'
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

nomeo: {
  fontSize: 20,
  color: '#519548',
  marginLeft: 180,
  marginTop: -200,
},

animacao: {
  backgroundColor: '#00002B',
  marginRight: '60%',
  color: '#D85CFC',
  fontSize: 20,
},

nomej: {
  fontSize: 19,
  color: '#D85CFC',
  marginLeft: 180,
  marginTop: -200,
},

see3: {
  width: 18,
  height: 18,
  marginLeft: 380,
  marginTop: -26,
},

drama: {
  backgroundColor: '#00002B',
  marginRight: '68%',
  color: '#377A98',
  fontSize: 20,
},

nomed: {
  fontSize: 19,
  color: '#377A98',
  marginLeft: 180,
  marginTop: -200,
},

see4: {
  width: 19,
  height: 19,
  marginLeft: 190,
  marginTop: -30,
},

scrollContent: {
  
},
  });
  

