import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import App from './App'
import AddUserdata from './AddUserdata'
import UpdateUserdata from './UpdateUserdata'

const Stack = createStackNavigator();

export class Home extends Component {
    render() {
        return (
                <NavigationContainer>
                    <Stack.Navigator> 
                        <Stack.Screen name="App" component={App}/>
                        <Stack.Screen name="AddUserdata" component={AddUserdata}/>
                        <Stack.Screen name="UpdateUserdata" component={UpdateUserdata}/>
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default Home