import { LOG_IN, LOG_OUT } from '../../actions/auth';

export default function auth(state:any = {}, action:any) {
    switch(action.type) {
        case LOG_IN:
            const { token, email, name, photo } = action.value;
            return {
                ...state,
                token,
                user: {
                    email,
                    name,
                    photo
                }
            }
        case LOG_OUT:
            return {
                ...state,
                token: undefined,
                user: undefined
            }
        default: 
            return state;
    }
}