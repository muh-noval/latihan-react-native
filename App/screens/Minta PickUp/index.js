import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useLazyQuery} from '@apollo/client';
import GET_Pokemons from '../../configs/query/pokemons';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     nama_kota: 'Palu',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     nama_kota: 'Makassar',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     nama_kota: 'Balikpapan',
//   },
// ];

const numColumns = 2;

const Item = ({judul, deskripsi, image, link}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          link.navigate('DetailScreen', {Item: [judul, deskripsi, image]});
        }}>
        <ImageBackground style={styles.backgroundHeader} source={{uri: image}}>
          <Text style={styles.title}>{judul}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const App = ({navigation}) => {
  const [data, setData] = useState({});

  const [getPokemons] = useLazyQuery(GET_Pokemons, {
    onCompleted: async response => {
      setData(response?.pokemons);
      console.log('Berhasil', response);
    },
    onError: async error => {
      console.log('Anda', error);
    },
  });

  useEffect(() => {
    getPokemons({
      variables: {
        first: 10,
      },
    });
  }, []);

  const renderItem = ({item}) => (
    <Item
      judul={item.name}
      image={item.image}
      deskripsi={item.number}
      link={navigation}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

/*contoh dari kak fandu di bawah
// const Item = props => {
//   const {title, title2, tes} = props;
//   // block scope
//   return (
//     <View>
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => {
//           tes.navigate('DetailScreen');
//         }}>
//         <Text style={styles.title}>
//           {title} {title2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const App = props => {
//   const {navigation} = props;
//   const renderItem = ({item}) => (
//     <Item title={item.name} title2={item.name2} tes={navigation} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// };
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    // marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 170,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 175,
    color: 'white',
    backgroundColor: 'red',
    width: 120,
    borderRadius: 10,
    position: 'absolute',
  },
  backgroundHeader: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default App;
