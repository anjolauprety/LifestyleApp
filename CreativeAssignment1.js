import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button,Image, SafeAreaView } from 'react-native';

import AboutScreen from './About'
import LoginPageScreen from './LoginPage'
import ProfileScreen from './Profile'

const Stack = createNativeStackNavigator();

const MyStack = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'LIFESTYLE' }}
        />


        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="SignUp" component={LoginPageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
      <View style= {styles.container}>
      <View style={{ flex:1,
                     flexDirection: 'row',


                     padding:'10px',
                     justifyContent:'space-between'
                      }}>


      <Text style = {{fontSize:46, color: 'lightgreen',fontFamily:'Coldiac'}}> LIFESTYLE </Text>

      <View style={{flexDirection:'row',justifyContent:'flex-end',color:"green",fontFamily:'Kenfolg'}}>
        <Button
            title="About"
            color="lightgreen"
          onPress={() =>
            navigation.navigate('About')
          }
        />
        <Button
            title="Sign Up"
            color="lightgreen"
          onPress={() =>
            navigation.navigate('SignUp')
          }
        />
        <Button
            title="Profile"
            color="lightgreen"
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
          
        </View>
        </View>
    <View style = {{flex:12, flexDirection:'row',}}>

    <Image style={{width:"70%", height:'500'}}
           source={{uri:'https://www.stay-trained.com/wp-content/uploads/2018/04/Supplement-Fitness.jpg'}}/>
    <View style={{justifyContent:'center'}}>
   <Text style={{fontSize:50, fontFamily:'Serif',fontStyle:'Italic', fontWeight:'bold', marginBottom:10, textAlign:'center'}}> "Start everyday by {'\n'} thinking of your why." </Text>
   </View>
   </View>
   </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
    justifyContent:'center'

  }
})

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
       // we're using the parameter name passed in from the HomeScreen
};

export default MyStack;
