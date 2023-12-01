import { Text, SafeAreaView, StyleSheet,Dimensions,FlatList,Image } from 'react-native';

 const arrayDados = [
  {status:'+ 1 Nível'},
  {status:'+ 4 Velocidade'},
  {status:'+ 3 Destreza'},
  {status:'+ 2 Mana'},
  {status:'+ 5 Vida'},
  {status:'+ 3 Defesa Fisica'},
  {status:'+ 2 Inteligência'},
  {status:'+ 2 Defesa Mágica'},
  {status:'+ 3 Ataque Mágico'},
  {status:'+ 1 Furtividade'},
  {status:'+ 2 Sorte'},
  {status:'+ 6 Fé'},
  {status:'+ 5 Ataque Físico'},
  {status:'+ 1 Ponto de Habilidade'}
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Image
        source={require('./assets/fundopretomedieval.avif')}
        style={styles.backgroundImage}
      />
    <SafeAreaView>
      <Text style={styles.paragraph}>
       Evolução Por Level
      </Text>
    </SafeAreaView>
     <FlatList
     data={arrayDados}
     renderItem={({item})=>
     <SafeAreaView style={styles.containerStatus}>
<Text style={styles.textoStatus}>{item.status} </Text>
     </SafeAreaView>
     }
     />
    </SafeAreaView>
  );
}
const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    textShadowColor: 'black',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 2,
  },
  textoStatus:{
    fonteSize:20,
    margin:10,
    textAlign:'center',
    backgroundColor:'#0000dd',
    borderRadius:10,
    padding:10,
    color: 'yellow',
    textShadowColor: 'black',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 2,
  },
  containerStatus:{


  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // ou 'stretch' para esticar a imagem
    position: 'absolute',
  },

});