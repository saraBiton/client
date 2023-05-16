// // //פה יש את הקוד של הצגת מפה והפעלת החיישנים
// // //פונקציה להפעלת החיישן
// // // initMap()
// // // {
// // //פה מקבלים חיישנים חדשים מהקומפוננטה של ההשכרה
// // //מוסיפים את החיישן למערך החיישנים המושכרים בזמן אמת
// // //ואז שולחים לפונקציה שיש בה לולאה אינסופית שעוברת כל הזמן על מערך החיישנים 
// // //ומפעילה את הפונקציה GETINFORMATION בשרת

// // // פונקציית צביעת המיקום של החיישן במפה בצבע כתום:
// // function colorMarker(marker) {
// //   marker.setIcon({
// //     url: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
// //     scaledSize: new window.google.maps.Size(30, 30),
// //   });
// // }

// // // }
// // //הצגת מפה 
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';
// import { GoogleMap, useJsApiLoader, Marker, Data } from '@react-google-maps/api';
// import { getAll } from '../Service';
// import { basicUrl } from '../config';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mapContainer: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mapView: {
//     width: '100%',
//     height: '80%',
//     marginTop: 20,
//   },
// });

// function GoogleMaps() {
//   const containerStyle = {
//     width: '70%',
//     height: 600,
//   };
//   const [markers, setMarkers] = useState();

//   //המיקום הראשוני
//   const [center, setCenter] = useState({ lat: 31.783473514693445, lng: 34.65195130527602 });
//   const [status, setStatus] = useState(true);
//   const [map, setMap] = useState(14);


// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBs28fQD8-yiY6leR2cAXSv9CGl5Sm4eVQ&libraries=geometry"></script>

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyBs28fQD8-yiY6leR2cAXSv9CGl5Sm4eVQ',
//   });
//   useEffect(() => {
//     const initSensor = async () => {
//       const { data: initialMarkers } = await getAll(basicUrl);
//       console.log("marks", initialMarkers)
//       setMarkers(initialMarkers);
//       console.log("marks", markers);
//     //   + 'sensor'
//     }
//     initSensor();

//     if (map) {
//       //const bounds = new window.google.maps.LatLngBounds(center)
//     let center= new google.maps.LatLng(currentLatitude, currentLongitude)

//       console.log(center);
//       map.fitBounds(bounds);
//     }

//     return () => {

//     }
//   }, [map, center])
//   useEffect(async() => {
//     const initialMarkers = await getAll(basicUrl+'sensor');
//     setMarkers(initialMarkers);
//     console.log("marks",markers);

//     if (map) {
//       const bounds = new window.google.maps.LatLngBounds(center);
//       map.fitBounds(bounds);
//     }
//   }, [map, center]);

//   const getLocation = () => {
//     if (!navigator.geolocation) {
//       setStatus('Geolocation is not supported by your browser');
//     } else {
//       setStatus('Locating...');
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setStatus(null);
//           setCenter({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         () => {
//           setStatus('Unable to retrieve your location');
//         }
//       );
//     }
//   };
//   const onMapLoad = (map) => {
//     setMap(map);
//   };
//   const onMapUnmount = () => {
//     setMap(null);
//   };

// //   const onMapLoad = (map) => {
// //     setMap(map);
// //   };

// //   const onMapUnmount = () => {
// //     setMap(null);
// //   };

//   const onMapClick = (event) => {
//     const newMarkers = [...markers];
//     newMarkers.push({
//       position: {
//         lat: event.latLng.lat(),
//         lng: event.latLng.lng(),
//       },
//       key: Date.now(),
//       icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
//     });
//     console.log("lat=" + event.latLng.lat() + "lng=" + event.latLng.lng());
//     setMarkers(newMarkers);
//   };
//   return (
//     <div>
//       <View style={styles.container}>
//         <View style={styles.mapContainer}>
//           <Button title="Get Location" onPress={getLocation} />
//           <View style={styles.mapView}>
//             {isLoaded ? (
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={12}
//                 onLoad={onMapLoad}
//                 onUnmount={onMapUnmount}
//               //onClick={onMapClick}
//               >
//                 {markers.map((marker) => (
//                   <Marker
//                     key={marker.key}
//                     position={marker.position}
//                     icon={{
//                       url: marker.icon,
//                       scaledSize: new window.google.maps.Size(30, 30),
//                     }}
//                   />
//                 ))}
//               </GoogleMap>
//             ) : (
//               <Text>Loading...</Text>
//             )}
//           </View>
//         </View>
//       </View>
//     </div>
//   );

// }
// export default GoogleMaps;


// // https://maps.googleapis.com/maps/api/distancematrix/json
// //   ?destinations=New%20York%20City%2C%20NY
// //   &origins=Washington%2C%20DC%7CBoston
// //   &units=imperial
// //   &key=YOUR_API_KEY

// // // import React, { Component } from 'react';
// // // import { StyleSheet, View } from 'react-native';
// // // import MapView, { Marker } from 'react-native-maps';

// // // const waypoints = [
// // //   { latitude: 37.78825, longitude: -122.4324, title: 'Marker 1', description: 'This is marker 1' },
// // //   { latitude: 37.7749, longitude: -122.4194, title: 'Marker 2', description: 'This is marker 2' },
// // //   { latitude: 37.7894, longitude: -122.4088, title: 'Marker 3', description: 'This is marker 3' },
// // // ];

// // // export default class App extends Component {
// // //   renderMarkers() {
// // //     return waypoints.map((waypoint, index) => (
// // //       <Marker
// // //         key={index}
// // //         coordinate={{ latitude: waypoint.latitude, longitude: waypoint.longitude }}
// // //         title={waypoint.title}
// // //         description={waypoint.description}
// // //       />
// // //     ));
// // //   }

// // //   render() {
// // //     return (
// // //       <View style={styles.container}>
// // //         <MapView
// // //           style={styles.map}
// // //           initialRegion={{
// // //             latitude: 37.78825,
// // //             longitude: -122.4324,
// // //             latitudeDelta: 0.0922,
// // //             longitudeDelta: 0.0421,
// // //           }}
// // //         >
// // //           {this.renderMarkers()}
// // //         </MapView>
// // //       </View>
// // //     );
// // //   }
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     justifyContent: 'flex-end',
// // //     alignItems: 'center',
// // //   },
// // //   map: {
// // //     ...StyleSheet.absoluteFillObject,
// // //   },
// // // });

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { start_ws_client } from './ws-client';
import { getAll } from '../Service';
import { basicUrl } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    width: '100%',
    height: '80%',
    marginTop: 20,
  },
});

function GoogleMaps() {
  const containerStyle = {
    width: '70%',
    height: 600,
  };
  const [markers, setMarkers] = useState([
    { id: 122, position: { lat: 31.790245, lng: 34.625496 } },
    { id: 123, position: { lat: 31.790783, lng: 34.625731 } }

  ]);

  const [center, setCenter] = useState({ lat: 31.783473514693445, lng: 34.65195130527602 });
  const [status, setStatus] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBs28fQD8-yiY6leR2cAXSv9CGl5Sm4eVQ',
  });

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/client-ws");
    ws.onopen = () => ws.send("start");

    ws.onmessage = (m) => {
      const sensor_list = JSON.parse(m.data)
      console.log(sensor_list);
      debugger
      setMarkers(sensor_list);
      markers
    };

    return () => { ws.close() }
  }, []);


  const getLocation = () => {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus(null);
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setStatus('Unable to retrieve your location');
      }
    );
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onMapUnmount = () => {
    setMap(null);
  };

  /*   const onMapClick = (event) => {
      const newMarkers = [
        ...markers,
        {
          position: {
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
          },
          key: Date.now(),
          icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        },
      ];
      //setMarkers(newMarkers);
    }; */

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Button title="Get Location" onPress={getLocation} />
        <View style={styles.mapView}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              onLoad={onMapLoad}
              onUnmount={onMapUnmount}
            /* onPress={onMapClick} */
            >
              {/* <Marker position={{lat: 31.790783, lng:34.625731}}/> */}
              {markers.map((marker) => (
                <Marker key={marker.id} position={marker.position} />
              ))}
            </GoogleMap>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </View>
  );
}

function MarkerMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBs28fQD8-yiY6leR2cAXSv9CGl5Sm4eVQ',
  });

  const containerStyle = {
    width: '70%',
    height: 600,
  };

  const center = {
    lat: 31.791001,
    lng: 34.626314,
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <View style={styles.mapView}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}>
              <Markers />
            </GoogleMap>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </View>
  );

  function Markers() {
    const [markers, setMarkers] = useState([
      { id: 122, position: { lat: 31.791001, lng: 34.626314 } },
      { id: 123, position: { lat: 31.790665, lng: 34.62589 } },
    ]);

    start_ws_client((sensor_list) => {
      setMarkers(sensor_list);
    });

    return (
      <React.Fragment>
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} />
        ))}
      </React.Fragment>
    );
  }
}

export default MarkerMap;
