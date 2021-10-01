
import React from 'react';
import { StyleSheet, Text, View,Button, Image } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>

      <View style={{flex:1.5, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'pink',}}>
          <Text style={{fontSize:64,fontFamily:'Serif', color:'white'}}>
              About Us
          </Text>

      </View>

      <View style={{flex:1.5, backgroundColor:'white', flexDirection:'column'}}>
          <Text style={{fontSize:32,padding:10 }}>Mission </Text>
          <Text style= {{fontSize:20,fontStyle:'italic',fontFamily:'Arial',textAlign:'center'}}>"Lifestyle is a personal training app created to improve health and fitness journey by focusing on physical, mental, and social well-being. Lifestyle offers variety of challenging yet achievable programs that you can do anywhere and anytime at home or gym. Connect with lifestyle community to get the motivation and remain accountable with virtual challenges and feel supported by like-minded people around the world. In addition, you can also achieve fitness goals with mindful eating, personalized diets, and meal plans. The diet plan is created by dieticians and nutritionists to help anyone to reach their goal. Also practice mindfulness through several programs designed to help reduce daily stress."  </Text>
        </View>
      <View style={{flex:1, backgroundColor:'white', flexDirection:'column'}}>
        <Text style={{fontSize:32,padding:10 }}>Programs </Text>
        <View style={{flex:1, fontFamily:'Serif', backgroundColor:'white', flexDirection:'row',justifyContent:'space-around'}}>
          <Button title="Exercise and Workouts" color= "pink"/>
          <Button title="Food and Nutrition" color= "pink"/>
          <Button title="Calm and Mindfulness" color= "pink"/>
          </View>
        </View>


      <View style={{flex:4,flexDirection:'row', padding:20}}>
        <View style={{flex:1, flexDirection:'row'}}>
        <Image
        style={{width:"30%"}}
        source={{uri:'https://www.planetfitness.com/sites/default/files/feature-image/youngwomanrunnerrunningo_647694.jpg'}}/>

        <View style={{backgroundColor:'white',width:'5%'}}/>

        <Image
        style={{width:"30%"}}
        source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-buddha-bowl-lunch-with-grilled-chicken-royalty-free-image-920931456-1541086908.jpg'}}/>
     <View style={{backgroundColor:'white',width:'5%'}}/>
     <Image
     style={{width:"30%"}}
     source={{uri:'https://www.verywellmind.com/thmb/Nt6binzWvLLvn66SHNQlK9Uwz1g=/2119x1414/filters:fill(ABEAC3,1)/GettyImages-938890492-becc3fc4757849bea672f148454943f9.jpg'}}/>
          </View>
   </View>

   <View style={{flex:0.5,backgroundColor:'white',alignItems:'center'}}/>

 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
  },

});
