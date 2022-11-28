import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView,} from 'react-native';
import Navigation from 'navigation';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import config from './app/aws-exports';

Amplify.configure(config);
//Auth.signOut();
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

export default App;