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

          <ThemedView style={styles.titulo1}>
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

      titulo1: {
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
            
      },

      opiniao: {
        fontSize: 8.7,
        marginLeft: 5, 
        top: -197,
        maxWidth: 1860,
        height:'100%',
      }

    })

