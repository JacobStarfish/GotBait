import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, ScrollView, useWindowDimensions } from 'react-native';
import LiveCrab from 'assets/LiveCrab.jpg';
import LiveCroaker from 'assets/LiveCroaker.jpg';
import LiveShrimp from 'assets/LiveShrimp.jpeg';


const HomeScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <ScrollView>
      <Text style={styles.headerText}>Below is a list of Live Bait and their Availability</Text>

      <Text>Live Shrimp</Text>
      <Image
        source={LiveShrimp}
        styles={{height: height * 0.3}}
        resizeMode='contain'
      />
      <Text style={styles.availableText}>Available</Text>

      <Text>Live Croaker</Text>
      <Image
        source={LiveCroaker}
        styles={{height: height * 0.3}}
        resizeMode='contain'
      />
      <Text style={styles.availableText}>Available</Text>

      <Text>Live Crab</Text>
      <Image
        source={LiveCrab}
        styles={{height: height * 0.3}}
        resizeMode='contain'
      />
      <Text style={styles.availableText}>Available</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 15
  },
  availableText: {
    color: 'blue',
    position: 'relative',
    bottom: 50,
    left: 200,
    fontSize: 16
  }
});

export default HomeScreen