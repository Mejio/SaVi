import { StyleSheet } from "react-native";
import MapView, { Heatmap, UrlTile } from "react-native-maps";
import { crimeData } from "../data/crimeData";

const Map = () => {
  const initialRegion = {
    latitude: 8.4822, // Cagayan de Oro
    longitude: 124.6472,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  };

  const heatmapPoints = crimeData.map((point) => ({
    latitude: point.latitude,
    longitude: point.longitude,
    weight: point.intensity
  }));

  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      showsUserLocation={true}
      provider="google" // Required for Android, but we'll override with OSM tiles
    >
      <UrlTile
        urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maximumZ={19}
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Heatmap points={heatmapPoints} radius={50} opacity={0.7} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { width: "100%", height: 500 }
});

export default Map;