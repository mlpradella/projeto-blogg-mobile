import { Image } from 'expo-image';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, View, } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" style={styles.titleContainer}>Romance</ThemedText>
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Simplismente Acontece</ThemedText>
          </ThemedView>

          <Image
                  source={require('@/assets/images/simplismente-acontece.png')}
                  style={styles.newImageStyle}
                  />

                  <Image
                  source={require('@/assets/images/informacoes-simplismente.jpg')}
                  style={styles.informacoesSimp}
                  />

          <ThemedView style={styles.texto}>
            <ThemedText style={styles.opiniao}
          type='default'>A história é até interessante, algumas pessoas podem achar o enredo um pouco previsível para o gênero, mas o filme se destaca por não cair em todos os clichês. 
        Pois o filme mostra uma história sobre as complicações da vida real e como o amor pode ser mais uma questão de tempo do que de destino. 
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
        color: '#FF6992',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#00002B',
        paddingTop: -10,
        fontFamily: 'Bungee',
      },

      stepContainer: {
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#00002B',
        alignItems: 'center',
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

      opiniao: {
        fontSize:16,
        marginLeft: 10, 
        marginTop: 35,
      },  

      scrollContent:{
        paddingTop: 20,
        paddingBottom: 40,
      },

      newImageStyle:{
        height: 270,
        width: 150 , 
        resizeMode: 'contain',
        paddingTop: 5, 
        marginLeft: 10,
        alignItems: 'flex-start',
      },

       informacoesSimp: {
        height: 290,
        width: 120,
        resizeMode:'contain',
        marginLeft: 190,
        marginTop: -310,
        alignItems: 'flex-start',
      },

    })

