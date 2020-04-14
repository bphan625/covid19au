import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../types/commonTypes';
import { Dropdown } from 'react-bootstrap';
import { changeAreaAction } from '../actions/areaAction';

function Area(): JSX.Element {
  const covidData = useSelector((state: IRootState) => state.Covid);
  const currentArea = useSelector((state: IRootState) => state.Area);
  const areas = Object.keys(covidData.data);
  const dispatch = useDispatch();

  const click = (selectedValue: string): any => {
    return (event: React.MouseEvent<HTMLElement>): void => {
      dispatch(changeAreaAction(selectedValue))
    };
  };

  return (
    <div className='flex-start-container mb-5'>
      <Dropdown >
        <Dropdown.Toggle id='dropdown-basic' className='dropdown-button'>
          {currentArea.area}
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu'>
          {
            areas.map((a: string, index: number) => {
              return (
                <Dropdown.Item key={index} onClick={click(a)}>{a}</Dropdown.Item>
              )
            })
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
export default Area;
