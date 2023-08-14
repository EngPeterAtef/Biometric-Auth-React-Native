import {
  faCamera,
  faFingerprint,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  function appBar() {
    return (
      <View style={styles.appBarView}>
        <Text style={styles.header}>Biometric Authentication</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#1D5B8C" />
      {appBar()}

        <View
          style={{
            backgroundColor: "#1D5B8C",
            height: "100%",
            width: "100%",
          }}
        >
          <View style={styles.container}>
            <View style={styles.socialView}>
              <TouchableOpacity
                style={styles.socialBtn}
                onPress={() => navigation.navigate("Fingerprint Auth")}
              >
                <FontAwesomeIcon icon={faFingerprint} size={30} color="white" />
                <Text style={styles.socialBtnText}>Fingerprint Auth</Text>
              </TouchableOpacity>
              <View style={styles.lineSeparatorView}>
                <View style={styles.lineSeparator} />
                <Text style={styles.lineSeparatorText}>OR</Text>
                <View style={styles.lineSeparator} />
              </View>
              <TouchableOpacity
                style={styles.socialBtn}
                onPress={() => navigation.navigate("Face Auth")}
              >
                <FontAwesomeIcon icon={faIdBadge} size={30} color="white" />
                <Text style={styles.socialBtnText}>Face Auth</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D7EFEE",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 50,
  },
  socialBtn: {
    width: "80%",
    backgroundColor: "#00AE93",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  socialBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 10,
  },
  lineSeparatorView: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginTop: 10,
  },
  lineSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#124963",
  },
  lineSeparatorText: {
    color: "#124963",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 10,
  },
  appBarView: {
    backgroundColor: '#1D5B8C',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  socialView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
});

export default Home;
