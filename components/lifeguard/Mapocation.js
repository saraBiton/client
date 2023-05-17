import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const MapComponent = () => {
  useEffect(() => {
    const runScript = `
       // The location of Uluru
  const position1 = { lat: -25.344, lng: 131.031 };
  const position2 = { lat: -20.244, lng: 130.951 }; // Additional location (uluru)

  // Request needed libraries.
  //@ts-ignore
  const { Map } = async() => await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = async() => await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position1,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker1 = new AdvancedMarkerElement({
    map: map,
    position: position1,
    title: "Uluru",
  });

  // Additional marker, positioned at uluru
  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: position2,
    title: "Uluru 2",
  });
}
    `;

    return () => {
      // Clean up any resources or listeners if needed
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>My Google Maps Demo</Text>
      <WebView
        source={{ uri: 'https://path/to/your/html/file.html' }}
        injectedJavaScript={runScript}
        javaScriptEnabled={true}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MapComponent;
