
import { React, useState } from 'react';

import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { basicUrl } from '../../try/config';
const {checkDriver} = require('./service');


const DriverEnter = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // כאן יכול להיות קוד לשליחת המידע לשרת ועיבודו
    const enterDriver = {
      id: id,
      password: password,
    };

    checkDriver(basicUrl+'drivers/',enterDriver);

  };

  return (
    <View style={styles.container}>
      <br></br>
      <Button title="כנס כנהג" />
      <br></br>
      <TextInput
        style={styles.input}
        placeholder="תעודת זהות"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="סיסמא"
        value={password}
        onChangeText={setPassword}
      />
      <br></br>
      <Button title="ENTER" onPress={handleSignup} />
    </View>
  );



};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // top:'25%',
    // // textAlign:'center',
    // left:'20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'hsl(124, 93%, 61%);'
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // direction:'rtl',
    textAlign: 'center',
    fontWeight: 'bold'

  },
  button: {
    width: '80px',
    height: '80px'
  },

});
export default DriverEnter;