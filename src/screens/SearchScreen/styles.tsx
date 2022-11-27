import { StyleSheet } from "react-native";

import { Colors } from "constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray10,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 24,
    backgroundColor: Colors.gray10,
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: Colors.gray10,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray50,
    marginBottom: 20,
  },
  column: {
    paddingLeft: 20,
    paddingRight: 12,
  },
  emptyContainer: {
    paddingHorizontal: 20,
  },
});

export default styles;
