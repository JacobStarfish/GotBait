import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, } from 'react-native';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import {useNavigation} from '@react-navigation/core';


const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text> 

        <CustomInput 
          placeholder="Enter your Username" 
          value={username} 
          setValue={setUsername} 
        />
        <CustomButton text="Send" onPress={onSendPressed} />

        <CustomButton
          text="Back to Sign In" 
          onPress={onSignInPressed}
          type="TERTIARY" 
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'olive',
    height: '100%',
  },
  link:{
    color: '#FDB075'  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  }

})

export default ForgotPasswordScreen