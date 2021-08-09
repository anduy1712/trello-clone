import Card from 'components/Card/Card';
import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { mapOrder } from 'utilities/sort';

const Column = ({ column }) => {
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  const onCardDrop = (dropResult) => {
    console.log(dropResult);
  };
  return (
    <div className="column">
      <div className="column-header column-drag-handle">{column.title}</div>
      <div className="column-list">
        <Container
          groupName="col"
          onDrop={onCardDrop}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => {
            return (
              <Draggable key={index}>
                <Card card={card} />{' '}
              </Draggable>
            );
          })}
        </Container>
      </div>
      <div className="column-footer">Duy An</div>
    </div>
  );
};

export default Column;
