import Column from 'components/Column/Column';
import React, { useEffect, useState } from 'react';
import { initData } from 'actions/initData';
import { isEmpty } from 'lodash';
import { mapOrder } from 'utilities/sort';
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
  return (
    <div className='board-columns'>
      {columns.map((item, index) => {
        return <Column key={index} column={item} />;
      })}
    </div>
  );
};

export default AppContent;
