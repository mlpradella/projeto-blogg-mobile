import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <ScrollView style={estilos.container} contentContainerStyle={estilos.containerConteudo}>
      <ThemedText type="title" style={estilos.textoTituloPrincipal}>DRAMA</ThemedText>

      {/* ======================================================= */}
      {/* FILME 1: As Vantagens de ser Invisível                  */}
      {/* ======================================================= */}
      <ThemedText type="subtitle" style={estilos.tituloFilme}>As vantagens de ser invisível</ThemedText>

      <View style={estilos.linhaPosterDetalhes}>
        
        <View style={estilos.colunaPoster}>
          <Image
            source={require('@/assets/images/vant.png')}
            style={estilos.imagemPoster}
            contentFit="contain"
          />
        </View>

        <View style={estilos.colunaDetalhes}>
          
          <View style={estilos.linhaClassificacaoAno}>
            <Image source={require('@/assets/images/12.png')} style={estilos.imagemClassificacaoIdade} />
            <ThemedText type="defaultSemiBold" style={estilos.textoAno}>2012</ThemedText>
          </View>

          <View style={estilos.linhaEstrelasPontuacao}>
            <View style={estilos.containerEstrelas}>
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/group.png')} style={estilos.imagemEstrela} /> 
            </View>
            <ThemedText type="subtitle" style={estilos.textoPontuacao}>4.5</ThemedText>
          </View>
        
          <View style={estilos.linhaDuracao}>
            <Image source={require('@/assets/images/relogio.png')} style={estilos.iconeDuracao} />
            <ThemedText type="defaultSemiBold" style={estilos.textoDuracao}>1h 43min</ThemedText>
          </View>
          
          <ThemedText type="subtitle" style={estilos.tituloSinopse}>Sinopse:</ThemedText>
          <ThemedText type="defaultSemiBold" style={estilos.corpoSinopse}>
            Charlie é um jovem que tem dificuldades para interagir em sua nova escola. Ele se sente deslocado no ambiente. Seu professor de literatura, no entanto, acredita nele e o vê como um gênio.
          </ThemedText>
        </View>
      </View>
      

      <ThemedText type="subtitle" style={estilos.tituloResenha}>Resenha:</ThemedText>
      <ThemedText type="defaultSemiBold" style={estilos.corpoResenha}>
        Ver esse filme durante a adolescência é uma experiencia surreal, te fazendo refletir em diversos aspectos, com ótimos atores que me identifiquei, chorando muito com o fim. Simplesmente um dos meus favoritos
      </ThemedText>
      <ThemedText type="defaultSemiBold" style={estilos.dataResenha}>18/01/2009</ThemedText>

      <ThemedText type="subtitle" style={estilos.tituloDiretor}>Diretor</ThemedText>
      <View style={estilos.linhaInfoDiretor}>
        <Image
          source={require('@/assets/images/diretor1.png')}
          style={estilos.imagemDiretor}
        />
        <ThemedText style={estilos.textoNomeDiretor}> Stephen Chbosky.</ThemedText>
      </View>


      {/* ======================================================= */}
      {/* FILME 2: Sociedade dos poetas mortos                    */}
      {/* ======================================================= */}
      <ThemedText type="subtitle" style={estilos.tituloFilme1}>Sociedade dos poetas mortos </ThemedText>

      <View style={estilos.colunaPoster1}>
          <Image
            source={require('@/assets/images/sociedade.png')}
            style={estilos.imagemPoster1}
            contentFit="contain"
          />
        </View>

        <View style={estilos.linhaClassificacaoAno1}>
            <Image source={require('@/assets/images/12.png')} style={estilos.imagemClassificacaoIdade} />
            <ThemedText type="defaultSemiBold" style={estilos.textoAno}>1990</ThemedText>
          </View>

          <View style={estilos.linhaEstrelasPontuacao1}>
            <View style={estilos.containerEstrelas}>
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/group.png')} style={estilos.imagemEstrela} /> 
            </View>
            <ThemedText type="subtitle" style={estilos.textoPontuacao}>4.7</ThemedText>
          </View>

          <View style={estilos.linhaDuracao1}>
            <Image source={require('@/assets/images/relogio.png')} style={estilos.iconeDuracao} />
            <ThemedText type="defaultSemiBold" style={estilos.textoDuracao}>2h 8min</ThemedText>

          </View>

          <View style={estilos.containerTeste}>
          <ThemedText type="subtitle" style={estilos.tituloSinopse}>Sinopse:</ThemedText>
          <ThemedText type="defaultSemiBold" style={estilos.corpoSinopse}>
            Charlie é um jovem que tem dificuldades para interagir em sua nova escola. Ele se sente deslocado no ambiente. Seu professor de literatura, no entanto, acredita nele e o vê como um gênio.
          </ThemedText>
          </View>
          <ThemedText type="subtitle" style={estilos.tituloResenha}>Resenha:</ThemedText>
          <ThemedText type="defaultSemiBold" style={estilos.corpoResenha}>
          Sendo um artista e tendo assistido esse filme, tocou profundamente não apenas meu coração mas como minha alma. Chorei tanto vendo que me 
          desidratei, 
          não recomendo se você ainda desejar ter uma saúde mental intacta.
        </ThemedText>
        <ThemedText type="defaultSemiBold" style={estilos.dataResenha}>18/01/2009</ThemedText>
        <ThemedText type="subtitle" style={estilos.tituloDiretor}>Diretor</ThemedText>
        <View style={estilos.linhaInfoDiretor}>
          <Image
            source={require('@/assets/images/9PdTBjn8dJqfn3ygKvsCdl9G06J 2.png')}
            style={estilos.imagemDiretor}
          />
          <ThemedText style={estilos.textoNomeDiretor}> Peter Weir</ThemedText>
        </View>

      {/* ======================================================= */}
      {/* FILME 3: Stand by me                                    */}
      {/* ======================================================= */}
      <ThemedText type="subtitle" style={estilos.tituloFilme}>Stand by me</ThemedText>

      <View style={estilos.colunaPoster2}>
          <Image
            source={require('@/assets/images/20028681 1 (5).png')}
            style={estilos.imagemPoster2}
            contentFit="contain"
          />
        </View>
  
      <View style={estilos.containerTeste2}>

        <View style={estilos.linhaClassificacaoAno2}>
            <Image source={require('@/assets/images/12.png')} style={estilos.imagemClassificacaoIdade} />
            <ThemedText type="defaultSemiBold" style={estilos.textoAno}>1990</ThemedText>
          </View>
          <View style={estilos.linhaEstrelasPontuacao1}>

            <View style={estilos.containerEstrelas}>
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} />
                <Image source={require('@/assets/images/estrela.png')} style={estilos.imagemEstrela} /> 
            </View>
            <ThemedText type="subtitle" style={estilos.textoPontuacao}>5.0</ThemedText>
          </View>

          <View style={estilos.linhaDuracao1}>
            <Image source={require('@/assets/images/relogio.png')} style={estilos.iconeDuracao} />
            <ThemedText type="defaultSemiBold" style={estilos.textoDuracao}>1h 29min</ThemedText>
          </View>

          <View style={estilos.containerTeste}>
          <ThemedText type="subtitle" style={estilos.tituloSinopse}>Sinopse:</ThemedText>
          <ThemedText type="defaultSemiBold" style={estilos.corpoSinopse}>
          O filme é uma adaptação de uma novela do Stephen King. É uma história de amadurecimento que acompanha quatro amigos na década de 1950. 
          Após saberem de um corpo de um adolescente que está desaparecido na floresta, eles embarcam em uma jornada para encontrar o corpo.
          </ThemedText>

          <ThemedText type="subtitle" style={estilos.tituloResenha1}>Resenha:</ThemedText>
          </View>
          <ThemedText type="defaultSemiBold" style={estilos.corpoResenha}>
          Sempre filmes gays nunca tem final feliz, esse filme é uma faca profundamente enfiada em meu estomago que sempre que me 
          lembro daquele final me faz pensar seriamente se vale viver. O que amo é que mesmo sendo um filme de 1986 é muito superior a 
          filmes atuais tanto em desenvolvimento tanto na historia. Tão simples, mas ao mesmo tempo tao impactante.
        </ThemedText>
        <ThemedText type="defaultSemiBold" style={estilos.dataResenha}>18/01/2009</ThemedText>
        <ThemedText type="subtitle" style={estilos.tituloDiretor}>Diretor</ThemedText>
        <View style={estilos.linhaInfoDiretor}>
          <Image
            source={require('@/assets/images/9PdTBjn8dJqfn3ygKvsCdl9G06J 3 (1).png')}
            style={estilos.imagemDiretor}
          />
          <ThemedText style={estilos.textoNomeDiretor}> Rob Reiner</ThemedText>
        </View>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00002E', 
  },
  containerConteudo: { 
    paddingBottom: 40, 
  },
 
  textoTituloPrincipal: { 
    fontSize: 40,
    textAlign: 'center', 
    color: '#244A80',
    marginTop: 100,
    fontFamily: 'ui-sans-serif',
  },
  tituloFilme: { 
    color: '#377A98',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
  },
  tituloFilme1: { 
    color: '#377A98',
    marginTop: 50,
    marginLeft: 20,
    fontSize: 22,
  },
  linhaPosterDetalhes: { 
    flexDirection: 'row', 
    marginTop: 10,
    paddingHorizontal: 20, 
  },
  
  colunaPoster: { 
    flex: 0.45, 
  },

  colunaPoster1: { 
    flex: 0.45, 
    marginTop: 30,
  },
  colunaPoster2: { 
    marginTop: 30,
  },
  imagemPoster: { 
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },

  imagemPoster1: { 
    width: '50%',
    height: 230,
    resizeMode: 'contain',
  },
  imagemPoster2: { 
    width: '50%',
    height: 230,
    resizeMode: 'contain',
  },

  colunaDetalhes: { 
    flex: 0.55, 
    paddingLeft: 10, 
  },
 
  linhaClassificacaoAno: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  linhaClassificacaoAno1: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 185,
    marginTop: -100,
  },
  linhaClassificacaoAno2: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 185,
  },
  imagemClassificacaoIdade: { 
    width: 30,
    height: 30,
    marginRight: 5,
  },
  textoAno: { 
    color: '#E0E0E0',
    fontSize: 20,
  },
  linhaEstrelasPontuacao: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  linhaEstrelasPontuacao1: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 185,
    marginTop: 5,
  },
  containerEstrelas: { 
    flexDirection: 'row',
    marginRight: 10,
  },
  imagemEstrela: { 
    width: 20,
    height: 20,
    marginRight: 2, 
  },
  textoPontuacao: { 
    fontSize: 18,
  },
  linhaDuracao: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  linhaDuracao1: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 185,
  },
  iconeDuracao: { 
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textoDuracao: { 
    fontSize: 17,
  },

  tituloSinopse: { 
    color: '#377A98',
    marginTop: 10,
    fontSize: 18,
  },
  corpoSinopse: { 
    color: '#D2FFF4',
    marginTop: 5,
    fontSize: 12,
  },
 
  tituloResenha: { 
    color: '#377A98',
    marginTop: -10,
    marginLeft: 20,
  },
  tituloResenha1: { 
    color: '#377A98',
    marginTop: -10,
    marginLeft: -170,
  },
  corpoResenha: { 
    color: '#D2FFF4',
    marginHorizontal: 20, 
    marginTop: 10,
    fontSize: 12,
  },
  dataResenha: { 
    color: '#69C6AF',
    fontSize: 12,
    marginTop: 5,
    marginRight: 20,
    textAlign: 'right', 
  },
  
  tituloDiretor: { 
    color: '#377A98',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
  },
  linhaInfoDiretor: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 5,
  },
  imagemDiretor: { 
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textoNomeDiretor: { 
    color: '#69C6AF',
  },
  containerTeste: { 
    marginLeft: 190,
  },
  containerTeste2: { 
    marginTop: -230,
  },
});