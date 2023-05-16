import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import User from './components/Director/User';
import Director from './components/Director/Director';
import LoginScreen from './components/Director/LoginDirection';
import SensorActions, { AddSensor2, DeleteSensor, DeleteSensor2 } from './components/Director/Sensor_management';
import { AddSensor } from './components/Service';
import { basicUrl } from './components/config'; 
import MapComponent from './components/lifeguard/Mapocation';
import TableData from './components/table';
import GoogleMaps from './components/lifeguard/mapOfLocation';
// import MapScreen from './components/MapLocation.js'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="mappp" component={MapComponent} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="Director" component={Director} />
        <Stack.Screen name="LoginDirection" component={LoginScreen} />
        <Stack.Screen name="Sensor_management" component={SensorActions} />
        <Stack.Screen name="Adding_sensor" component={AddSensor2} />
        <Stack.Screen name="Deleting_sensor" component={DeleteSensor2} />
        <Stack.Screen name="basicUrl" component={basicUrl} />
        <Stack.Screen name="TableData" component={TableData} />
        {/* <Stack.Screen name="lifeguard" component={User} /> */}
       <Stack.Screen name="mapp" component={GoogleMaps} />
        {/* <Stack.Screen name="mapLocation" component={MapScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
