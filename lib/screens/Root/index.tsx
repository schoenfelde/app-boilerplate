import React from 'react';
import { AuthenticatedNavigation, UnauthenticatedNavigation } from '../Navigation';
import { withUser, withAuth } from '../../util/util';
import { compose } from 'redux';

interface Props {
    isAuthenticated: Boolean
}

const Root = (props:any) => {
    console.log(props)
    return (
    props.isAuthenticated ? <AuthenticatedNavigation/> : <UnauthenticatedNavigation/>
    )
}
export default compose(
    withUser,
    withAuth
)(Root);