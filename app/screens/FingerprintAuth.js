import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function FingerprintAuth({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.btnContainer}>
            <Image
              source={require("../assets/icons/chevron-left.png")}
              style={styles.btnImg(25)}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Fingerprint Auth</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7EFEE",
  },
  appBar: {
    height: 50,
    backgroundColor: "#1D5B8C",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomEndRadius: 50,
  },
  appBarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 12 / 1.25,
    tintColor: "white",
  }),
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#1D5B8C",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
