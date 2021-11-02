import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button,ImageBackground,SafeAreaView} from 'react-native';

import AboutScreen from './About'
import LoginPageScreen from './LoginPage'
import ProfileScreen from './Profile'
const Stack = createNativeStackNavigator();
const image = { uri:"https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/shutterstock_151938761.jpg?itok=YZlOdXuX&timestamp=1417110661"};
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
        <Stack.Screen name="LoginPage" component={LoginPageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
           <View style={styles.container}>

            <ImageBackground source={image} style={styles.image}>

        <Button
            title="About"
          onPress={() =>
            navigation.navigate('About')
          }
        />
        <Button
            title="Sign Up"
          onPress={() =>
            navigation.navigate('LoginPage')
          }
        />
        <Button
            title="Profile"
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
        </ImageBackground>
  </View>
  );
};
const styles = StyleSheet.create({
    container: {
    flex: 1,
      flexDirection:'column',
      justifyContent: 'center',
      //alignItems:'center',
  },
 image: {
   flex: 1,
   resizeMode: "cover",
   height:'100%',
   width:'100%',
   justifyContent: "center",
 },
})

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
//const ProfileScreen = ({ navigation, route }) => {
//  return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
       // we're using the parameter name passed in from the HomeScreen
//};

export default MyStack;

