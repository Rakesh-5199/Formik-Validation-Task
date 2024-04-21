import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';
import './index.css'; 
const App = () => {
  
  const initialBook = {  
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  const initialAuthor = {
    name: '',
    birthDate: '',
    biography: ''
  };

  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  return (
    <div>
      <h1 className="header">Admin Dashboard</h1>

  
      <BookForm initialValues={initialBook} onSubmit={handleAddBook} />

      <h2> Author Details</h2>
      <AuthorForm initialValues={initialAuthor} onSubmit={handleAddAuthor} />

      <h2>Book List</h2>
      <BookList books={books} />

      <h2>Author List</h2>
      <AuthorList authors={authors} />
    </div>
  );
};

export default App;
