import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './navigation';

const App = () => {
  return (
    <SafeAreaProvider style={{paddingVertical:50}}>
      {/* i use emulator i phone x and safearea didnt work */}
      <Navigation />
    </SafeAreaProvider>
  )
}
export default App;