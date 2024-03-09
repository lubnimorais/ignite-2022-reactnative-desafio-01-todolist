import 'react-native-get-random-values'

import { StatusBar } from 'expo-status-bar';

import { HomeScreen } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <HomeScreen />
    </>
  );
}

