import Column from 'components/Column/Column';
import React, { useEffect, useState } from 'react';
import { initData } from 'actions/initData';
import { isEmpty } from 'lodash';
import { mapOrder } from 'utilities/sort';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from 'utilities/drapDrop';
import {
  Col,
  Row,
  Container as BootStrapContainer,
  Form,
  Button
} from 'react-bootstrap';
import { useRef } from 'react';
const AppContent = () => {
  const [board, setBoard] = useState();
  const [columns, setColumn] = useState();
  const [addCol, setAddCol] = useState(false);
  const [columTitle, setColumTitle] = useState('');
  const columnRef = useRef(null);
  useEffect(() => {
    const data = initData.boards.find((item) => item.id === 'board-1');
    if (data) {
      setBoard(data);
      //Sort
      data.columns = mapOrder(data.columns, data.columnOrder, 'id');
      setColumn(data.columns);
    }
  }, []);
  useEffect(() => {
    if (columnRef && columnRef.current) {
      columnRef.current.focus();
    }
  }, [addCol]);
  if (isEmpty(board)) {
    return <div>Data is found</div>;
  }
  const onColumnDrop = (dropResult) => {
    //Get data from state
    let newColumns = [...columns];
    let newBoard = board;
    //Sort Array
    newColumns = applyDrag(newColumns, dropResult);
    newBoard.columnOrder = newColumns.map((c) => c.id);
    newBoard.columns = newColumns.map((item) => item);
    //Set State
    setColumn(newColumns);
    setBoard(newBoard);
  };
  //Loop depend Column
  const onCardDrop = (id, dropResult) => {
    if (dropResult.addedIndex !== null || dropResult.removedIndex !== null) {
      //Copy data from state
      let newColumn = [...columns];
      //Get Current Column From Column
      let currentColumn = newColumn.find((item) => item.id === id);
      //Sort Card Order, Cards by Drop
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((item) => item.id);
      // Set New Column
      setColumn(newColumn);
    }
  };
  //Toggle column
  const toggleColumn = () => {
    setAddCol(!addCol);
  };
  const handleSubmitColumn = () => {
    if (!columTitle) {
      columnRef.current.focus();
      return;
    }
    const newColumn = {
      id: Math.random().toString(32).substr(2, 5),
      boardId: board.id,
      title: columTitle,
      cardOrder: [],
      cards: []
    };
    const columnCurrent = [...columns];
    const boardCurrent = board;
    columnCurrent.push(newColumn);
    boardCurrent.columnOrder = columnCurrent.map((item) => item.id);
    boardCurrent.columns = columnCurrent.map((item) => item);
    setColumn(columnCurrent);
    setBoard(boardCurrent);
    setColumTitle('');
  };
  return (
    <div className="board-columns">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        dragHandleSelector=".column-drag-handle"
        getChildPayload={(index) => columns[index]}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'columns-drop-preview'
        }}
      >
        {columns.map((item, index) => {
          return (
            <Draggable key={index}>
              <Column column={item} onCardDrop={onCardDrop} />
            </Draggable>
          );
        })}
      </Container>

      <BootStrapContainer className="container-bs">
        {!addCol && (
          <Row onClick={toggleColumn}>
            <Col className="columns-add">
              {' '}
              <i className="fa fa-plus icon" /> Add Column
            </Col>
          </Row>
        )}
        {addCol && (
          <Row>
            <Col className="columns-new">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter column title..."
                className="columns-new__input"
                ref={columnRef}
                value={columTitle}
                onChange={(e) => setColumTitle(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmitColumn()}
              />
              <Button variant="success" onClick={handleSubmitColumn}>
                Success
              </Button>{' '}
              <span className="columns-new__icon ">
                <i className="fa fa-trash icon" onClick={toggleColumn} />
              </span>
            </Col>
          </Row>
        )}
      </BootStrapContainer>
      {/* <div className="columns-add">
        <i className="fa fa-plus icon" /> Add Column
      </div> */}
    </div>
  );
};

export default AppContent;
