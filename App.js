import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native'
import Python from './screens/Python'
import Basics from './screens/Basics'
import Profile from './screens/Profile'
import JavaScript from './screens/JavaScript'
import Learn from './screens/Learn'
import Pythonadv from './screens/Pythonadv'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './navigations/TabNavigator'
import DrawerNavigator from './navigations/DrawerNavigator'
export default class App extends React.Component{
  render(){
    return(
      
   <NavigationContainer>
     <DrawerNavigator/>
    </NavigationContainer>
  
      
    )
  }
}
