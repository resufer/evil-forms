import React from 'react';


function Position() {
  return (
    <div className='position'>
      <select size='1' required>
        <option disabled selected>Select your position</option>
        <option>HR Specialist</option>
        <option>Junior FrontEnd</option>
        <option>Junior BackEnd</option>
        <option>Middle FrontEnd</option>
        <option>Middle BackEnd</option>
        <option>Senior FrontEnd</option>
        <option>Senior BackEnd</option>
      </select>
    </div>
  )
};

export default Position;
