import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import Button from '../../components/buttons/Button'
import { colors } from '../../utils/colors'


export default class SigninScreen extends PureComponent {
  constructor(props) {
    super(props)
    state = {
      userPhone: '',
      userCode: ''
    }
  }
  render() {
    return (<View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>验证码登录</Text>
        <Text style={styles.subTitle}>欢迎登录首汽约车</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.textStyle}>+86 > </Text>
        <TextInput ref="inputLoginName"
                   autoFocus={true}
                   underlineColorAndroid="gray"
                   placeholder="请输入手机号"
                   clearTextOnFocus={true}
                   clearButtonMode="while-editing"
                   style={{flex: 1}}
                   onChangeText={(input) => this.setState({userPhone: input})}>

        </TextInput>
      </View>
      <View style={styles.item}>
        <TextInput ref="inputLoginPwd"
                   underlineColorAndroid="gray"
                   placeholder="请输入短信码"
                   clearTextOnFocus={true}
                   clearButtonMode="while-editing"
                   style={{flex: 1}}
                   onChangeText={(input) => this.setState({userCode: input})}>

        </TextInput>
        <Button underlayColor='transparent'
                onPress={()=>this.getCode()}>
          <Text style={styles.loginText}>获取验证码</Text>
        </Button>
      </View>
      <Button style={styles.login}
              underlayColor='transparent'
              onPress={()=>this.loginInMainpage()}>
        <Text style={styles.loginText}>登录</Text>
      </Button>
    </View>)
  }
  getCode() {
    alert('验证码是:1234' )
  }
  /**
   * 登录进入主页面
   */
  loginInMainpage() {
    this.refs.inputLoginName.blur()
    this.refs.inputLoginPwd.blur()
    // this.props.navigation.navigate()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    color: colors.GRAY2,
  },
  subTitle: {
    fontSize: 18,
    color: colors.GRAY3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'top',
    margin: 10
  },
  textStyle: {
    fontSize: 18,
    color: colors.GRAY2,
    marginRight: 10
  },
  login: {
    height: 40,
    backgroundColor: colors.greenLight,
    margin: 20,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.WHITE
  }
})