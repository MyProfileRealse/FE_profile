import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface IPost {
  _id: string;
  title: string;
  createTime: string;
  content: string;
  image: string;
}

interface PostState {
  data: IPost[] | null;
  loading: boolean;
  error: string | null;
  selectedPost: IPost | null;
}

const initialState: PostState = {
  data: null,
  loading: false,
  error: null,
  selectedPost: null,
};

export const fetchPosts = createAsyncThunk<
  IPost[],
  void,
  { rejectValue: string }
>('post/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      'https://be-myprofile.onrender.com/api/v1/post/getPosts',
    );
    if (!response.ok) {
      throw new Error('Server responded with an error!');
    }
    const data: IPost[] = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const postSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    findPostById: (state, action: PayloadAction<string>) => {
      console.log(action.payload, 'actipn');
      console.log(state.data);
      const foundPost = state.data?.find((post) => post._id === action.payload);
      state.selectedPost = foundPost || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload ?? 'An unexpected error occurred';
        state.loading = false;
      });
  },
});

export default postSlice;
export const { findPostById } = postSlice.actions;
