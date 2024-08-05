import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from "expo-router";

const ExploreScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Explore Screen</Text>
      <Button
        title="Go to Index"
        onPress={() => navigation.navigate('index')}
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

export default ExploreScreen;
