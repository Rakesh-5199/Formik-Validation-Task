// AuthorList.jsx
import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>{author.name}</td>
              <td>{author.birthDate}</td>
              <td>{author.biography}</td>
              <td>
                <button onClick={() => onEdit(index, author)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
