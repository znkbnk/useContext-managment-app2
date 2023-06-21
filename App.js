//App.js
import React from 'react';
import UserProvider from './UserProvider';
import UserRegistration from './UserRegistration';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>User Management System</h1>
        <UserRegistration />
        <UserProfile />
      </div>
    </UserProvider>
  );
};

export default App;
