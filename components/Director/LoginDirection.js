import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Director from './Director';
import { addUser } from '../Service';
import { basicUrl } from '../config';


const LoginScreen = ({ navigation }) => {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');

    const handleLogin = () => {

        const userData = {
            userName: userName,
            password: password
        };

        // טיפול בתהליך ההתחברות כאן
        console.log("userName:", userName);
        console.log("password:", password);
        addUser(basicUrl + 'users/', userData);
        console.log(basicUrl + 'users/' + userData);
        navigation.navigate('Director');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Admin login </Text>
            <TextInput
                style={styles.buttonInput}
                placeholder="שם משתמש"
                value={userName}
                onChangeText={setuserName}
            />
            <TextInput
                style={styles.buttonInput}
                placeholder="סיסמה"
                secureTextEntry={true}
                value={password}
                onChangeText={setpassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>התחבר</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    button: {
        margin: 10,
        padding: 20,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
    buttonInput: {
        margin: 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        borderRadius: 5
    },
});

export default LoginScreen;
