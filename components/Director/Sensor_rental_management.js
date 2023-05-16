import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

//ניהול השכרת חיישנים
function SensorRentalManagement({ navigation }) {
    const [activeButton, setActiveButton] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Welcome to SURF-IT </Text>
            <Text style={styles.subtitle}>Rental of drowning prevention equipment</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Adding_tenant_sensor')}>
                    <Text style={styles.buttonText} >add user</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('sensor_return')}>
                    <Text style={styles.buttonText} >sensor return</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Showing_all_sensors')}>
                    <Text style={styles.buttonText} >
                    Showing all sensors
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default SensorRentalManagement