import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { tempOpportunities } from '../utilities/LocalVariables';

const localizer = momentLocalizer(moment);

// TODO: Once the volunteer collection is initalized, we can use the data from the collection to populate the calendar.
const BigEventCalendar = () => {
  const navigate = useNavigate();
  const handleSelectEvent =
        (event) => {
          navigate(`/volunteer-opportunities/${event._id}`);
        };
  return (
    <div style={{ height: 700 }}>
      <Calendar
        localizer={localizer}
        events={tempOpportunities}
        titleAccessor="name"
        startAccessor="opportunityDate"
        endAccessor="opportunityDate"
        onSelectEvent={handleSelectEvent}
        style={{ borderRadius: '5px' }}
      />
    </div>
  );
};

export default BigEventCalendar;
