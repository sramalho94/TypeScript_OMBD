import React from 'react';
import {StatusBar} from 'react-native/types';
import {ScrollView, SafeAreaView, Head} from 'react-native/types';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </SafeAreaView>
  );
}

export default App;
