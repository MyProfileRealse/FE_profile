import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface IUserState {
  userId: string;
  isLoading: boolean;
}

interface IUser {
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const initialState: IUserState = {
  userId: '',
  isLoading: false,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
});

export default userSlice;
