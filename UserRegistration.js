//UserRegistration.js
import React, { useContext, useState } from 'react';
import UserContext from './UserContext';

const UserRegistration = () => {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = () => {
    // Perform user registration logic and obtain userData
    const userData = {
      name,
      email,
    };

    updateUser(userData);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default UserRegistration;
