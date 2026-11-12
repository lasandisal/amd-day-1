import {View, Text} from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import {Tabs} from "expo-router"

const DashboardLayout = () => {
  return(
     <Tabs screenOptions={{
        headerShown: true, 
      }}>
    <Tabs.Screen name="home" options={{
      title: 'home',
      tabBarIcon: ({color, size, focused}) => {
        return <MaterialIcons 
        name={focused ? 'home' : 'home-filled'}
        size={size}
        color={color}
        />
      }
    }}/>
    <Tabs.Screen name="news" options={{
      title: 'news',
      tabBarIcon: ({color, size, focused}) => {
        return <MaterialIcons 
        name={focused ? 'article' : 'home-outlined' as any}
        size={size}
        color={color}
        />
      }
    }}/>
    <Tabs.Screen name="profile" options={{
      title: 'profile',
      tabBarIcon: ({color, size, focused}) => {
        return <MaterialIcons 
        name={focused ? 'person' : 'person-outline'}
        size={size}
        color={color}
        />
      }
    }}/>
  </Tabs>
  )
}

export default DashboardLayout;