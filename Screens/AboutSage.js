import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from "react-native";
import AnimatedLinearGradient, {presetColors} from './AnimatedGradient'
class AboutSage extends Component {
  render() {
    return (
      <AnimatedLinearGradient customColors={presetColors.trans} speed={3000}>
        <View style={styles.mainView}>
          
        </View>
      </AnimatedLinearGradient>
    );
  }
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