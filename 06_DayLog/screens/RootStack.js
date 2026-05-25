import React from "react";
import { createBottomTabNavigator, createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

function RootStack() {
  return (
    <stack.Navigator>
        <stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }}/>
        <stack.Screen name="Write" component={WriteScreen} options={{ headerShown: false }} />
    </stack.Navigator>
  );
}

export default RootStack;