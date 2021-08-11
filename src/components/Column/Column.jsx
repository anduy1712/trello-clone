import Card from 'components/Card/Card';
import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { mapOrder } from 'utilities/sort';

const Column = ({ column, onCardDrop }) => {
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  return (
    <div className="column">
      <div className="column-header column-drag-handle">{column.title}</div>
      <div className="column-list">
        <Container
          groupName="col"
          onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
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
      <div className="column-footer">
        <div className="footer-actions">
          <i className="fa fa-plus icon" /> Add Card
        </div>
      </div>
    </div>
  );
};

export default Column;
