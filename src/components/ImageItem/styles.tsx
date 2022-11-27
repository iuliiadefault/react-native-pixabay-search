import { Dimensions, StyleSheet } from "react-native";

import { Colors } from "constants/colors";

const size = Dimensions.get("window").width * 0.36;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray10,
    borderRadius: 20,
    width: size,
    height: size,
    flex: 1,
    shadowColor: Colors.gray60,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    shadowOpacity: 0.2,
    marginRight: 8,
    marginBottom: 8,
    padding: 8,
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    borderRadius: 20,
    marginBottom: 8,
  },
});

export default styles;
