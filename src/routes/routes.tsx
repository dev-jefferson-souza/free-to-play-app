import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GamePage } from '../screens/GamePage/GamePage';
import { Home } from '../screens/Home/Home';
import { Welcome } from '../screens/Welcome/Welcome';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="GamePage" component={GamePage} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}