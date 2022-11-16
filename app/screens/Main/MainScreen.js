import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
//import SignInScreen from './src/screens/SignInScreen';

const MainScreen = () => {
  console.log("App Executed")
  return (
    <SafeAreaView style={styles.container}>
      <Text>Below is a list of Live Bait and their Availability</Text>
      <Text>Live Shrimp</Text>

      <SafeAreaView style={styles.row}>
        <Image source={require('./app/assets/LiveShrimp.jpeg')} />
        <Button title="Available"/>
      </SafeAreaView>

      <Text>Live Croaker</Text>
      <SafeAreaView>
        <Image source={require('./app/assets/LiveCroaker.jpg')} /> 
        <Button title="Available"/>
      </SafeAreaView>

      <Text>Live Crab</Text>
      <SafeAreaView>
        <Image source={require('./app/assets/LiveCrab.jpg')} />
        <Button title="Available"/>
      </SafeAreaView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Grows and fits to entire screen. 1 = 100%
    //backgroundColor: 'darkolivegreen', 
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  bigText: {

  },
});

export default MainScreen