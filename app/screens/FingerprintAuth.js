import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as LocalAuthentication from "expo-local-authentication";

export default function FingerprintAuth({ navigation }) {
  const [isModalVisibleSucess, setModalSucessVisible] = useState(false);
  const [isModalVisibleFailure, setModalFailureVisible] = useState(false);
  const toggleModalSucess = () => {
    setModalSucessVisible(!isModalVisibleSucess);
  };

  const toggleModalFailure = () => {
    setModalFailureVisible(!isModalVisibleFailure);
  };

  const handleFingerprintAuth = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible) {
      let biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if (!biometricRecords) {
        alert("Biometrics not setup");
        return;
      }
      let result = await LocalAuthentication.authenticateAsync();
      if (result.success) {
        toggleModalSucess();
      } else {
        toggleModalFailure();
      }
    }
  };

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
        <Text style={styles.appBarTitle}>Fingerprint Authentication</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTitleView}>
          <Text style={styles.contentTitle}>Fingerprint Authentication</Text>
        </View>
        <View style={styles.contentSubTitleView}>
          <Text style={styles.contentSubTitle}>
            Please verify your fingerprint to continue
          </Text>
        </View>
        <View style={styles.fingerprintAuthView}>
          <TouchableOpacity onPress={handleFingerprintAuth}>
            <Entypo name="fingerprint" size={100} color="#1D5B8C" />
          </TouchableOpacity>
        </View>
        <View style={styles.fingerprintAuthBtnView}>
          <TouchableOpacity onPress={handleFingerprintAuth}>
            <View style={styles.fingerprintAuthBtn}>
              <Text style={styles.fingerprintAuthBtnText}>Verify</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={isModalVisibleSucess} style={styles.mainModel}>
        <View style={styles.successContent}>
          <FontAwesome5 name="laugh" size={100} color="white" />
          <Text style={styles.popupTitle}>Success</Text>
          <Text style={styles.popupSubTitle}>Authentication Verified</Text>
          <View style={styles.sucessBtnView}>
            <TouchableOpacity
              onPress={() => {
                toggleModalSucess();
              }}
            >
              <Text style={styles.successBtnText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={isModalVisibleFailure} style={styles.mainModel}>
        <View style={styles.failureContent}>
          <Ionicons name="sad-outline" size={100} color="white" />
          <Text style={styles.popupTitle}>Failure</Text>
          <Text style={styles.popupSubTitle}>Please try again later</Text>
          <View style={styles.failureBtnView}>
            <TouchableOpacity onPress={toggleModalFailure}>
              <Text style={styles.failureBtnText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  mainModel: {
    justifyContent: "center",
    alignItems: "center",
  },
  popupTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  popupSubTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  failureContent: {
    backgroundColor: "#D50000",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    width: "95%",
  },
  failureBtnView: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 5,
    width: "95%",
    marginVertical: 10,
  },
  failureBtnText: {
    color: "#D50000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  successContent: {
    backgroundColor: "#00C853",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    width: "95%",
  },
  sucessBtnView: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 5,
    width: "95%",
    marginVertical: 10,
  },
  successBtnText: {
    color: "#00C853",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  contentTitleView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  contentTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1D5B8C",
  },
  contentSubTitleView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  contentSubTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D5B8C",
  },
  fingerprintAuthView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  fingerprintAuthBtnView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  fingerprintAuthBtn: {
    backgroundColor: "#1D5B8C",
    borderRadius: 30,
    paddingVertical: 5,
    width: 110,
    marginVertical: 10,
  },
  fingerprintAuthBtnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
