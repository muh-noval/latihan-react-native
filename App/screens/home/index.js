import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg_image}>
        <Image
          style={{width: '100%', height: 295}}
          source={require('../drive.png')}
        />
      </View>
      <View style={styles.setkonten}>
        <Text style={styles.setjudul}>~ Jasa Angkut Barang ~</Text>
        <View style={styles.bg_konten}>
          <TouchableOpacity
            style={styles.konten}
            onPress={() => {
              navigation.navigate('FlatlistScreen');
            }}>
            <Image style={styles.IconImage} source={require('../lokasi.png')} />
            <Text>Cek Daftar Kota</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.konten}
            onPress={() => {
              navigation.navigate('PickUpScreen');
            }}>
            <Image style={styles.IconImage} source={require('../pickup.png')} />
            <Text>Minta PickUp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.konten}
            onPress={() => {
              navigation.navigate('StatusScreen');
            }}>
            <Image style={styles.IconImage} source={require('../status.png')} />
            <Text>Cek Status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.konten}
            onPress={() => {
              navigation.navigate('ProfilScreen');
            }}>
            <Image style={styles.IconImage} source={require('../profil.png')} />
            <Text>Profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg_image: {
    height: '35%',
  },
  setjudul: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40,
  },
  IconImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  konten: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    borderRadius: 10,
    width: 150,
    height: 150,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setkonten: {
    height: '75%',
    borderRadius: 30,
  },
  bg_konten: {
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  textkonten: {
    fontSize: 15,
  },
});

export default Home;
