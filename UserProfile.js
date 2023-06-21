//UserProfile.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user registered.</p>
      )}
    </div>
  );
};

export default UserProfile;
