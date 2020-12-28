import React from 'react';
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, user, ...rest }) => {

    console.log(rest, 'rest');

    return (
        <Route {...rest} render={props => {
            console.log(props)
            console.log(user)
            return (
                user
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location.pathname}
                    }}/>
            )
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps)(PrivateRoute);