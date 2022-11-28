import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, Alert } from 'react-native';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import SocialSignInButtons from 'components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const [Name, setName] = useState('');
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();


  //Creating new user, protecting against multiple register presses and
  // requiring all information.
  const onRegisterPressed = async data => {
    try {
      await Auth.signUp({
        username: Username,
        password: Password,
        attributes: {email: Email, name: Name, preferred_username: Username}
      });

      navigation.navigate('ConfirmEmail', {username});
    }catch (e) {
      Alert.alert('Oops', e.message);
    }
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
          name="name"
          setValue={setName}
          placeholder="Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <CustomInput
          name="username"
          setValue={setUsername}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          setValue={setEmail}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-confirm"
          setValue={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
        />

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