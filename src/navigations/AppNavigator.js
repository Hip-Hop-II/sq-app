import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import StrokeScreen from '../screens/user/StrokeScreen'
import SettingScreen from '../screens/user/SettingScreen'
import LogoutScreen from '../screens/user/LogoutScreen'
import LoginScreen from '../screens/user/LoginScreen'

export default App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  User: {
    getScreen: () => require('../screens/UserScreen').default
  },
  Stroke: {
    screen: StrokeScreen
  },
  Setting: {
    screen: SettingScreen
  },
  Login: {
    screen: LoginScreen
  },
  Logout: {
    screen: LogoutScreen
  }
}, {
  initialRouteName: 'Home'
})
