import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { Container, Content, List, ListItem, Icon, Left, Right, Text, Body, Button } from 'native-base'

class UserScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Container>
        <View style={styles.header}></View>
        <Content style={styles.content}>
          <List>
            <ListItem icon>
              <Left>
                <Icon active name="plane" />
              </Left>
              <Body>
                <Text>我的钱包</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon button onPress={() => this.props.navigation.navigate('Stroke')}>
              <Left>
                <Icon active name="plane" />
              </Left>
              <Body>
                <Text>我的行程</Text>
              </Body>
              <Right>

                  <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="plane" />
              </Left>
              <Body>
                <Text>客服中心</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="plane" />
              </Left>
              <Body>
                <Text>企业服务</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="plane" />
              </Left>
              <Body>
                <Text>意见反馈</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon button onPress={() => this.props.navigation.navigate('Setting')}>
              <Left>
                <Icon active name="plane" />
              </Left>
              <Body>
                <Text>设置</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: '#000'
  },
  content: {
    flex: 1,
    paddingTop: 20
  }
})

export default UserScreen
