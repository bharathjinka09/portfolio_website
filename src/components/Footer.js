import React from 'react';
import moment from 'moment';

const Footer = () => {

  const today = new Date()

  return (
    <div className='footer'>
      <p>
        &copy; Adam | { moment(today).format('MMMM Do YYYY') }
      </p>
    </div>
  )
}

export default Footer
