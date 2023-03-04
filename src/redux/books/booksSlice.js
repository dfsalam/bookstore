import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6WW9pLyM5KcNpiSeZbhV/books';
const initialState = {
  books: [],
  isLoading: true,
};

export const getBooksItems = createAsyncThunk('books/getBooksItems',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const keys = Object.keys(data);
    const newBooks = [];
    let item = {};
    keys.forEach((e) => {
      item = {
        item_id: e,
        title: data[e][0].title,
        author: data[e][0].author,
        category: data[e][0].category,
      };
      newBooks.push(item);
    });
    return newBooks;
  });

export const addBook = createAsyncThunk('books/addBook',
  async (data) => {
    await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return data;
  });
export const removeBook = createAsyncThunk('books/removeBook',
  async (id) => {
    const deleteUrl = `${url}/${id}`;
    await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return id;
  });

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksItems.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooksItems.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(getBooksItems.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        books: [...state.books, action.payload],
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export default booksSlice.reducer;
