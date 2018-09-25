import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class TabItem extends PureComponent {
  layout = e => {
    if (this.props.id === 1) {
      this.props.onLayout(e.nativeEvent.layout)
    }
  }
  render() {
    const {title, onPress} = this.props
    return (
      <TouchableOpacity style={styles.wrapper} onLayout={(e) => this.layout(e)}
      onPress={onPress}
      >
        <Text> {title} </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  }
});
