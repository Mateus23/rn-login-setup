import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './SignUp';

const NoAuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

export default NoAuthNavigator;