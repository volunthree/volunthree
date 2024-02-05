import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

// TODO: Once the volunteer collection is initalized, we can use the data from the collection to populate the calendar.
const BigEventCalendar = () => (
  <div style={{ height: 700 }}>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ borderRadius: '5px' }}
    />
  </div>
);

export default BigEventCalendar;
