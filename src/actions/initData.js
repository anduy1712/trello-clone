export const initData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'Title of column 1',
          cardOrder: [
            'card-1',
            'card-2',
            'card-3',
            'card-4',
            'card-5',
            'card-6',
            'card-7'
          ],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover:
                'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/06-16283046456521086662298.jpeg'
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 3',
              cover: null
            },
            {
              id: 'card-4',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 4',
              cover: null
            },
            {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 5',
              cover: null
            },
            {
              id: 'card-6',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 6',
              cover: null
            },
            {
              id: 'card-7',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 7',
              cover: null
            }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Title of column 2',
          cardOrder: ['card-1', 'card-2', 'card-3'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 1',
              cover: null
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 3',
              cover: null
            }
          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Title of column 3',
          cardOrder: ['card-1', 'card-2', 'card-3'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 1',
              cover: null
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 3',
              cover: null
            }
          ]
        }
      ]
    }
  ]
};
