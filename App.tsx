import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Landing Page Goes here */}
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
