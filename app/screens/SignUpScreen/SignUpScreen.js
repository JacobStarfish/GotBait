import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, } from 'react-native';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import SocialSignInButtons from 'components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';

const SignUpScreen = () => {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use Pressed")
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy Pressed")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text> 

        <CustomInput 
          placeholder="Username" 
          value={Username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder="Email" 
          value={email} 
          setValue={setEmail} 
        />
        <CustomInput 
          placeholder="Password" 
          value={Password} 
          setValue={setPassword}
          secureTextEntry={true} 
        />
        <CustomInput 
          placeholder="Repeat Password" 
          value={passwordRepeat} 
          setValue={setPasswordRepeat}
          secureTextEntry={true} 
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text>
          By registering, you confirm that you accept our {''}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {''}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>
      
        
        <SocialSignInButtons/>

        <CustomButton
          text="Already have an Account? Sign In" 
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
    backgroundColor: 'olive'
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

export default SignUpScreen