import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, ScrollView, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import LiveCrab from 'assets/LiveCrab.jpg';
import LiveCroaker from 'assets/LiveCroaker.jpg';
import LiveShrimp from 'assets/LiveShrimp.jpeg';


const HomeScreen = () => {
  const { height } = useWindowDimensions();
  const [shrimpAvailable, setShrimpAvailable] = useState(true);
  const [croakerAvailable, setCroakerAvailable] = useState(true);
  const [crabAvailable, setCrabAvailable] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Below is a list of Live Bait and their Availability</Text>

      <Text>Live Shrimp</Text>
      <TouchableWithoutFeedback onPress={() => setShrimpAvailable(!shrimpAvailable)}>
        <Image
          source={LiveShrimp}
          styles={{height: height * 0.3}}
          resizeMode='contain'
          />
      </TouchableWithoutFeedback>
      <Text style={shrimpAvailable ? styles.availableText : styles.unAvailableText}>
        {shrimpAvailable ? 'Available' : 'Unavailable'}
      </Text>

      <Text>Live Croaker</Text>
      <TouchableWithoutFeedback onPress={() => setCroakerAvailable(!croakerAvailable)}>
        <Image
          source={LiveCroaker}
          styles={{height: height * 0.3}}
          resizeMode='contain'
          />
      </TouchableWithoutFeedback>
      <Text style={croakerAvailable ? styles.availableText : styles.unAvailableText}>
        {croakerAvailable ? 'Available' : 'Unavailable'}
      </Text>

      <Text>Live Crab</Text>
      <TouchableWithoutFeedback onPress={() => setCrabAvailable(!crabAvailable)}>
        <Image
          source={LiveCrab}
          styles={{height: height * 0.3}}
          resizeMode='contain'
          />
      </TouchableWithoutFeedback>
      <Text style={crabAvailable ? styles.availableText : styles.unAvailableText}>
        {crabAvailable ? 'Available' : 'Unavailable'}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'olive'
  },
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
  },
  unAvailableText: {
    color: 'red',
    position: 'relative',
    bottom: 50,
    left: 200,
    fontSize: 16
  }
});

export default HomeScreen