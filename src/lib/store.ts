import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import profileSlice from './features/profile/profileSlice';
import workSlice from './features/work/workSlice';

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [profileSlice.reducerPath]: profileSlice.reducer,
    [workSlice.reducerPath]: workSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
