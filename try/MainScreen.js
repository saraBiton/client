import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen2 from '../components/HomeScreen';


const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.jpn')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Easy Ride </Text>
      <Button title="לכניסה" onPress={() => navigation.navigate('MainScreen2')}/>
      <br/>
      <Button title="למנהל" onPress={() => alert('ברוכים הבאים')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainScreen;