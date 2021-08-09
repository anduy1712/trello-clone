import Column from 'components/Column/Column';
import React, { useEffect, useState } from 'react';
import { initData } from 'actions/initData';
import { isEmpty } from 'lodash';
import { mapOrder } from 'utilities/sort';
import { Container, Draggable } from 'react-smooth-dnd';
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
    console.log(dropResult);
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
              <Column column={item} />
            </Draggable>
          );
        })}
      </Container>
    </div>
  );
};

export default AppContent;
