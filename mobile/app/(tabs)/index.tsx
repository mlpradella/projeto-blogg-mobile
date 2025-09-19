import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">new blog!</ThemedText>
        <ThemedText type="title">POCSCAST</ThemedText>
        <ThemedText type="subtitle">MOVIES</ThemedText>
      </ThemedView>

      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00002B',
  },

  titleContainer: {
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#00002b'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 0,
    width: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
