import * as React from 'react';
import covid from '../images/covid.png';

function Banner(props: any): JSX.Element {
  return (
    <div className='centered-container mb-5'>
      <img src={covid} alt='Covid-19 Banner'/>
    </div>
  )
}

export default Banner;
