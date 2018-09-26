import React, { PureComponent } from 'react'
import { Text, View, ScrollView, TouchableOpacity, StatusBar, StyleSheet, TextInput } from "react-native"
import { colors } from '../../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import {launchImage} from '../../Api/ImagePicker'

const MAX_LENGTH = 200

export default class FeedbackScreen extends PureComponent {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0
    }
  }
  state = {
    message: ''
  }
  uploadOnPress = async () => {
    try {
      const result = await launchImage()
      console.log(result)
    } catch (error) {
      
    }
  }
  get _maxLength() {
    return MAX_LENGTH - this.state.message.length
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
            <View style={styles.textareaWrapper}>
              <TextInput
                style={styles.textarea}
                placeholder="输入意见反馈"
                multiline
                selectionColor={colors.redLigter}
                maxLength={MAX_LENGTH}
                onChangeText={message => this.setState({ message })}
              />
              <View style={styles.limitWrapper}>
                <Text style={styles.limitText} >还可以输入</Text>
                <Text style={[styles.limitText, { marginHorizontal: 2 }]} >{this._maxLength}</Text>
                <Text style={styles.limitText} >字</Text>
              </View>
            </View>
            <View style={styles.uploadImageWrapper}>
              <View style={styles.uploadImageHeader}>
                <Text style={[styles.uploadHeaderText, { marginRight: 6 }]}>上传相关问题的截图或照片</Text>
                <Text style={styles.uploadHeaderText}>(</Text><Text style={styles.uploadHeaderText}>1</Text><Text style={styles.uploadHeaderText}>/3)</Text>
              </View>
              <View style={styles.uploadBody}>
                <TouchableOpacity activeOpacity={.6} onPress={this.uploadOnPress}>
                  <View style={styles.uploadButtonWrapper}>
                    <Ionicons name="ios-add-circle-outline"
                      size={50} color={colors.grey4}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
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
    height: "100%",
    backgroundColor: colors.grey5,
    borderRadius: 8,
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 20,
    fontSize: 16
  },
  textareaWrapper: {
    position: 'relative',
    width: '100%',
    height: 180,
    shadowColor: colors.greenDark,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: .1,
    shadowRadius: 3
  },
  limitWrapper: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row'
  },
  limitText: {
    color: colors.grey4
  },
  uploadImageWrapper: {
    paddingTop: 20
  },
  uploadImageHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  uploadHeaderText: {
    fontSize: 18,
    color: colors.greyDark
  },
  uploadBody: {
    paddingTop: 20
  },
  uploadButtonWrapper: {
    width: 120,
    height: 120,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
