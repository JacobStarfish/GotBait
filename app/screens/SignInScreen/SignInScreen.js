import React from 'react';
import { View, Text, Image, useWindowsDimensions } from 'react-native';
import Logo from './app/assets/Logo_1.png'

const SignInScreen = () => {
  return (
    <View style={stlye.root}>
      <Image source={Logo} styles={[styles.logo, {height: height * 0.3}]} 
      resizeMode='contain' />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        height: 100,
    },
})

export default SignInScreen