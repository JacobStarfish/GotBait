import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, } from 'react-native';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import {useNavigation} from '@react-navigation/core';


const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Set New Password</Text> 

        <CustomInput 
          placeholder="Enter your Confirmation Code" 
          value={code} 
          setValue={setCode} 
        />
        <CustomInput 
          placeholder="Enter your New Password" 
          value={newPassword} 
          setValue={setNewPassword} 
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />

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

export default NewPasswordScreen