import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {TabView, PagerScroll, SceneMap, TabBar} from 'react-native-tab-view'
import colors from '../utils/colors'
import First from '../contains/First'
import Second from '../contains/Second'

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '首汽约车'
  })
  state = {
    index: 0,
    routes: [
      {key: 'first', title: '约车'},
      {key: 'second', title: '接机'},
      {key: 'first1', title: '约车'},
      {key: 'second1', title: '接机'},
      {key: 'first2', title: '约车'},
      {key: 'second2', title: '接机'},
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>hello home!!!</Text>
        <TabView 
          navigationState={this.state}
          renderScene={
            SceneMap({
              first: First,
              second: Second,
              first1: First,
              second1: Second,
              first2: First,
              second2: Second
            })
          }
          onIndexChange={index => this.setState({ index })}
          renderPager={props => <PagerScroll {...props} />}
          renderTabBar={props => 
            <TabBar 
            {...props}
            style={{
              backgroundColor: 'transparent',
              color: '#444'
            }}
            labelStyle={{color: '#444'}}
            indicatorStyle={{backgroundColor: '#444'}}
            />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  }
})

export default HomeScreen
