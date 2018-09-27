import React from 'react'
import AppNavigator from './src/navigations/AppNavigator'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

export default class App extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <AppNavigator />
      </ActionSheetProvider>
    )
  }
}
