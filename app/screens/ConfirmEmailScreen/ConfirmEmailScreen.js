import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, } from 'react-native';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import {useNavigation} from '@react-navigation/core';

const ConfirmEmailScreen = () => {
  const [Code, setCode] = useState('');
  const [email, setEmail] = useState('');

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
        <Text style={styles.title}>Confirm Your Email</Text> 

        <CustomInput 
          placeholder="Enter your confirmation code" 
          value={Code} 
          setValue={setCode} 
        />
        <CustomInput 
          placeholder="Email" 
          value={email} 
          setValue={setEmail} 
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code" 
          onPress={onSignInPressed}
          type="SECONDARY" 
        />
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

export default ConfirmEmailScreen