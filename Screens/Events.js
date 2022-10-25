import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Button, Image, View, SafeAreaView, Text, Alert, ScrollView } from "react-native";
import AnimatedLinearGradient, {presetColors} from './AnimatedGradient'
const Seperator = () => {
  return <View style={styles.seperator} />;
};


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
    {id:1, title: "Weekly Social", description:"Our weekly meeting where we talk about stuff and play games",    date:"Every Thursday 11am-12pm", location:"Digs 223", image:"https://cdn.discordapp.com/attachments/936340397045719061/1023424896451223552/SAGE_Banner.png"}, 
    {id:2, title: "Tabling Event", description:"Hang out and learn about gay stuff and resources!",  date:"Oct 2nd - Oct 7th", location:"Digs Main Lobby", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6Css2tMRljoAoWui4SMuYLjbwEL24izJHMiO9X6e&s"} ,
    {id:3, title: "Dr. Collins Cultural Event", description:"Cultural Event", date:"Oct 6th 11am-12pm", location:"Owens G01",   image:"https://cdn.discordapp.com/attachments/936340397045719061/1023424896451223552/SAGE_Banner.png"}, 
    {id:4, title: "BIG Social", description:"Hang out with us and play games while we wrap up SAGE week!", date:"Oct 7th 12pm - 4pm", location:"Owens 223", image:"https://cdn.discordapp.com/attachments/936340397045719061/1023424896451223552/SAGE_Banner.png"}, 
    {id:5, title: "Sexuality of Color: Cultural Event", description:"NAACP and SAGE Co-organized Cultural Event!", date:"Oct 12 6:30pm - 8pm", location:"Richardson Ballroom",  image:"https://cdn.discordapp.com/attachments/936340397045719061/1023424896451223552/SAGE_Banner.png"}, 
    {id:6, title: "Culture Club Event", description:"Culture Club Mixer!",   date:"Oct 12th 7:30 pm - 9pm", location:"Digs 114",  image:"https://cdn.discordapp.com/attachments/936340397045719061/1023424896451223552/SAGE_Banner.png"}, 
  ]
    };
  }
  
  
  render() {
    return (
      <AnimatedLinearGradient customColors={presetColors.ace} speed={5000}>
         <View style={styles.container}>
          <Text style={styles.headline2}>Events may be subject to change. Check discord for more info!</Text>
          <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return(
              <View style={styles.card}>
                <Image style={styles.ImageStyle} source={{uri:item.image}} />
                <View style={styles.cardContent}>
                <View>
                <Text style={styles.headline}>{item.title}</Text>
                </View>
                
                </View>
                <Text style={styles.container1}>{'\n'} Location: {item.location} {'\n'} Date: {item.date}{'\n'}{item.description}</Text>
                </View>
            ); 
          }}/>
          </View>  
      </AnimatedLinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    mainView:{ 
      flexDirection: 'column',
      justifyContent:'center',
      width:'100%',
      height:'45%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    container:{
      flex:1,
      justifyContent:'space-between'
    },
    seperator: {
    height: 1,
    backgroundColor: "red",
    marginVertical: 1,
  },
  cardContent: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    //overlay efect
    flex: 1,
    height: 150,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
    headline: {
      textAlign: 'center', // <-- the magic
      fontWeight: 'bold',
      justifyContent:'center',
      flexDirection: 'column',
      fontSize: 18,
      marginTop:10,
      width: '100%',
      alignItems:'center',
      borderRadius:5,
      backgroundColor: 'black',
      color: 'white',
    },
    headline2: {
      textAlign: 'center', // <-- the magic
      fontWeight: 'bold',
      justifyContent:'center',
      flexDirection: 'column',
      fontSize: 18,
      width: '100%',
      alignItems:'center',
      borderRadius:5,
      backgroundColor: 'black',
      color: 'white',
    },
    textStyle:{
      color:'blue' 
    },
    card:{
      margin: 1,
      borderRadius: 2,
      borderWidth: 1,
      height: 350,
      borderBottomColor: 'black',
      borderBottomWidth: 5,
      borderTopWidth: 0,
      borderLeftWidth:0,
      borderRightWidth:0,
      flexDirection:'column',
      
      alignItems:'center',
    },
    container1:{
      textAlign: 'center',
      fontWeight: 'bold',
      width:'80%',
      height:'30%',
      justifyContent:'space-evenly',
      alignItems:'center',
      backgroundColor: "black",
      borderRadius: 40,
      marginTop:20,
      color: 'white',
    },
    BottomView:{
      width:'100%',
      height:'60%',
      flexDirection: 'column',
      justifyContent:'space-evenly',
      alignItems:'center'
    },
    ImageStyle:{
      marginTop:60,
      width: 300,
      height: 100,
      borderRadius: 40,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "black"
    },
    ImageStyle2:{
      width: 300,
      height: 100,
      borderRadius: 40,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "black"
    },
    button:{
      backgroundColor: "black",
      padding: 10,
      borderRadius: 10,
    },
    buttonText:{
      color: 'white'
    }
  });
export default Events;


