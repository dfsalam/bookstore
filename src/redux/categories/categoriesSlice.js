import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => ({
      categories: [
        action.payload === 'Under construction'
          ? 'Under construction'
          : state.categories,
      ],
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
