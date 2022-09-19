import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
//BLOCK TEXT EXPO LOCATION
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
//BLOCK TEXT EXPO LOCATION

return (
    <View style={styles.container}>
      <Text>Run Down Royale</Text>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: 39.5933,
          longitude: -74.2190,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}


//add user coordinates to array every x seconds *******



//arrays to hold user location coordinates
const userLat = [];
const userLon = [];

/* printing to see coordinate arrays every 10 seconds
useEffect(() => {
  const interval = setInterval(() => {
    console.log(userCoordinates);
  }, 10000);

  return () => clearInterval(interval);
}, []);
*/

//console.log(userCoordinates);


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

