import * as React from 'react';
import ReactDOM from 'react-dom';
import Main from '../../containers/Main';

it('renders main page component without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});
