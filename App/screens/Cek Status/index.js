import React, {useState} from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cek_Status = () => {
  // input data
  const [nama, setNama] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [number, setNumber] = React.useState(null);

  const [isModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!isModal);
  };

  // untuk Date Time Picker
  const [isDatePicker, setDatePicker] = useState(false);

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const hideDatePicker = () => {
    setDatePicker(false);
  };

  const handleConfirm = date => {
    console.warn('Tanggal Berhasil Di Pilih', date);
    hideDatePicker();
  };

  const mergeUsers = async () => {
    try {
      // read merged item
      const currentUser = await AsyncStorage.getItem('@MyApp_user');

      console.log(currentUser);
    } catch {
      console.log('warning');
    }
  };

  const savedata = async () => {
    // console.log(email, nama, number)

    const USER_1 = {
      name: nama,
      email: email,
      password: number,
    };

    // save first user
    await AsyncStorage.setItem('@MyApp_user', JSON.stringify(USER_1));
    setNama('')
    setEmail('')
    setNumber('')
  };

  return (
    <View>
      <View style={styles.cek_data}>
        <TouchableOpacity onPress={toggleModal}>
          <Text>Data Penumpang</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDatePicker}>
          <Text>Atur Jadwal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={mergeUsers}>
          <Text>Tampilkan Storage</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setNama}
        value={nama}
        placeholder={'nama anda'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder={'email anda'}
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder={'email'}
        keyboardType="email-address"
      /> */}
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder={'Password'}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={savedata}>
        <Text>Simpan</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModal}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.Modal}>
          <Image style={styles.icon_danger} source={require('../danger.png')} />
          <Text style={{fontWeight: 'bold', fontSize: 28}}>Warning!</Text>
          <Text style={{textAlign: 'center'}}>
            Silahkan lakukan Login{'\n'}untuk pengecekan Data
          </Text>

          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.btn_closeWarning}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <DateTimePickerModal
        isVisible={isDatePicker}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Cek_Status;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  Modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cek_data: {
    marginLeft: 20,
    marginVertical: 15,
  },

  icon_danger: {
    width: 100,
    height: 100,
  },

  btn_closeWarning: {
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 30,
  },
});
