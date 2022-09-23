import React, { useEffect, useState } from 'react';
import { StatusBar, Animated, StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from "react-native";
import Homepage from './Screens/Homepage';
import AboutSage from './Screens/AboutSage';
import EventDates from './Screens/EventDates';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  const changeStatusBarVisibility = () => setHidden(!hidden);
  useEffect(() => {
    SplashScreen.hide()
  },[]);
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown:false,}} />
        <Stack.Screen name="EventDates" component={EventDates} options={{headerShown:false}} />
        <Stack.Screen name="AboutSage" component={AboutSage} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
