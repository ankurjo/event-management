import { v4 as uuidv4 } from 'uuid';
import { openNotification } from './openNotification';

export function eventReducer(state, action) {
  const [eventName, description, venue, price, discount] = action.payload || '';

  switch (action.type) {
    case 'ADD_EVENT':
      openNotification('bottomLeft', 'Event added');
      state.push({ eventName, description, venue, price, discount, key: uuidv4(), completed: 'false', });
      break;
    case 'DELETE_EVENT':
      openNotification('bottomLeft', 'Event deleted');
      return state.filter((item) => item.key !== action.payload);
    default:
      openNotification('bottomLeft', 'An error has occured!');
      throw new Error();
  }
}
