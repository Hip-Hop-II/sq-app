import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '首汽约车'
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>hello home!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeScreen
