import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';


const HomeScreen = () => {
  console.log("App Executed")
  return (
    <Text>Home Sweet Home</Text>
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

export default HomeScreen