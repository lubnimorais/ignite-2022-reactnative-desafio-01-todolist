import { StatusBar } from 'expo-status-bar';

import { HomeScreen } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <HomeScreen />
    </>
  );
}

