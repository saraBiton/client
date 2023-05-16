// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { GoogleMapsLoader } from 'react-native-maps';

// const MapScreen = () => {
//   useEffect(() => {
//     let map;
//     const position1 = { lat: -25.344, lng: 131.031 };
//     const position2 = { lat: -20.244, lng: 130.951 };

//     const initMap = async () => {
//       const { Map } = await GoogleMapsLoader.importLibrary('maps');
//       const { AdvancedMarkerElement } = await GoogleMapsLoader.importLibrary('marker');

//       map = new Map(null, {
//         zoom: 4,
//         center: position1,
//         mapId: 'MAP_ID',
//       });

//       // The marker, positioned at Uluru
//       const marker1 = new AdvancedMarkerElement({
//         map: map,
//         position: position1,
//         title: 'Uluru',
//       });

//       // Additional marker, positioned at uluru
//       const marker2 = new AdvancedMarkerElement({
//         map: map,
//         position: position2,
//         title: 'Uluru 2',
//       });
//     };

//     initMap();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.mapContainer}>
//         {/* Your map view component here */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: '100%',
//     margin: 0,
//     padding: 0,
//   },
//   mapContainer: {
//     height: '100%',
//   },
// });

// export default MapScreen;
