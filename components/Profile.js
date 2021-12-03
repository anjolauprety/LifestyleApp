import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, Image, Platform, ScrollView,View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import {ReactDOM} from 'react-dom';

const Hello = () => {
  ReactDom.render();{
  return ( <Text> Hello Anjola </Text> )
}
}
const Profile = (props) => {
  const [info, setInfo] = useState({name:'',email:''});
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email,setEmail] = useState('');
  const [image, setImage] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setCurrentWeight] = useState('');
  const [bmi, setCurrentBMI] = useState(0);
  // when the component is loaded it gets the data from storage
  // and updatges the info, name, and email fields
  // but this is the only time useEffect is called
  useEffect(() => {getData()}
           ,[])

            useEffect(() => {
               (async () => {
                 if (Platform.OS !== 'web') {
                   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                   if (status !== 'granted') {
                    alert(<Text>'Sorry, we need camera roll permissions to make this work!'</Text>);
                   }
                 }
               })();
             }, []);
             const pickImage = async () => {
               let result = await ImagePicker.launchImageLibraryAsync({
                 mediaTypes: ImagePicker.MediaTypeOptions.All,
                 allowsEditing: true,
                 aspect: [4, 3],
                 quality: 1,
               });

               console.log(result);

               if (!result.cancelled) {
                 setImage(result.uri);
               }
             };
  // getData uses AsyncStorage to access the stored profile info as a string
  // then it uses JSON.parse to turn that string to a JSON object
  // finally it uses the set functions for the useState hook to set the
  // info, email, and name state variables.
  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@profile_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setName(data.name)
            setDob(data.dob)
            setEmail(data.email)
            setHeight(data.height)
            setCurrentWeight(data.weight)
            setCurrentBMI(data.bmi)
            setImage(data.image)

            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setDob("")
            setEmail("")
            setHeight("")
            setCurrentWeight("")
            setCurrentBMI("")
            setImage(null)
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  // storeData converts the value stored in the info variable to a string
  // which is then writes into local storage using AsyncStorage.setItem.
  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@profile_info', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  // clearAll calls AsyncStorate.clear to remove all local storage for this app
  // we could be more selective and only remove the profile_info, but for
  // debugging it is good to remove everything
  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }





      return (
          <ScrollView>
            <View style={styles.container}>

              <Text style={styles.header}>
                HELLO JK
              </Text>
              <Text> This is your profile page. You can track the progress that you've made here!! </Text>
              {image && <Image source={{ uri: image }} style={{width: 200, height: 200, borderRadius: 100 }} />}
                  <Button title="+" onPress={pickImage} />

              <TextInput
                    style={styles.textinput}
                    placeholder="Full Name"
                    onChangeText={text => {
                      setName(text)
                    }}
                    value={name}
                />
                <TextInput
                      style={styles.textinput}
                      placeholder="Date of Birth"
                      onChangeText={text => {
                        setDob(text)
                      }}
                      value={dob}
                  />
              <TextInput
                    style={styles.textinput}
                    placeholder="Email Address"
                    onChangeText={text => {setEmail(text)}}
                    value={email}
                />
                <TextInput
                      style={styles.textinput}
                      placeholder="Current Weight(kgs)"
                      onChangeText={text => {setCurrentWeight(parseFloat(text))}}
                      value={weight}
                  />
                  <TextInput
                        style={styles.textinput}
                        placeholder="Height(m)"
                        onChangeText={text => {setHeight(parseFloat(text))}}
                        value={height}
                    />
                    <Button
                          color='purple' title='Calculate BMI'
                          onPress = {() =>
                               setCurrentBMI(parseFloat(weight / (height * height))) }
                      />
                      <Text style = {{fontSize:20,fontFamily:'Al Nile'}}> Current BMI is {bmi} </Text>


              <Button
                    color='pink' title='Save Profile'
                    onPress = {() => {
                         console.log("saving profile");
                         const theInfo = {image:image, name:name,dob:dob,email:email,height:height, weight:weight,bmi:bmi}
                         console.log(`theInfo=${theInfo}`)
                         setInfo(theInfo)
                         console.log('data='+JSON.stringify(theInfo))
                         storeData(theInfo)
                       }}
                />
              <Button
                  color='grey' title='Update Information'
                  onPress = {() => {
                        console.log('clearing memory');
                        clearAll()
                      }}
                />



            </View>
            </ScrollView>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'black',
      //fontFamily: 'Al Nile'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Profile;
