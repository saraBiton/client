import React, { useState } from 'react';
import User from './Director/User';
import LoginScreen from './Director/LoginDirection';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapComponent from './lifeguard/Mapocation';
import GoogleMaps from './lifeguard/mapOfLocation';
function HomeScreen({navigation}) {
    const [activeButton, setActiveButton] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Welcome to SURF-IT </Text>
            <Text style={styles.subtitle}>Rental of drowning prevention equipment</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('LoginDirection')}>
                    <Text style={styles.buttonText} >Director</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('mapp')}>
                    <Text style={styles.buttonText} >map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('lifeguard')}>
                    <Text style={styles.buttonText} >
                    lifeguard
                    </Text>
                </TouchableOpacity>
            </View>
            {/* {activeButton === 'Admin' && <Text>Admin screen</Text>} */}
            {/* {activeButton === 'User' && <User />} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
        padding: 20,
        backgroundColor: 'gray',
        borderRadius: 10,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'relative',
        top: 0,
        width: '100%',
        marginTop: 10,
    }
})
export default HomeScreen;