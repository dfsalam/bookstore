import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      books: [
        ...state.books,
        {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ],
    }),
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
