const addBookAPI = async (data) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6WW9pLyM5KcNpiSeZbhV/books';
  await fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export default addBookAPI;
