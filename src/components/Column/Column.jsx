import Card from 'components/Card/Card';
import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { mapOrder } from 'utilities/sort';
import { Dropdown } from 'react-bootstrap';
import ConfimModal from 'components/Common/ConfimModal';
import { useState } from 'react';
import { MODAL_ACTION_OPEN } from 'utilities/constants';
import { Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useRef } from 'react';
import { createNewCard, updateColumn } from 'actions/getapis';
const Column = ({ column, onCardDrop, updateColumnState, handleAddCard }) => {
  const cards = mapOrder(column.cards, column.cardOrder, '_id');
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [cardContent, setcardContent] = useState('');

  const [addCard, setAddCard] = useState(false);
  const cardRef = useRef(null);
  //Toggle column
  const toggleCard = () => {
    setAddCard(!addCard);
  };
  const inputEnter = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };
  //Update Column
  const handleTitleBlur = (e) => {
    const newColumn = {
      ...column,
      title
    };
    if (title !== column.title) {
      //Call api
      updateColumn(newColumn._id, newColumn).then((updated) => {
        //Get cards
        updated.cards = newColumn.cards;
        updateColumnState(updated);
      });
    }
  };
  //Delete Columnvb
  const deleteColumn = () => {
    const newColumn = {
      ...column,
      _destroy: true
    };
    //Call api
    updateColumn(newColumn._id, newColumn).then((updated) => {
      //Get cards
      updated.cards = newColumn.cards;
      updateColumnState(updated);
    });
  };
  //On Change Title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  //Toggle Modal
  const toggleModal = () => setShowModal(!showModal);

  //Submit Modal
  const onConFirmModal = (type) => {
    if (type === MODAL_ACTION_OPEN) {
      //
      deleteColumn();
    }
    toggleModal();
  };
  const selectAllText = (e) => {
    e.target.select();
  };
  //Add Card content
  const handleSubmitCard = () => {
    if (!cardContent) {
      cardRef.current.focus();
      return;
    }
    const newCard = {
      boardId: column.boardId,
      columnId: column._id,
      title: cardContent.trim()
    };
    //Call Api
    createNewCard(newCard).then((card) => {
      column.cards.push(card);
      column.cardOrder = column.cards.map((item) => item._id);
      handleAddCard(column);
      setcardContent('');
      toggleCard();
    });
  };
  useEffect(() => {
    setTitle(column.title);
  }, [column.title]);
  useEffect(() => {
    if (cardRef && cardRef.current) {
      cardRef.current.focus();
    }
  }, [addCard]);
  return (
    <div className="column">
      <div className="column-header column-drag-handle">
        <div className="column-header__title">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter column title..."
            className="input-edit__header"
            spellCheck={false}
            value={title}
            onClick={selectAllText}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            onKeyDown={inputEnter}
            onMouseDown={(e) => e.preventDefault()}
            // ref={columnRef}
            // onChange={(e) => setColumTitle(e.target.value)}
            // onKeyDown={(e) => e.key === 'Enter' && handleSubmitColumn()}
          />
        </div>
        <div className="column-header__dropdown">
          <Dropdown>
            <Dropdown.Toggle
              size="sm"
              id="dropdown-basic"
              className="dropdown-btn"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Add card</Dropdown.Item>
              <Dropdown.Item onClick={toggleModal}>Remove card</Dropdown.Item>
              <Dropdown.Item>Move all card in this column (beta)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="column-list">
        <Container
          groupName="col"
          onDrop={(dropResult) => onCardDrop(column._id, dropResult)}
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
        {addCard && (
          <div className="add-card">
            <Form.Control
              size="sm"
              as="textarea"
              rows="3"
              placeholder="Enter column title..."
              className="columns-new__input"
              ref={cardRef}
              value={cardContent}
              onChange={(e) => setcardContent(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmitCard()}
            />
            <Button onClick={handleSubmitCard} variant="success">
              Success
            </Button>
            <span className="cancel-icon">
              <i className="fa fa-trash icon" onClick={toggleCard} />
            </span>
          </div>
        )}
      </div>
      {!addCard && (
        <div className="column-footer">
          <div className="footer-actions" onClick={toggleCard}>
            <i className="fa fa-plus icon" />
            Add Card Item
          </div>
        </div>
      )}

      <ConfimModal
        show={showModal}
        onAction={onConFirmModal}
        title="Remove Column"
        content="Are you sure, you wanna remove column"
      />
    </div>
  );
};

export default Column;
