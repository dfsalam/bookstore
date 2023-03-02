import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state) => {
      const book = {
        item_id: 'item1', title: 'Python Data Analytics', author: 'Fabio Nelli', category: 'Python',
      };
      return {
        ...state,
        books: [...state.books, book],
      };
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      return {
        ...state,
        books: state.books.filter((item) => item.id !== itemId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
