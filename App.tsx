import React from 'react';

import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View className="flex-row justify-center">
          <Text className="text-red-600">Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
