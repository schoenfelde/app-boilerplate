import { connect } from 'react-redux';

export const withUser = (wrappedComponent:any) => connect((state:any) => ({user: state.auth.user}))(wrappedComponent)
export const withAuth = (wrappedComponent:any) => connect((state:any) => ({isAuthenticated: !!state.auth.token, token: state.auth.token }))(wrappedComponent)