import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import {colors} from '../../utils/colors'

export default class Button extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.any
  }
  render() {
    const {onPress, style} = this.props
    return (
      <TouchableOpacity onPress={onPress} style={[styles.wrapper, style]}
      activeOpacity={.6}
      >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    height: 48,
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.greenLight,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
