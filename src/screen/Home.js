import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import SOSButton from "../components/SOSButton";
import Tracker from "../components/Tracker";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crime Heatmap - Cagayan de Oro</Text>
      <Map />
      <View style={styles.buttonContainer}>
        <SOSButton />
      </View>
      <View style={styles.trackerContainer}>
        <Text style={styles.subtitle}>Track Your Child</Text>
        <Tracker />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  subtitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  buttonContainer: { marginVertical: 10 },
  trackerContainer: { marginTop: 20 }
});

export default Home;