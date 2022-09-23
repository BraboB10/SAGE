import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from "react-native";

const AboutSage = ()=>{
    return(
        <View style={styles.mainView}>
            <Text>About Sage</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    mainView:{
      marginTop:20,
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    },
    textStyle:{
      color:'blue' 
    }
})
export default AboutSage;