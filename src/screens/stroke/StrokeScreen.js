import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Title,
  Header,
  Button,
  Icon
} from 'native-base'
import TabsList from '../../components/TabsList'

const TABS = [
  {
    title: '专车行程',
    id: 1
  },
  {
    title: '出租车行程',
    id: 2
  },
  {
    title: '短租行程',
    id: 3
  }
]

class StrokeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '我的行程',
    headerStyle: {
      borderBottomWidth: 0
    }
  })
  render() {
    return (
      <View style={styles.wrapper}>
        <TabsList tabs={TABS} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default StrokeScreen
