import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';

export default function App() {
  return (
    <View>
      <Text>Run Down Royale</Text>
      <StatusBar style="auto" />
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
      }}
  />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
