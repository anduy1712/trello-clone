import Task from 'components/Task/Task';
import React from 'react';

const Column = ({ column }) => {
  return (
    <div className='column'>
      <div className='column-header'>{column.title}</div>
      <ul className='column-list'>
        <Task />
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      </ul>
      <div className='column-footer'>Duy An</div>
    </div>
  );
};

export default Column;
