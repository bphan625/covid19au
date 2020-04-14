import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Main from './containers/Main';
import About from './containers/About';
import {Provider} from 'react-redux';

const AppRouter = ({ store }: any) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact={true} path='/' component={Main} />
                    <Route path='/about' component={About}/>
                </Switch>
            </Router>
        </Provider>
    );
};

export default AppRouter;
