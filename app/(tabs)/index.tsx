import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from "expo-router";

const IndexScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Index Screen</Text>
      <Button
        title="Go to Explore"
        onPress={() => navigation.navigate('explore')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default IndexScreen;
