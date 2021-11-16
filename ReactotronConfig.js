import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import Reactotron, {networking, asyncStorage} from 'reactotron-react-native';

const {scriptURL} = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

if (__DEV__) {
  Reactotron.configure({host: scriptHostname})
    .useReactNative() // add all built-in react native plugins
    .setAsyncStorageHandler(AsyncStorage)
    .use(
      networking({
        ignoreUrls: /\/(index.bundle\?|symbolicate)$/,
      }),
    )
    .use(asyncStorage({}))
    .connect(); // let's connect!
  const oldConsoleLog = console.log;
  console.log = (...args) => {
    oldConsoleLog(...args);
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };
}
