import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import StrokeScreen from '../screens/user/StrokeScreen'
import SettingScreen from '../screens/user/SettingScreen'

export default App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  User: {
    screen: UserScreen
  },
  Stroke: {
    screen: StrokeScreen
  },
  Setting: {
    screen: SettingScreen
  }
}, {
  initialRouteName: 'Home'
})
