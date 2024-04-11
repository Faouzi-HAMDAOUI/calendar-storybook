import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import PropTypes from 'prop-types';

/**
 * 
 * un composant pour choisir une date 
 * ## Usage
 * <MyCalendar />
 */
export const MyCalendar = () => {
  const [dateState, setDateState] = useState()
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div style={{ width: "80vw", display: "grid", placeItems: "center" }}>
        <Calendar 
           value={dateState}
           onChange={changeDate}
           selectRange
           showDoubleView
         />
    <p>la date est: <b>{dateState?.toString()}</b></p>
    </div>
  );
};

MyCalendar.propTypes = {
  value: PropTypes.any,
  onchange: PropTypes.func,
  selectRange: PropTypes.bool
};

MyCalendar.defaultProps = {
  value: new Date(),
  onchange: 'handleChange',
  selectRange: true
};
