
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 7,
    borderRadius: 10,
    elevation: 3,
  },

  foto: {
    width: 85,
    height: 100,
    borderRadius: 8,
    resizeMode: "cover",
  },

  informacoes: {
    flex: 1,
    marginLeft: 15,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 8,
  },

  detalhes: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 5,
  },
});
