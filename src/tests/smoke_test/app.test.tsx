import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Main from '../../containers/Main';
import Banner from '../../containers/Banner';
import Footer from '../../containers/Footer';
import Area from '../../containers/Area';
import store from '../../store';
import Graphic from '../../containers/Graphic/Graphic';

const ReduxProvider = ({ children, reduxStore }: any) => (
  <Provider store={reduxStore}>{children}</Provider>
);

it('renders main page component without crashing', (): void => {
  const wrapper = ({ children }: any) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );
  const div = document.createElement('div');
  ReactDOM.render(wrapper(<Main />), div);
});
it('renders banner component without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner />, div);
});
it('renders footer component without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});
it('renders Area component without crashing', (): void => {
  const wrapper = ({ children }: any) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );
  const div = document.createElement('div');
  ReactDOM.render(wrapper(<Area />), div);
});
it('renders Graphic component without crashing', (): void => {
  const wrapper = ({ children }: any) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );
  const div = document.createElement('div');
  ReactDOM.render(wrapper(<Graphic />), div);
});
