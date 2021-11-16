import React from 'react';
import {useLazyQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import GET_Pokemons from '../../configs/query/pokemons';

// const formatData = (Item, numColumns) => {
//   const jumlahCard = Math.floor(Item.length / numColumns);
//   let jumlahElemntsCard = Item.length - jumlahCard * numColumns;

//   while (jumlahElemntsCard !== numColumns && jumlahElemntsCard !== 0) {
//     Item.push({key: `blank`, empty: true});
//     jumlahElemntsCard++;
//   }

//   return Item;
// };

const numColumns = 3;

const Item = ({image}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <FastImage
        style={{width: '100%', height: '100%'}}
        source={{
          uri: image,
          // headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.high,
        }}
        // resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );
};

const mintaPickUp = () => {
  const [Data, setData] = useState({});

  const [getPokemons] = useLazyQuery(GET_Pokemons, {
    onCompleted: async response => {
      setData(response?.pokemons);
      console.log(response);
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

  const renderItem = ({item}) => <Item image={item.image} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* Ketika kamu menggunakan numColumns dan tidak dapat menggunakan Dimension maka, aturlah flex 1/3
    jika numColumns 3. Sesuaikan dengan jumlah numColumns nya */}
      <FlatList
        data={Data}
        // data={formatData(Data, numColumns)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  card: {
    flex: 1 / 3,
    // backgroundColor: 'red',
    height: 150,
    // width: 150,
    // height: Dimensions.get('window').width / numColumns,
    margin: 1,
  },
});

export default mintaPickUp;
