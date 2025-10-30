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

          <ThemedView style={styles.titulo}>
            <ThemedText type="default">Simplismente Acontece</ThemedText>
          </ThemedView>

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

       <ThemedView style={styles.titulo2}>
            <ThemedText type="default">Para Todos Os Garotos Que Eu Já Amei</ThemedText>
          </ThemedView>

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

                    <ThemedView style={styles.titulo3}>
                      <ThemedText type='default'>A Cinco Passos De Você</ThemedText>
                    </ThemedView>

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

      titulo: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B',
        alignItems: 'center',
        fontFamily: 'ui-sans-serif',
        color: '#FF6992',
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
         top: 10,
      },

      containerConteudo: {
            flex: 1,
            flexDirection: 'column',
      },

       informacoesSimp: {
        width: 150,     
        height: 83,    
        resizeMode: 'contain',
        marginBottom: 10,
        marginLeft: 130,
        top: -205,
      },

      sinopse: {
        fontSize: 8.8,
        marginLeft: 161, 
        top: -216,
        maxWidth: 600,
        color: '#FFFFFF',   
      },

      opiniao: {
        fontSize: 8.7,
        marginLeft: 5, 
        top: -197,
        maxWidth: 1860,
        height:'100%',
        color: '#FFFFFF',
      },

        data: {
        fontSize: 12,
        marginLeft: 305,
        color: '#FF3860',
        fontFamily: 'ui-sans-serif',
        top: -190,
      },

      titulo2:{
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B',
        alignItems: 'center',
        fontFamily: 'ui-sans-serif',
        color: '#FF6992',
        top: -120,
        },
        
        filme2: {
         width: 150,
         height: 225, 
         resizeMode: 'contain',    
         marginLeft: 7,       
         borderRadius: 8,
         top: -105,
        },

        informacoesTodos: {
        width: 150,     
        height: 70,    
        resizeMode: 'contain',
        marginBottom: 10,
        marginLeft: 119,
        top: -320,
      },

      sinopse2: {
        fontSize: 13,
        marginLeft: 161, 
        top: -330,
        maxWidth: 600,
        color: '#FFFFFF', 
      },

      opiniao2: {
        fontSize: 12,
        marginLeft: 5, 
        top: -129,
        maxWidth: 1860,
        height:'100%',
        color: '#FFFFFF',
      },

      data2: {
        fontSize: 14,
        marginLeft: 310,
        color: '#FF3860',
        fontFamily: 'ui-sans-serif',
        top: -135,
      },

      titulo3: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B',
        alignItems: 'center',
        fontFamily: 'ui-sans-serif',
        color: '#FF6992',
        top: 50,
        fontSize: 30,
      },

      filme3: {
        width: 150,
         height: 225, 
         resizeMode: 'contain',    
         marginLeft: 7,       
         borderRadius: 8,
         top: 80,
      },

      informacoescinco: {
         width: 150,     
        height: 70,    
        resizeMode: 'contain',
        marginBottom: 10,
        marginLeft: 124,
        top: -134,
      },

      sinopse3: {
        fontSize: 12,
        marginLeft: 164, 
        top: -140,
        maxWidth: 600,
        color: '#FFFFFF',
      },

      opiniao3: {
        fontSize: 14,
        marginLeft: 7, 
        top: -129,
        maxWidth: 1860,
        height:'100%',
        color: '#FFFFFF',
      }

        })

