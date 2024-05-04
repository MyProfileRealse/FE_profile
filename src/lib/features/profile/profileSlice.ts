import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface IProfile {
  name: string;
  description: string;
  avatar: string;
  introduce: string;
}

interface ProfileState {
  data: IProfile | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchProfiles = createAsyncThunk<
  IProfile,
  void,
  { rejectValue: string }
>('profile/fetchProfiles', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      'https://be-myprofile.onrender.com/api/v1/profile',
    );
    if (!response.ok) {
      throw new Error('Server responded with an error!');
    }
    const data: IProfile = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.error = action.payload ?? 'An unexpected error occurred';
        state.loading = false;
      });
  },
});

export default profileSlice;
