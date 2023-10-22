import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [userData, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users)); // Make sure to access the 'users' array in the data
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h2 style={{textAlign:"center"}}>Dummy data</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{textAlign:"left"}}>Profile Pic</th>
            <th style={{textAlign:"left"}}>First Name</th>
            <th style={{textAlign:"left"}}>Last Name</th>
            <th style={{textAlign:"left"}}>Email</th>
            <th style={{textAlign:"left"}}>Username</th>
            <th style={{textAlign:"left"}}>Domain</th>
            <th style={{textAlign:"left"}}>IP</th>
            <th style={{textAlign:"left"}}>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} style={{ border: '1px solid white' }}>
              <td>
                <img src={user.image} alt="Profile" style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
