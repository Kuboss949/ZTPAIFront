import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppBar from '../components/AppBar.js';
import {InputBox, SelectBox, Checkbox} from '../components/InputBox.js';
import "../css/Reservation.css";

const sessionNames = ['Sesja na dzień mamy', 'Sesja świąteczna']


const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected date:",date.getDay(), date.getMonth(), date.getFullYear());
  };

  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date()
 }

 const handleHourClick = (hour) => {
  setSelectedHour(hour);
  console.log("Selected hour:", hour);
  };

  return (
    <div>
      <AppBar />
      <div id="main-section">
        <div className='sub-section'>
          <h2>Twoje dane</h2>
          <SelectBox label="Rodzaj sesji" name="session-type" options={sessionNames}/>
          <Checkbox label="Rezerwacja bez rejestracji" name="anonymous" />
          <InputBox label="Imię" name="name"/>
          <InputBox label="Nazwisko" name="surname"/>
          <InputBox label="Nr Telefonu" name="phone-number"/>
        </div>
        <div className='sub-section'>
          <h2>Data</h2>
          <Calendar
          className='om-calendar'
          next2Label={null}
          prev2Label={null}
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={tileDisabled}
          />
        </div>
        <div className='sub-section'>
          <h2>Godzina</h2>
          <button
            className={selectedHour === "10:00" ? 'hour-button clicked-button' : 'hour-button'}
            onClick={() => handleHourClick("10:00")}
          >
            10:00
          </button>
          <button
            className={selectedHour === "11:00" ? 'hour-button clicked-button' : 'hour-button'}
            onClick={() => handleHourClick("11:00")}
          >
            11:00
          </button>
          <button
            className={selectedHour === "12:00" ? 'hour-button clicked-button' : 'hour-button'}
            onClick={() => handleHourClick("12:00")}
          >
            12:00
          </button>
          <button
            className={selectedHour === "13:00" ? 'hour-button clicked-button' : 'hour-button'}
            onClick={() => handleHourClick("13:00")}
          >
            13:00
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Reservation;