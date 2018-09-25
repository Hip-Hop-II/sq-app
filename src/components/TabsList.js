import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, UIManager, findNodeHandle } from 'react-native'
import TabItem from './TabItem'
import {colors} from '../utils/colors'

const tabbarWidth = 30

export default class TabsList extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: 0,
      tabBarLeft: 0
    }
    this.tabs = React.createRef()
  }

  componentDidMount () {
    console.log(this.tabs);
    UIManager.measure(findNodeHandle(this.tabs.current.props.children[0][0]),(x,y,width,height,pageX,pageY)=>{
      //todo
    })
  }
  itemLayout = (item = {}) => {
    console.log(item)
    if (item.width) {
      this.setState({
        tabBarLeft: this.calcTabBarLeft(item)
      })
    }
  }

  calcTabBarLeft = item => {
    return item.width / 2 + item.x - tabbarWidth / 2;
  }

  render() {
    const {tabs} = this.props
    return (
      <View style={styles.wrapper} ref={this.tabs} >
        {tabs.map((item, index) => (
          <TabItem {...item} key={index} ref="tabItem" 
          onLayout={this.itemLayout}
          />
        ))}
        <View style={[styles.tabBar, {left: this.state.tabBarLeft}]}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 13,
    backgroundColor: colors.WHITE,
    position: 'relative'
  },
  tabBar: {
    position: 'absolute',
    width: tabbarWidth,
    height: 2,
    backgroundColor: colors.redLight,
    borderRadius: 1,
    bottom: 0
  }
});
