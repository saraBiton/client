// // import react from 'react';
// // // import distance from 'react-native-distance';

// // async function calculateDistance() {
// //     try {
// //         const res = await distance({
// //             units: 'imperial',
// //             origins: 'Washington, DC',
// //             destinations: 'New + York + City, NY',
// //             key: 'AIzaSyBs28fQD8-yiY6leR2cAXSv9CGl5Sm4eVQ',
// //         });

// //         console.log(res);
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// // export default calculateDistance;
// ///
// // var distance = require('google-distance');

// // distance.get(
// //   {
// //     origin: '-7.841879,110.409193',
// //     destination: '-7.741194,110.342588'
// //   },
// //   function(err, data) {
// //     if (err) return console.log(err);
// //     console.log(data);
// // });

// // Calculate Distance Between Two Locations in React Native App
// // https://aboutreact.com/react-native-calculate-distance-between-two-locations/
// //////////////////
// // // import React in our code
// // import React from 'react';

// // // import all the components we are going to use
// // import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, } from 'react-native';

// // /*
// //  * 1. getDistance, Calculates the distance between 
// //  *    two geo coordinates.
// //  * 2. getPreciseDistance, Calculates the distance between
// //  *    two geo coordinates. This method is more accurate then
// //  *    getDistance, especially for long distances but it is
// //  *    also slower. It is using the Vincenty inverse formula
// //  *    for ellipsoids.
// //  */

// // import { getDistance, getPreciseDistance } from 'geolib';

// // const AppDist = () => {
// //     const calculateDistance = () => {
// //         var dis = getDistance(
// //             { latitude: 20.0504188, longitude: 64.4139099 },
// //             { latitude: 51.528308, longitude: -0.3817765 },
// //         );
// //         alert(
// //             `Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`
// //         );
// //     };

// //     const calculatePreciseDistance = () => {
// //         var pdis = getPreciseDistance(
// //             { latitude: 20.0504188, longitude: 64.4139099 },
// //             { latitude: 51.528308, longitude: -0.3817765 },
// //         );
// //         alert(
// //             `Precise Distance\n\n${pdis} Meter\nOR\n${pdis / 1000} KM`
// //         );
// //     };

// //     return (
// //         <SafeAreaView style={{ flex: 1 }}>
// //             <View style={styles.container}>
// //                 <View style={styles.container}>
// //                     <Text style={styles.header}>
// //                         Example to Calculate Distance Between Two Locations
// //                     </Text>
// //                     <Text style={styles.textStyle}>
// //                         Distance between
// //                         {'\n'}
// //                         India(20.0504188, 64.4139099)
// //                         and
// //                         UK (51.528308, -0.3817765)
// //                     </Text>
// //                     <TouchableHighlight
// //                         style={styles.buttonStyle}
// //                         onPress={calculateDistance}>
// //                         <Text>Get Distance</Text>
// //                     </TouchableHighlight>
// //                     <Text style={styles.textStyle}>
// //                         Precise Distance between
// //                         {'\n'}
// //                         India(20.0504188, 64.4139099)
// //                         and
// //                         UK (51.528308, -0.3817765)
// //                     </Text>
// //                     <TouchableHighlight
// //                         style={styles.buttonStyle}
// //                         onPress={calculatePreciseDistance}>
// //                         <Text>
// //                             Get Precise Distance
// //                         </Text>
// //                     </TouchableHighlight>
// //                 </View>
// //             </View>
// //         </SafeAreaView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: 'white',
// //         padding: 10,
// //         justifyContent: 'center',
// //     },
// //     header: {
// //         fontSize: 22,
// //         fontWeight: '600',
// //         color: 'black',
// //         textAlign: 'center',
// //         paddingVertical: 20,
// //     },
// //     textStyle: {
// //         marginTop: 30,
// //         fontSize: 16,
// //         textAlign: 'center',
// //         color: 'black',
// //         paddingVertical: 20,
// //     },
// //     buttonStyle: {
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         height: 50,
// //         backgroundColor: '#dddddd',
// //         margin: 10,
// //     },
// // });

// // export default AppDist;
// //לוקח את המיקום
// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';

// import { PermissionsAndroid, Platform } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// async function getDriverLocation() {
//     if (Platform.OS === 'android') {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             {
//                 title: 'Location Permission',
//                 message: 'App needs access to your location.',
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             Geolocation.getCurrentPosition(
//                 position => {
//                     const { latitude, longitude } = position.coords;
//                     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//                 },
//                 error => {
//                     console.log(error.message);
//                 },
//                 { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//             );
//         } else {
//             console.log('Location permission denied.');
//         }
//     }
// }
