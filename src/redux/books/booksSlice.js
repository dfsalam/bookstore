import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6WW9pLyM5KcNpiSeZbhV/books';
const initialState = {
  books: [],
  isLoading: true,
};

export const getBooksItems = createAsyncThunk('books/getBooksItems',
  () => fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err)));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.itemId !== action.payload),
    }),
  },
  extraReducers: {
    [getBooksItems.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getBooksItems.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }),
    [getBooksItems.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
