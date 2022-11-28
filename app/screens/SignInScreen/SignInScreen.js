import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from 'assets/Logo_1.png';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import SocialSignInButtons from 'components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  

  const onSignInPressed = () => {
    console.warn("Sign In");
    //validate user
    navigation.navigate('HomeScreen');
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo} 
          styles={[styles.logo, {height: height * 0.3}]} 
          resizeMode='contain' 
        />
        <CustomInput 
          placeholder="Username" 
          value={Username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder="Password" 
          value={Password} 
          setValue={setPassword}
          secureTextEntry={true} 
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot Password?" 
          onPress={onForgotPasswordPressed}
          type="TERTIARY" 
        />
        <SocialSignInButtons/>
        <CustomButton
          text="Don't have an account? Create one here" 
          onPress={onSignUpPressed}
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
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 500,
  },
})

export default SignInScreen