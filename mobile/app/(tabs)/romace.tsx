import { Image } from 'expo-image';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, View, } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainerRefContext } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" style={styles.titleContainer}>Romance</ThemedText>
          </ThemedView>

          <ThemedText 
        type="default" style={styles.textoSimp}>
        Simplesmente Acontece
    </ThemedText>
   

          <Image
                  source={require('@/assets/images/simplismente-acontece.png')}
                  style={styles.newImageStyle}
                  />

                  <Image
                  source={require('@/assets/images/informacoes-simplismente.jpg')}
                  style={styles.informacoesSimp}
                  />

                  <ThemedView style={styles.containerConteudo}></ThemedView>


          <ThemedView style={styles.texto}>
            <ThemedText style={styles.sinopse}
          type='default'>Alex e Rosie são amigos inseparáveis que cresceram juntos em Londres.
                        Mas, tudo muda quando Alex ganha uma bolsa de estudos e se muda para os EUA. 
                        Agora trilhando caminhos diferentes. Porém, o destino faz com que se encontrem novamente.</ThemedText>
       </ThemedView>
       <ThemedView style={styles.texto}>
        <ThemedText style={styles.opiniao}
        type='default'>A história é até interessante, algumas pessoas podem achar o enredo um pouco previsível para o gênero, 
        mas o filme se destaca por não cair em todos os clichês. Pois o filme mostra uma história sobre as complicações da vida real e como o amor pode ser mais uma questão de tempo do que de destino. 
        No final, é um filme leve, divertido e emocionante, perfeito para quem gosta de um romance que faz rir, e de vez em quando, soltar uma lágrima.</ThemedText>
       </ThemedView>

       <ThemedView style={styles.texto}>
        <ThemedText style={styles.data}
          type='default'>06/05/2025</ThemedText>
       </ThemedView>

        <ThemedText 
        type="default" style={styles.textoTodos}>
        Para Todos Os Garotos Que Eu Já Amei
    </ThemedText>

           <Image
                  source={require('@/assets/images/para-todos.png')}
                  style={styles.filme2}
                  />

                  <Image
                  source={require('@/assets/images/informacoes-todos-os-garotos.jpg')}
                  style={styles.informacoesTodos}
                  />

               <ThemedView style={styles.texto}>
                <ThemedText style={styles.sinopse2}
                type='default'>Após cartas de amor secretas que ela escreveu para seus paqueras serem misteriosamente enviadas,
                           a romântica Lara Jean tem que lidar com as consequências e enfrentar o desafio de encarar os garotos para quem escreveu.</ThemedText>
                </ThemedView> 

                <ThemedView style={styles.texto}>
                  <ThemedText style={styles.opiniao2}
                  type='default'>É uma comédia romêntica, é leve e divertido. A história prende a sua atenção.
                   O filme não precisa de um drama exagerado, ele mostra o que realmente acontece com os adolescentes em específico, 
                   quando gosta de alguém, mostra sobre o primeiro amor, sobre os medos da adolescência e a coragem de ser quem você é, mas de uma forma sincera.
                    No geral, o filme é muito bom e leve, é bom qunado alguém está com tédio ou quer um filme de romance para assitir.</ThemedText>
                  </ThemedView> 

                  <ThemedView style={styles.texto}>
                    <ThemedText style={styles.data2}
                    type='default'>06/05/2025</ThemedText>
                    </ThemedView> 

                     <ThemedText 
                       type="default" style={styles.textoCinco}>
                        A Cinco Passos De Você
                     </ThemedText>

                    <Image
                      source={require('@/assets/images/cinco-passos.png')}
                  style={styles.filme3}
                  />

                  <Image
                  source={require('@/assets/images/informacoes-5-passos.jpg')}
                  style={styles.informacoescinco}
                  />

                  <ThemedView style={styles.texto}>
                    <ThemedText style={styles.sinopse3}
                    type='default'>Stella passa muito tempo no hospital por causa de uma fibrose cística.
                         Lá, ela conhece Will, que sofre da mesma doença. Eles são obrigados a manter distância, mas mesmo assim se apaixonam.</ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.texto}>
                    <ThemedText style={styles.opiniao3}
                    type='default'>Esse filme, prende muita atenção dos telespectadores, pois mostra que os desafios que os personagens principais enfrentam. 
                          O filme em geral é bem fofo, apesar de ter umas cenas bem tristes, que faz com que nós reflitamos sobre a vida. 
                          Ele éum filme que vale a pena assistir se você curte um bom drama romântico. Ele te faz pensar sobre a importância do contato físico, da proximidade e de como cada momento é precioso.</ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.texto}>
                    <ThemedText style={styles.data3}
                    type='default'>06/05/2025</ThemedText>
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

      titleContainer: {
        color: '#EF124F',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#00002B',
        paddingTop: -10,
        fontFamily: 'Bungee',
      },

      textoSimp: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B',
        fontFamily: 'ui-sans-serif',
        color: '#FF6992',
        top: 30,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 40,
      },

      reactLogo: {
        height: 280,
        width: 550,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },

      texto: {
      backgroundColor: '#00002B',
      fontSize: 12,
      },  

      scrollContent:{
        paddingTop: 20,
        paddingBottom: 40,
      },

      newImageStyle:{
         width: 150,
         height: 225, 
         resizeMode: 'contain',    
         marginLeft: 6,       
         borderRadius: 8,
         top: 60,
      },

      containerConteudo: {
            flex: 1,
            flexDirection: 'column',
      },

       informacoesSimp: {
        width: 150,     
        height: 90,    
        resizeMode: 'contain',
        marginBottom: 10,
        marginLeft: 130,
        top: -160,
      },

      sinopse: {
        fontSize: 15,
        marginLeft: 162, 
        top: -170,
        maxWidth: 600,
        color: '#FFFFFF', 
        lineHeight: 15,  
      },

      opiniao: {
        fontSize: 15.8,
        marginLeft: 6, 
        top: -156,
        maxWidth: 1850,
        height:'100%',
        color: '#FFFFFF',
        lineHeight: 19.2,
      },

        data: {
        fontSize: 14,
        marginLeft: 300,
        color: '#FF3860',
        fontFamily: 'ui-sans-serif',
        top: -150,
      },

      textoTodos:{
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B',
        fontFamily: 'ui-sans-serif',
        color: '#FF6992',
        top: -100,
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 30,
        },
        
        filme2: {
         width: 170,
         height: 220, 
         resizeMode: 'contain',    
         marginLeft: -3,       
         borderRadius: 8,
         top: -65,
        },

        informacoesTodos: {
        width: 150,     
        height: 70,    
        resizeMode: 'contain',
        marginBottom: 10,
        marginLeft: 120,
        top: -275,
      },

      sinopse2: {
        fontSize: 16,
        marginLeft: 160, 
        top: -280,
        maxWidth: 600,
        color: '#FFFFFF',
        lineHeight: 18.9, 
      },

      opiniao2: {
        fontSize: 15,
        marginLeft: 7, 
        top: -260,
        maxWidth: 1860,
        height:'100%',
        color: '#FFFFFF',
        lineHeight: 21.2,
      },

      data2: {
        fontSize: 16,
        marginLeft: 300,
        color: '#FF3860',
        fontFamily: 'ui-sans-serif',
        top: -245,
      },

      textoCinco: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B',
        fontFamily: 'ui-sans-serif',
        color: '#FF6992',
        top: -180,
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 30,
      },

      filme3: {
        width: 150,
         height: 225, 
         resizeMode: 'contain',    
         marginLeft: 7,       
         borderRadius: 8,
         top: -160,
      },

      informacoescinco: {
         width: 150,     
        height: 75,    
        resizeMode: 'contain',
        marginBottom: 10,
        marginLeft: 124,
        top: -370,
      },

      sinopse3: {
        fontSize: 17.3,
        marginLeft: 164, 
        top: -375,
        maxWidth: 600,
        color: '#FFFFFF',
        lineHeight: 18,
      },

      opiniao3: {
        fontSize: 17,
        marginLeft: 8, 
        top: -350,
        maxWidth: 1860,
        height:'100%',
        color: '#FFFFFF',
        lineHeight: 20,
      },

      data3: {
        fontSize: 15,
        marginLeft: 300,
        color: '#FF3860',
        fontFamily: 'ui-sans-serif',
        top: -346,
      }

        })

