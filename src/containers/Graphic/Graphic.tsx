import React, { useEffect } from 'react';
import Confirmed from '../../components/Confirmed';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCovidAction} from '../../actions/covidAction';
import { IRootState } from '../../types/commonTypes';
import Recovered from '../../components/Recovered';

function Graphic() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidAction());
  }, [dispatch]);

  const covidData = useSelector((state: IRootState) => state.Covid);
  return <div className='flex-center-container'>
    {
      covidData.isFetchingCovid ? <Loading /> : <Confirmed />
    }
    {
      covidData.isFetchingCovid ? <Loading /> : <Recovered />
    }
  </div>;
}

export default Graphic;
