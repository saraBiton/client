// // import React, { useState } from 'react';
// // import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import Director from './Director';

// // const LoginScreen = ({ navigation }) => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = () => {
// //     // טיפול בתהליך ההתחברות כאן
// //     console.log('Username:', username);
// //     console.log('Password:', password);

// //     // הפניה לדף הבא 
// //     navigation.navigate('Director');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="שם משתמש"
// //         value={username}
// //         onChangeText={setUsername}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="סיסמה"
// //         secureTextEntry={true}
// //         value={password}
// //         onChangeText={setPassword}
// //       />
// //       <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //         <Text style={styles.buttonText}>התחבר</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   input: {
// //     width: '70%',
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingLeft: 10,
// //   },
// //   button: {
// //     width: '70%',
// //     height: 40,
// //     backgroundColor: 'gray',
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   buttonText: {
// //     color: 'white',
// //     fontSize: 20,
// //   },
// // });

// // export default LoginScreen;
// import React, { useState } from 'react';
// import './style.css';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// function Director({navigation}) {
//     const [activeButton, setActiveButton] = useState(null);
//     // style={styles.buttonContainer}
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Welcome to SURF-IT </Text>
//             <Text style={styles.subtitle}>Rental of drowning prevention equipment</Text>
//             <View className="buttonContainer" >
//                 <TouchableOpacity style={styles.button}
//                     onPress={() => navigation.navigate('Sensor_management')}>
//                     <Text style={styles.buttonText} >Sensor management</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button}
//                     onPress={() => navigation.navigate('Sensor_rental_management')}>
//                     <Text style={styles.buttonText} >
//                     Sensor rental management
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         backgroundColor: '#fff',
// //     },
// //     buttonContainer: {
// //         marginTop: 30,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// //     button: {
// //         margin: 10,
// //         padding: 20,
// //         backgroundColor: 'gray',
// //         borderRadius: 10,
// //     },
// //     buttonText: {
// //         color: 'white',
// //         fontSize: 20,
// //     },
// //     text: {
// //         fontSize: 30,
// //         fontWeight: 'bold',
// //         marginBottom: 20,
// //         borderRadius: 5
// //     },
// //     title: {
// //         fontSize: 24,
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         marginTop: 50,
// //         marginBottom: 30,
// //     },
// //     subtitle: {
// //         fontSize: 20,
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         position: 'relative',
// //         top: 0,
// //         width: '100%',
// //         marginTop: 10,
// //     }
// // })
// export default Director;


// //true
// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// function Director({navigation}) {
//     const [activeButton, setActiveButton] = useState(null);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}> Welcome to SURF-IT </Text>
//             <Text style={styles.subtitle}>Rental of drowning prevention equipment</Text>
//             <View style={styles.buttonContainer}>
//                 <TouchableOpacity style={styles.button}
//                     onPress={() => navigation.navigate('Sensor_management')}>
//                     <Text style={styles.buttonText} >Sensor management</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button}
//                     onPress={() => navigation.navigate('Sensor_rental_management')}>
//                     <Text style={styles.buttonText} >
//                     Sensor rental management
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//     },
//     buttonContainer: {
//         marginTop: 30,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     button: {
//         margin: 10,
//         padding: 20,
//         backgroundColor: 'gray',
//         borderRadius: 10,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 20,
//     },
//     text: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         borderRadius: 5
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 50,
//         marginBottom: 30,
//     },
//     subtitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         position: 'relative',
//         top: 0,
//         width: '100%',
//         marginTop: 10,
//     }
// })
// export default Director;
