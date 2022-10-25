import React,{Component} from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking, showMessage, Button, View, SafeAreaView, Text, Alert, ScrollView } from "react-native";
import AnimatedLinearGradient, {presetColors} from './AnimatedGradient'
class Homepage extends Component {
  render() {
    const showMessage = () => {
 
      Alert.alert('Report bug reports to Brabo#3844 on discord!');
   
    }
    return (
      <AnimatedLinearGradient customColors={presetColors.rainbow} speed={4000}>
       <View style={styles.mainView}>
        </View>
        <View style={styles.TopView}>
        <Image
        style={styles.ImageStyle}
        source={require('../assets/images/Sage_Logo_Final2-1.png')}
        />
        </View>
        <View style={styles.BottomView}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Events')} style={styles.button}>
            <Text style={styles.buttonText}>Event Dates</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('AboutSage')} style={styles.button}>
            <Text style={styles.buttonText}>About SAGE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showMessage} style={styles.button}>
            <Text style={styles.buttonText}>App Credits</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showMessage} style={styles.button}>
            <Text style={styles.buttonText}>Bug Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              Linking.openURL('https://discord.gg/WY5cK8wqW5');
            }} >
          <Image source={require('../assets/images/discordlogo.png')} resizeMode='contain' style={{width: 60, height: 60}} />
          </TouchableOpacity>
        </View> 
      </AnimatedLinearGradient>
      
    );
  }
}


const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%'
  },
  mainView:{
    marginTop:20,
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    color:'blue' 
  },
  TopView:{
    width:'100%',
    height:'40%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  BottomView:{
    width:'100%',
    height:'60%',
    flexDirection: 'column',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  ImageStyle:{
    width:'60%',
    resizeMode:'contain'
  },
  button:{
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },
  buttonText:{
    color: 'white'
  }
});
export default Homepage;