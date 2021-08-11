import Column from 'components/Column/Column';
import React, { useEffect, useState } from 'react';
import { initData } from 'actions/initData';
import { isEmpty } from 'lodash';
import { mapOrder } from 'utilities/sort';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from 'utilities/drapDrop';
const AppContent = () => {
  const [board, setBoard] = useState();
  const [columns, setColumn] = useState();

  useEffect(() => {
    const data = initData.boards.find((item) => item.id === 'board-1');
    if (data) {
      setBoard(data);
      //Sort
      data.columns = mapOrder(data.columns, data.columnOrder, 'id');
      setColumn(data.columns);
    }
  }, []);
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
      <div className="columns-add">
        <i className="fa fa-plus icon" /> Add Column
      </div>
    </div>
  );
};

export default AppContent;
