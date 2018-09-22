import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import  store  from './store';
import { Provider } from 'react-redux';

import SignUpContainer from './client/src/signUp/container';
import LoginContainer from './client/src/login/container';
import DashboardContainer from './client/src/dashboard/container';
import CreateProductContainer from './client/src/createProduct/container';


const AppRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/signUp' component={SignUpContainer} />
                    <Route exact path='/' component={LoginContainer} />
                    <Route exact path='/dashboard' component={DashboardContainer} />
                    <Route exact path='/create-product' component={CreateProductContainer} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoutes