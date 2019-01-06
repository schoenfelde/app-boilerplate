import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Login';
import Welcome from '../Welcome';

const stackNavigator =  createStackNavigator(
    {
        LogIn: {
            screen: Login,
            navigationOptions: {
                title: "Login"
            }
        },
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                title: "Welcome"
            }
        }
    },
    {
        initialRouteName: 'Welcome',
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
)

export default createAppContainer(stackNavigator);