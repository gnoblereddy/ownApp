import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import  store  from './store';
import { Provider } from 'react-redux';

import SignUpContainer from './client/src/signUp/container';
import LoginContainer from './client/src/login/container';


const AppRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/signUp' component={SignUpContainer} />
                    <Route exact path='/' component={LoginContainer} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoutes