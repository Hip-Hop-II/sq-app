import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Second extends Component {
  render() {
    return (
      <View>
        <Text>hello Second</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Second
