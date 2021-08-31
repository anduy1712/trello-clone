import Column from 'components/Column/Column';
import React, { useEffect, useState } from 'react';
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
import { getFullBoards, createNewColumn } from 'actions/getapis';
const AppContent = () => {
  const [board, setBoard] = useState();
  const [columns, setColumn] = useState();
  const [columTitle, setColumTitle] = useState('');
  const columnRef = useRef(null);
  const [addCol, setAddCol] = useState(false);

  //Toggle column
  const toggleColumn = () => {
    setAddCol(!addCol);
  };
  useEffect(() => {
    getFullBoards('6125c9c7582dc9648753c7e1').then((boards) => {
      setBoard(boards);
      //Sort
      setColumn(mapOrder(boards.columns, boards.columnOrder, '_id'));
    });
    // if (data) {
    // }
  }, []);
  useEffect(() => {
    if (columnRef && columnRef.current) {
      columnRef.current.focus();
    }
  }, [addCol]);

  const onColumnDrop = (dropResult) => {
    //Get data from state
    let newColumns = [...columns];
    let newBoard = board;
    //Sort Array
    newColumns = applyDrag(newColumns, dropResult);
    newBoard.columnOrder = newColumns.map((c) => c._id);
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
      let currentColumn = newColumn.find((item) => item._id === id);
      //Sort Card Order, Cards by Drop
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((item) => item._id);
      // Set New Column
      setColumn(newColumn);
    }
  };

  //Add Column
  const handleSubmitColumn = () => {
    if (!columTitle) {
      columnRef.current.focus();
      return;
    }
    const newColumn = {
      boardId: board._id,
      title: columTitle
    };
    //Call Api
    createNewColumn(newColumn).then((column) => {
      const columnCurrent = [...columns];
      const boardCurrent = board;

      columnCurrent.push(column);
      boardCurrent.columnOrder = columnCurrent.map((item) => item._id);
      boardCurrent.columns = columnCurrent.map((item) => item);

      setColumn(columnCurrent);
      setBoard(boardCurrent);
      setColumTitle('');
    });
  };
  //Update Column
  const handleUpdateColumn = (obj) => {
    const idObj = obj._id;
    //copy data from state
    const data = [...columns];
    //get id
    const idColumn = data.findIndex((i) => i._id === idObj);
    //handle edit or remove
    if (obj._destroy) {
      //remove
      data.splice(idColumn, 1);
    } else {
      //edit
      data.splice(idColumn, 1, obj);
    }
    const boardCurrent = board;
    boardCurrent.columnOrder = data.map((item) => item._id);
    boardCurrent.columns = data.map((item) => item);
    setColumn(data);
    setBoard(boardCurrent);
  };
  //Add cart
  const handleUpdateCard = (obj) => {
    const idObj = obj._id;
    //copy data from state
    const data = [...columns];
    //get id
    const idColumn = data.findIndex((i) => i._id === idObj);
    //handle edit or remove
    if (obj._destroy) {
      //remove
      // data.splice(idColumn, 1);
    } else {
      //edit
      data.splice(idColumn, 1, obj);
    }
    const boardCurrent = board;
    boardCurrent.columnOrder = data.map((item) => item._id);
    boardCurrent.columns = data.map((item) => item);
    setColumn(data);
    setBoard(boardCurrent);
  };
  if (isEmpty(board) || isEmpty(columns)) {
    return <div>Data is found</div>;
  }
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
              <Column
                column={item}
                onCardDrop={onCardDrop}
                updateColumnState={handleUpdateColumn}
                handleAddCard={handleUpdateCard}
              />
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
              <span className="cancel-icon">
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
