import React, { PureComponent } from 'react'
import { Text, View, ScrollView, StatusBar, StyleSheet, TextInput } from "react-native"
import {colors} from '../../utils/colors'

export default class FeedbackScreen extends PureComponent {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>意见反馈</Text>
          <Text style={styles.description}>请您提出对我们的意见和建议</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <TextInput
            style={styles.textarea} 
            placeholder="输入意见反馈"
            multiline
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  titleWrapper: {
    paddingLeft: 24,
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 20,
    backgroundColor: colors.WHITE
  },
  title: {
    fontSize: 32,
    fontWeight: "700"
  },
  description: {
    color: colors.grey4,
    marginTop: 10
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  textarea: {
    width: "100%",
    height: 200,
    backgroundColor: colors.grey5,
    borderRadius: 8,
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 20
  }
});
