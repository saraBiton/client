
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { start_ws_client } from './ws-client';


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

    const icons = {
      OK: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      ALERT: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
      SOS: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    };

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
          <Marker
            key={marker.id}
            position={marker.position}
            icon={icons[marker.status]}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default MarkerMap;

