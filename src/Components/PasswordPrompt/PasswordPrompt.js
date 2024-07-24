import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordPrompt = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'yourpassword') {
      onSuccess();
      navigate('/protected');
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PasswordPrompt;

