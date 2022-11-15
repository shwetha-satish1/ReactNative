import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
//import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import SecondPage from './SecondPage'
const Separator = () => (
  <View style={styles.separator} />
);

class LoginScreen extends Component {  
  render() {  
    const App = () => (
    <SafeAreaView style={styles.container}>
     <View style={styles.container}>
        <Text>Schoolcontests</Text>
      </View>
     <View>
        <Button
          title="Sign in using Facebook"
          onPress={open={SecondPage}}></Button>
          <Text style={styles.buttonText}>Next Page</Text>
      </View>
      <Separator />
      <View>
        <Button
          title="Sign in using google"
          onPress={() => Alert.alert('Simple button pressed')}
        />
      </View>
    </SafeAreaView>
    );
  }
}
class SecondPage extends Component{
  render(){
    <Text>New</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;