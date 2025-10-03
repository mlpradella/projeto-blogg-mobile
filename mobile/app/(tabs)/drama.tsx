import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <ThemedText type="title" style={styles.teste}>DRAMA</ThemedText>
        <ThemedText type="subtitle" style={styles.testee}>As vantagens de ser invisível</ThemedText>
      <div style={styles.ladinho}>
      <Image
        source={require('@/assets/images/vant.png')} 
        style={styles.newImageStyle}
      />
    </div>
    <div style={styles.ladinho2}>
      <Image
        source={require('@/assets/images/12.png')} 
        style={styles.newImageStyle2}
      />
       </div>
      <div style={styles.textinho}>
      <ThemedText type="subtitle" style={styles.testeee}>2o12</ThemedText>
      </div>

      <div style={styles.estrelinha}>
      <Image
        source={require('@/assets/images/Vector.png')} 
        style={styles.newImageStyle3}
      />
      </div>

      <div style={styles.estrelinha1}>
      <Image
        source={require('@/assets/images/Vector.png')} 
        style={styles.newImageStyle3}
      />
      </div>

      <div style={styles.estrelinha2}>
      <Image
        source={require('@/assets/images/Vector.png')} 
        style={styles.newImageStyle3}
      />
      </div>

      <div style={styles.estrelinha3}>
      <Image
        source={require('@/assets/images/Vector.png')} 
        style={styles.newImageStyle3}
      />
      </div>

      <div style={styles.estrelinha4}>
      <Image
        source={require('@/assets/images/group.png')} 
        style={styles.newImageStyle3}
      />
      </div>
      <div style={styles.relogio}>
      <Image
        source={require('@/assets/images/relogio.png')} 
        style={styles.newImageStyle3}
      />
      </div>

   <div style={styles.tes}>
      <ThemedText  type="subtitle" style={styles.test}> 4.5 </ThemedText>
   </div>
      <ThemedText  type="subtitle" style={styles.testeeee}> Resenha: </ThemedText>
      <ThemedText  type="subtitle" style={styles.bananinha}>1h 43min</ThemedText>
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
  },
  reactLogo: {
    height: 250,
    width: 415,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  teste: {
    fontSize: 40,
    display: 'flex',
    justifyContent: 'center',
    color: '#244A80',
    marginTop: 30,
    fontFamily: 'ui-sans-serif',
  },
  testee: {
    color: '#377A98',
    marginTop: 35,
    marginLeft: 30,
  },
  testeee: {
    color: '#E0E0E0',
    marginLeft: -100,
  },
  newImageStyle: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: -170,
  },
  newImageStyle2: {
    width: 30,
    height: 30,
  },
  newImageStyle3: {
    width: 20,
    height: 20,
  },
  ladinho: {
    display: 'flex',
    justifyContent: 'center',
  },
  ladinho2: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 40,
    marginTop: -245,
  },
  textinho: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 230,
    marginTop: -30,
  },
  estrelinha: {
    marginLeft: 210,
    marginTop: 10,
  },
  estrelinha1: {
    marginLeft: 235,
    marginTop: -20,
  },
  estrelinha2: {
    marginLeft: 260,
    marginTop: -20,
  },
  estrelinha3: {
    marginLeft: 285,
    marginTop: -20,
  },
  estrelinha4: {
    marginLeft: 310,
    marginTop: -20,
  },
  test: {
    marginLeft: 335,
    marginTop: -35,
  },
  tes: {
     marginTop: -55,
  },
  testeeee: {
    color: '#377A98',
    marginTop: 210,
    marginLeft: 30,
  },
  relogio: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 35,
    marginTop: 10,
  },
  bananinha: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 200,
    marginTop: -230,
    
  },
});