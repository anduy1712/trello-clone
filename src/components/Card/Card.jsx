import React from 'react';

const Task = ({ card }) => {
  return (
    <div className="column-list__item">
      {card.cover && (
        <img draggable="false" src={card.cover} alt="img_column" />
      )}
      {card.title}
    </div>
  );
};

export default Task;
