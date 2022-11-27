import { StyleSheet } from "react-native";

import { Colors } from "constants/colors";

const styles = StyleSheet.create({
  tagsContainer: {
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    marginBottom: 12,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.gray20,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
});

export default styles;
