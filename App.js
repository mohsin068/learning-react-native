import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <>
      <View style={styles.main}>
        <Text>HELLOsss WORLD !!</Text>
      </View>
      <View style={{backgroundColor: 'purple'}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}>
          HELLOsss WORLD !!
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'yellow',
    flex: 1
  },
});

export default App;
