import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/* tslint:disable:no-string-literal */
// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const enchancers = compose(
    composeEnhancers(applyMiddleware(thunk))
);

const store: Store = createStore(reducers, {}, enchancers);

(window as any).store = store;

export default store;
