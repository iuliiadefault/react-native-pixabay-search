import { StyleSheet } from "react-native";

import { Colors } from "constants/colors";
import { isIOS } from "constants/general";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.gray50,
  },
  containerFocused: {
    borderColor: Colors.gray90,
  },
  input: {
    fontFamily: isIOS ? "Avenir" : "sans-serif",
    color: Colors.gray90,
    paddingHorizontal: 20,
    paddingVertical: 16,
    margin: 0,
  },
  closeButtonContainer: {
    height: "100%",
    position: "absolute",
    right: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    backgroundColor: Colors.gray30,
    width: 24,
    height: 24,
    borderRadius: 20,
  },
});

export default styles;
