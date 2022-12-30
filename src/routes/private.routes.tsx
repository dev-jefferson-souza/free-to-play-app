import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GamePage } from '../screens/GamePage/GamePage';
import { Home } from '../screens/Home/Home';
import React from "react"


const Stack = createStackNavigator();

export const PrivateRoute = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GamePage" component={GamePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  
}