import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignUpContainer from './client/src/signUp/container';
import { store } from './store';
import { Provider } from 'react-redux';


const AppRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={SignUpContainer} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoutes