// ParentComponent.jsx
import React, { useState } from 'react';
import AuthorList from './AuthorList';
import AuthorForm from './AuthorForm';

const ParentComponent = () => {
  const [authors, setAuthors] = useState([
    { name: 'Author 1', birthDate: '01/01/1990', biography: 'Biography 1' },
    { name: 'Author 2', birthDate: '02/02/1991', biography: 'Biography 2' },
    // Add more authors as needed
  ]);

  const handleEdit = (index, updatedAuthor) => {
    const newAuthors = [...authors];
    newAuthors[index] = updatedAuthor;
    setAuthors(newAuthors);
  };

  const handleDelete = (index) => {
    const newAuthors = [...authors];
    newAuthors.splice(index, 1);
    setAuthors(newAuthors);
  };

  return (
    <div>
      <h2>Add/Edit Author</h2>
      <AuthorForm onSubmit={(values) => setAuthors([...authors, values])} />
      
      <h2>Author List</h2>
      <AuthorList authors={authors} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default ParentComponent;
