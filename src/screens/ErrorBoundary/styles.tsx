import { StyleSheet } from "react-native";

import { Colors } from "constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray10,
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginBottom: 30,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: Colors.gray90,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
