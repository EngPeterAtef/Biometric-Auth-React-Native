import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { FaceAuth, FingerprintAuth, Home } from "../screens";
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
    // initialRouteName="Home"
    // screenOptions={{
    //   headerStyle: {
    //     borderBottomEndRadius: 30,
    //     height: 100,
    //     borderBottomStartRadius: 30,
    //   },
    //   headerTitleStyle: {
    //     fontSize: 30,
    //     fontWeight: 'bold',
    //     padding: 10,
    //     textAlign: 'center',
    //   },
    //   headerBackgroundContainerStyle: {
    //     backgroundColor: 'black',
    //   },

    // }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Face Auth"
        component={FaceAuth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fingerprint Auth"
        component={FingerprintAuth}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
