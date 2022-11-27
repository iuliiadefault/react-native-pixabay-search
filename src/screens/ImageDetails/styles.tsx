import { StyleSheet } from "react-native";

import { Colors } from "constants/colors";

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.gray10,
  },
  container: {
    backgroundColor: Colors.gray10,
    paddingHorizontal: 20,
    paddingVertical: 24,
    justifyContent: "flex-start",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    marginBottom: 16,
    borderRadius: 20,
  },
  details: {
    backgroundColor: Colors.gray20,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray50,
  },
  lastDetailsContainer: {
    borderBottomWidth: 0,
  },
  userDetailsContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 28,
    height: 28,
    resizeMode: "cover",
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 20,
    marginRight: 8,
  },
});

export default styles;
