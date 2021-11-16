import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Detail_Kota = ({route}) => {
  return (
    <View>
      <View>
        <Image
          style={Styles.backgroundHeader}
          source={{uri: route.params.Item[2]}}
        />
      </View>

      <View style={Styles.bg_textdetail}>
        <View style={Styles.textdetail}>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
            {route.params.Item[0]}{' '}
          </Text>
          <Text style={{fontWeight: 'bold'}}>
            Keterangan : {route.params.Item[1]}
          </Text>
          <Text style={{fontWeight: 'bold'}}>Deskripsi :</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>

      <View style={Styles.btn}>
        <TouchableOpacity style={Styles.style_btn}>
          <Text style={Styles.text_btn}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  backgroundHeader: {
    width: '100%',
    height: 240,
  },
  bg_textdetail: {
    borderRadius: 25,
    top: -20,
    backgroundColor: 'white',
    height: '100%',
  },
  textdetail: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  btn: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '175%',
  },
  style_btn: {
    width: 350,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
  },
  text_btn: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Detail_Kota;
