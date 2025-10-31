import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { window } from '@/constants/sizes';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const dadosCards = [
  {
    titulo: 'AÇÃO',
    descricao:
      'Nada me empolga mais do que explosões, fugas e aventuras arriscadas! Cada cena me faz sentir a adrenalina correr nas veias! Neste post, você vai conhecer meus filmes de ação favoritos.',
    autor: 'Maria Luiza',
    cor: '#95b963',
    rota: '/(tabs)/acao',
  },
  {
    titulo: 'ANIMAÇÃO',
    descricao:
      'É incrível como cada história animada consegue ensinar e encantar ao mesmo tempo. Te convido a ver meus filmes de animação preferidos para passar o tempo. ^^',
    autor: 'Bianca Amorim',
    cor: '#7d5b8c',
    rota: '/(tabs)/animacao',
  },
  {
    titulo: 'DRAMA',
    descricao:
      'Filmes de drama falam sobre a vida real, sobre sentimentos e decisões que mudam tudo. Acho que se quer sentir uma dor emocional, meu post é para você...',
    autor: 'Allan',
    cor: '#5391c7',
    rota: '/(tabs)/drama',
  },
  {
    titulo: 'ROMANCE',
    descricao:
      'Os filmes de romance me fazem sonhar, sorrir e até derramar algumas lágrimas. Vem se apaixonar comigo conhecendo aos meus filmes de romance preferidos <3',
    autor: 'Kamilly',
    cor: '#e994b7',
    rota: '/(tabs)/romace',
  },
  {
    titulo: 'TERROR',
    descricao:
      'Quanto mais suspense e mistério, melhor! Gosto de mergulhar no clima sombrio e descobrir o que se esconde nas sombras. Se você tem esse sentimento vendo filmes de terror, conheça minhas recomendações!!',
    autor: 'Maykon',
    cor: '#a82223',
    rota: '/(tabs)/terror',
  },
];

export default function TelaInicial() {
  const progresso = useSharedValue<number>(0);
  const navegar = useRouter();

  const [fonteCarregada] = useFonts({
    'Fredoka-Regular': require('../../assets/fonts/Fredoka-Regular.ttf'),
  });

  useEffect(() => {
    if (fonteCarregada) {
      SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  const renderizarItem = React.useCallback(
    ({ item }: { item: any }) => (
      <View style={[estilos.cartao, { backgroundColor: item.cor }]}>
        <Text style={estilos.titulo}>{item.titulo}</Text>
        <Text style={estilos.descricao}>{item.descricao}</Text>
        <Text style={estilos.autor}>by {item.autor}</Text>

        <TouchableOpacity
          style={estilos.botaoCartao}
          activeOpacity={0.8}
          onPress={() => navegar.push(item.rota)}
        >
          <Text style={estilos.textoBotao}>Ver Post</Text>
        </TouchableOpacity>
      </View>
    ),
    [navegar]
  );

  return (
    <View style={estilos.container}>
      <ThemedView style={estilos.cabecalho}>
        <ThemedText type="subtitle" style={estilos.fonteGlobal}>
          new blog!
        </ThemedText>
        <ThemedText type="title" style={[estilos.fonteTitulo, estilos.fonteGlobal]}>
          POCSCAST
        </ThemedText>
        <ThemedText type="subtitle" style={estilos.fonteGlobal}>
          MOVIES
        </ThemedText>
        <ThemedText type="subtitle" style={[estilos.subtitulo, estilos.fonteGlobal]}>
          principais destaques
        </ThemedText>
      </ThemedView>

      <View style={estilos.containerCarrossel}>
        <Carousel
          autoPlayInterval={2500}
          data={dadosCards}
          height={520}
          loop
          pagingEnabled
          snapEnabled
          width={window.width}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: 50,
          }}
          onProgressChange={progresso}
          renderItem={renderizarItem}
        />
      </View>

      <View style={estilos.containerRecomendacao}>
        <Text style={estilos.textoRecomendacao}>
          Conheça as recomendações da semana :)
        </Text>

        <TouchableOpacity
          style={estilos.botaoRecomendacao}
          activeOpacity={0.8}
          onPress={() => navegar.push('/(tabs)/recomendacao')}
        >
          <Text style={estilos.textoBotao}>clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00002B',
  },

  cabecalho: {
    alignItems: 'center',
    backgroundColor: '#00002B',
    paddingVertical: 1,
  },

  fonteGlobal: {
    fontFamily: 'Fredoka-Regular',
  },

  fonteTitulo: {
    fontFamily: 'Fredoka-Regular',
  },

  subtitulo: {
    marginTop: 12,
    fontSize: 15,
    fontFamily: 'Fredoka-Regular',
  },

  containerCarrossel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 60,
  },

  cartao: {
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 20,
    padding: 25,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  titulo: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Fredoka-Regular',
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  descricao: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 30,
    flexGrow: 1,
    fontFamily: 'Fredoka-Regular',
  },

  autor: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Fredoka-Regular',
  },

  botaoCartao: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Fredoka-Regular',
  },

  containerRecomendacao: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 25,
  },

  textoRecomendacao: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Fredoka-Regular',
  },

  botaoRecomendacao: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
