import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Regis from './T4_latihan/Regform1';

export default class Lthn_Regform extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Regis />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  },
});
