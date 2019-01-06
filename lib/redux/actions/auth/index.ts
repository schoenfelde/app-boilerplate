import { Google } from 'expo'
import environment from '../../../util/environment';
export const LOG_IN = 'LOGIN'
export const LOG_OUT = 'LOGOUT'

export function logIn() {
    return async (dispatch: Function) => {
        const response = await Google.logInAsync({ iosClientId: environment.GOOGLE_CLIENT_ID })
        if (response.type === 'success') {
            const user = {
                token: response.idToken,
                email: response.user.email,
                name: response.user.name,
                photo: response.user.photoUrl
            }
            dispatch({ type: LOG_IN, value: user })
        }
        else {
            console.log('Log in Failed', response);
        }
    }
}

export const logOut = () =>  ({ type: LOG_OUT })
