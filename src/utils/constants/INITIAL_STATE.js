import { v4 as uuidv4 } from 'uuid';

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: 'First Event',
    eventName: 'First Event',
    date: '2020-08-14',
    completed: 'false',
    dataIndex: 0,
  },
];
