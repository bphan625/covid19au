import * as React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({ message }: { message?: string }): JSX.Element => (
  <div className='centered-container'>
    <div className='loading'>
      <Spinner
        animation='grow'
        role='status'
      />
      <span className='ml-2'>{message || 'Loading...'}</span>
    </div>
  </div>
);

export default Loading;
