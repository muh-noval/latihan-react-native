import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Apptrening = () => {
  const Data = [
    {
      image: require('./gambar2.png'),
    },
    {
      image: require('./gambar2.png'),
    },
    {
      image: require('./gambar2.png'),
    },
    {
      image: require('./gambar2.png'),
    },
    {
      image: require('./gambar2.png'),
    },
  ];

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.backheader} source={require('./iconback.png')} />
        </TouchableOpacity>
        <Text style={styles.textheader}>Promo</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({item, index}) => (
            <Image style={styles.gmbr} source={item.image} />
          )}
          keyExtractor={({item, index}) => index}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  gmbr: {
    height: 250,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
  },
  textheader: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backheader: {
    width: 20,
    height: 20,
    top: 3,
  },
});

export default Apptrening;
