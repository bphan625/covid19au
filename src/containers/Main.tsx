import * as React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Graphic from './Graphic/Graphic';
import Area from './Area';

function Main(): JSX.Element {
  return (
    <div className='max-width-container m-auto'>
      <Banner/>
      <Area />
      <Graphic/>
      <Footer/>
    </div>
  );
}
export default Main;
