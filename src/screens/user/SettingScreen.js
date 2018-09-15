import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'
import {Container, Content, List, ListItem, Icon, Left, Right, Text, Body, Button} from 'native-base'
import colors from '../../utils/colors'

class SettingScreen extends Component {
  static navigationOptions = {
    title: '设置'
  }
  render() {
    return (
      <Container>
        <Content>
        <List>
            <ListItem >
              <Body>
                <Text>常用地址</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
              <Body>
                <Text>乘车喜好</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
              <Body>
                <Text>黑名单</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
            </ListItem>    
            <ListItem >
              <Body>
                <Text>联系我们</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
              <Body>
                <Text>用户条款</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
            </ListItem>    
            <ListItem button onPress={() => this.props.navigation.navigate('Logout')}>
              <Body>
                <Text>注销账号</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            </List>
            <Button full danger style={styles.signupButton}>
              <Text>退出登录</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  signupButton: {
    marginTop: 40
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: colors.GRAY1
  }
})

export default SettingScreen
