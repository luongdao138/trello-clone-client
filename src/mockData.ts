import { List } from './features/list/listModel';

export const mockLists: List[] = [
  {
    _id: 'list-1',
    board: 'board-1',
    title: 'Backlog',
    cards: [
      {
        _id: 'card-1',
        title: 'Github jobs challenge',
        cover_photo:
          'https://images.unsplash.com/photo-1633204339691-9d3645430e14?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        attachment_count: 1,
        comment_count: 2,
        labels: [
          {
            color: '#ff0000',
            name: 'Technical',
          },
          {
            color: '#219653',
            name: 'Design',
          },
        ],
        members: [
          {
            _id: 'mem-1',
            username: 'luongdao',
            avatar:
              'https://images.unsplash.com/photo-1605560844160-a6cc125cf046?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          },
          {
            _id: 'mem-2',
            username: 'duongmap',
            avatar:
              'https://images.unsplash.com/photo-1633193330550-40f5138f7c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          },
          {
            _id: 'mem-3',
            username: 'duongmap',
            avatar:
              'https://images.unsplash.com/photo-1633193330550-40f5138f7c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          },
          {
            _id: 'mem-4',
            username: 'duongmap',
            avatar:
              'https://images.unsplash.com/photo-1633193330550-40f5138f7c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          },
        ],
      },
      {
        _id: 'card-2',
        title: 'Devchallenge Card',
        attachment_count: 0,
        comment_count: 2,
        labels: [
          {
            color: '#ff0000',
            name: 'Technical',
          },
          {
            color: '#219653',
            name: 'Design',
          },
        ],
        members: [
          {
            _id: 'mem-1',
            username: 'luongdao',
            avatar:
              'https://images.unsplash.com/photo-1605560844160-a6cc125cf046?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          },
          {
            _id: 'mem-2',
            username: 'duongmap',
            avatar:
              'https://images.unsplash.com/photo-1633193330550-40f5138f7c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          },
        ],
      },

      {
        _id: 'card-3',
        title: 'Unsplash Challenge',
        attachment_count: 1,
        comment_count: 0,
        labels: [
          {
            color: '#ff0000',
            name: 'Technical',
          },
          {
            color: '#219653',
            name: 'Design',
          },
        ],
        members: [],
      },
    ],
  },
  {
    _id: 'list-2',
    board: 'board-1',
    title: 'In progress',
    cards: [
      {
        _id: 'card-4',
        title: 'Github jobs challenge',
        cover_photo:
          'https://images.unsplash.com/photo-1633204339691-9d3645430e14?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        attachment_count: 1,
        comment_count: 2,
        labels: [
          {
            color: '#ff0000',
            name: 'Technical',
          },
          {
            color: '#219653',
            name: 'Design',
          },
        ],
        members: [
          {
            _id: 'mem-1',
            username: 'luongdao',
            avatar:
              'https://images.unsplash.com/photo-1605560844160-a6cc125cf046?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          },
          {
            _id: 'mem-2',
            username: 'duongmap',
            avatar:
              'https://images.unsplash.com/photo-1633193330550-40f5138f7c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          },
        ],
      },
      {
        _id: 'card-5',
        title: 'Devchallenge Card',
        attachment_count: 0,
        comment_count: 2,
        labels: [
          {
            color: '#ff0000',
            name: 'Technical',
          },
          {
            color: '#219653',
            name: 'Design',
          },
        ],
        members: [
          {
            _id: 'mem-1',
            username: 'luongdao',
            avatar:
              'https://images.unsplash.com/photo-1605560844160-a6cc125cf046?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          },
          {
            _id: 'mem-2',
            username: 'duongmap',
            avatar:
              'https://images.unsplash.com/photo-1633193330550-40f5138f7c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          },
        ],
      },

      {
        _id: 'card-6',
        title: 'Unsplash Challenge',
        attachment_count: 1,
        comment_count: 0,
        labels: [
          {
            color: '#ff0000',
            name: 'Technical',
          },
          {
            color: '#219653',
            name: 'Design',
          },
        ],
        members: [],
      },
    ],
  },
];
