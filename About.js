import React from 'react';
import { StyleSheet, Text, View,Button, Image,ScrollView } from 'react-native';

const image1 = {uri:'https://www.planetfitness.com/sites/default/files/feature-image/youngwomanrunnerrunningo_647694.jpg',
                width: 200,
                height:200,
}
const image2 = {uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-buddha-bowl-lunch-with-grilled-chicken-royalty-free-image-920931456-1541086908.jpg',
                width: 200,
                height:200,
}
const image3 = {uri:'https://www.verywellmind.com/thmb/Nt6binzWvLLvn66SHNQlK9Uwz1g=/2119x1414/filters:fill(ABEAC3,1)/GettyImages-938890492-becc3fc4757849bea672f148454943f9.jpg',
                width: 200,
                height:200,
}

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={{flex:1, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'pink',}}>
          <Text style={{fontSize:36,fontFamily:'Al Nile', color:'white'}}>
              About Us
          </Text>

      </View>

      <View style={{flex:1.5, backgroundColor:'white', flexDirection:'column'}}>
          <Text style={{fontSize:24,padding:10 }}>Mission </Text>
          <Text style= {{fontSize:16,fontStyle:'italic',fontFamily:'Arial',textAlign:'center'}}>"Lifestyle is a personal training app created to improve health and fitness journey. by focusing on physical, mental, and social well-being."  </Text>
        </View>
      <View style={{flex:1, backgroundColor:'white', flexDirection:'column'}}>
        <Text style={{fontSize:24,padding:10 }}>Programs </Text>
        <View style={{flex:1, fontFamily:'Al Nile', backgroundColor:'white', flexDirection:'column',justifyContent:'space-around'}}>
          <Button title="Workouts" color= "pink"/>
          <Image
          style={{width:"100%",justifyContent:'center',alignItems:'center'}}
          source={image1}/>
          <Button title="Nutrition" color= "pink"/>
          <Image
          style={{width:"100%",justifyContent:'center',alignItems:'center'}}
          source={image2}/>
          <Button title="Mindfulness" color= "pink"/>
          <Image
          style={{width:"100%",justifyContent:'center',alignItems:'center'}}
          source={image3}/>
          </View>
        </View>

        </View>
 </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'stretch',
    //justifyContent: 'stretch',
    flexDirection:'column',
  },

});
