import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    notifications: [],
};


const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
      addNotification: {
        reducer(state, action) {
          state.notifications.push(action.payload);
        },
        prepare(message) {
          return {
            payload: {
              id: nanoid(),
              message,
              read: false
            }
          };
        }
      },
      markAsRead(state, action) {
        const notification = state.notifications.find(n => n.id === action.payload);
        if (notification) {
          notification.read = true;
        }
      },
      removeNotification(state, action) {
        state.notifications = state.notifications.filter(n => n.id !== action.payload);
      }
    }
  });

  export const { addNotification, markAsRead, removeNotification } = notificationSlice.actions;
  export default notificationSlice.reducer;
  