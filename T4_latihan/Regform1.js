import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Regis extends React.Component {
  render() {
    return (
      <View style={styles.register}>
        <Text style={styles.header}> Registration </Text>

        <TextInput
          style={styles.textinput}
          placeholder="Username ..."
          underlineColorAndroid={'transparent'}


        <TextInput
          style={styles.textinput}
          placeholder="Email ..."
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Password ..."
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}


        <TouchableOpacity style={styles.botton}>
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  register: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  botton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
    borderRadius: 50,

    },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',

    },
});
