import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface IWork {
  title: string;
  startTime: string;
  endTime: string;
}

interface WorkState {
  data: IWork[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: WorkState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchWorks = createAsyncThunk<
  IWork[],
  void,
  { rejectValue: string }
>('work/fetchWorks', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      'https://be-myprofile.onrender.com/api/v1/work/getWorks',
    );
    if (!response.ok) {
      throw new Error('Server responded with an error!');
    }
    const data: IWork[] = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const workSlice = createSlice({
  initialState,
  name: 'work',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchWorks.rejected, (state, action) => {
        state.error = action.payload ?? 'An unexpected error occurred';
        state.loading = false;
      });
  },
});

export default workSlice;
