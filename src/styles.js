import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  subtitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5, borderColor: "#ccc" },
  button: { backgroundColor: "#007AFF", borderRadius: 5, marginVertical: 5 },
  error: { color: "red", marginBottom: 10, textAlign: "center" }
});