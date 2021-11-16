import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, Button} from 'react-native';
import RootNavigation from './App/navigation/rootNavigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// import InternetConnectionAlert from 'react-native-internet-connection-alert';
import {NetworkProvider, NetworkConsumer} from 'react-native-offline';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <NetworkProvider
      pingTimeout={1000}
      pingInterval={1000}
      pingServerUrl="https://www.google.com/">
      <ApolloProvider client={client}>
        <SafeAreaView style={styles.container}>
          {/* <InternetConnectionAlert
          onChange={connectionState => {
            console.log('Connection State: ', connectionState);
          }}
           title='Masalah Koneksi Internet'
           message='Silahkan periksa koneksi jaringan Anda'>
        </InternetConnectionAlert> */}
          <RootNavigation />
        </SafeAreaView>
        <NetworkConsumer>
          {/* {({isConnected}) =>
            console.log(isConnected, 'Silahkan periksa koneksi anda!')
          } */}
          {({isConnected}) =>
            isConnected || <Text>Silahkan periksa Koneksi Anda</Text>
          }
        </NetworkConsumer>
      </ApolloProvider>
    </NetworkProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;
