import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button, Alert, TouchableHighlight, Image } from 'react-native';

export class FlexboxExamples extends Component {

  render(){
    return (
      <View style={[ styles.container ]}>
        <View style = {[ styles.box, { flex: 1 } ]}>
          <View style = {[ styles.circle ]}>
            <Image
              source={require('./sky.png')}
              style={{ flex: 1, width: null, height: null, borderRadius: 90 }}
              resizeMode='cover'
            />
          </View>
          <Text style = {[ styles.text ]}>Name Here</Text>
        </View>
        <View style = {[ styles.box, { flex: 1.4 } ]}>
        </View>
        <View style = {[ styles.box, { flex: 0.6, flexDirection: 'row' } ]}>
          <TouchableHighlight
            style = {[ styles.button, { flex: 1 } ]}
            onPress = {() => Alert.alert('hi')}>
            <Text style = {[ styles.buttonText ]}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style = {[ styles.button, { flex: 1 } ]}
            onPress = {() => Alert.alert('hi')}>
            <Text style = {[ styles.buttonText ]}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box: {
    alignItems: 'center',
    height: 50,
  },
<<<<<<< HEAD
  ////On 1/29/2020: https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
=======
>>>>>>> 6e42eac8a9cb0261003753c5d96ac3d9b3a2b769
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 20,
    backgroundColor: 'red'
  },
  text: {
    color: '#100812',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  button: {
    alignContent: 'space-around',
    margin: 30,
  },
  buttonText: {
    backgroundColor: '#4169E1',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 8,
    textAlign:'center'
  },
});

export default FlexboxExamples;
AppRegistry.registerComponent('FlexboxExamples', () => FlexboxExamples);
