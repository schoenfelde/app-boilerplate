import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Login';
import Home from '../Home';
import Welcome from '../Welcome';

const unauthorizedStack =  createStackNavigator(
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

const authorizedStack =  createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home"
            }
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
)

export const AuthenticatedNavigation = createAppContainer(authorizedStack)
export const UnauthenticatedNavigation =  createAppContainer(unauthorizedStack);
const Navigator = ({ user }:any) => user ? UnauthenticatedNavigation : AuthenticatedNavigation