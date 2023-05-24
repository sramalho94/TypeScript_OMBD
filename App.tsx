import React from 'react';
import {StatusBar} from 'react-native/types';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View className="flex-row justify-center">
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
