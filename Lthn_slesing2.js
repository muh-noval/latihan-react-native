import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Slesing2 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.backgroundHeader}
          source={require('./gambar.png')}
        />
        <TouchableOpacity style={styles.backButton}>
          <Image
            style={styles.imagebackButton}
            source={require('./iconback.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Board}>
        <View style={styles.textBoard}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
      <View style={styles.footerButton}>
        <TouchableOpacity style={styles.stylefooterButton}>
          <Text style={styles.textfooterButton}>Gabung Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundHeader: {
    width: '100%',
    height: 240,
  },
  backButton: {
    position: 'absolute',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  imagebackButton: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },
  Board: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 25,
    top: -20,
  },
  textBoard: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  footerButton: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '185%',
  },
  stylefooterButton: {
    width: 350,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
  },
  textfooterButton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Slesing2;
