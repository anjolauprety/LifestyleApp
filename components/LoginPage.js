import React from 'react';
import { StyleSheet, Text, View,Button, Image, TextInput,ScrollView } from 'react-native';
const image = {uri:'https://vidafitness.com/wp-content/uploads/2017/11/2b-min-1024x683.jpeg',
              width:500,
            height:300}
// const App = () => {...}
export default function App() {
  return (
<ScrollView>
    <View style={styles.container}>

      <View style={{flex:1, backgroundColor:'white', }}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.header}>
              LIFESTYLE </Text>
          <View style = {{flex:1, flexDirection:'row'}}>
          <Text style = {{fontSize:10, color:'black'}}> Already have an account?
            <Button title="Login" color="lightgreen"/>
            </Text>
          </View>
        </View>
        </View>


      <View style={{flex:9,flexDirection:'column'}}>

         <Image
             style={{width:"70%"}}
             source={image}/>
          <View style={styles.formBox}>
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}> Select your plan </Text>
            <View style={styles.twoButtons}>
            <Button title="$20 USD billed per month" color="lightgreen" />
            <Button title="$150 USD billed per year" color="lightgreen"/>
            </View>
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}> Create an account </Text>
            <TextInput style={styles.input} placeholder="Anjola"/>
            <TextInput style={styles.input} placeholder="Uprety"/>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Password"/>

            <Button title="Sign up" color="lightgreen"/>
            <View style ={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20}}> ----------or--------- </Text>
            <Button title="Sign up with facebook" color="blue"/>
          </View>
        </View>
      </View>
      </View>
</ScrollView>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'stretch',
    //justifyContent: 'stretch',
    flexDirection:'column',
    //borderWidth:5,
    margin:'0.5%',
  },
  header: {
    flex:1,
    justifyContent:'space-between',
    fontSize:24,
    fontFamily:'Al Nile',
    //padding:25,
    color:"lightgreen",
  },
    formBox:{
    flex:1,
    flexDirection:'column',
    //alignItems: 'stretch',
    //justifyContent: 'stretch',
    backgroundColor:'white',
    width:'100%',
    //padding:20
  },
    input:{
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    color:'black',
  },
    twoButtons:{
      backgroundColor:'white',
      color: 'lightgreen',
      width:'100%',
      padding: 10,
      //alignself:'stretch',
      color:'black',
      fontWeight:'bold',
    },
});
