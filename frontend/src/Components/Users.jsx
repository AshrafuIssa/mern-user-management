import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const FETCH_USER_URL = 'http://localhost:5010/api/v1/users';

  useEffect(() => {
    fetch(FETCH_USER_URL)
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
        setLoading(false);
        console.log(data.data);
      })
      .catch(error => console.error(error));
  }, [FETCH_USER_URL]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              {/* Add more table headers based on your data */}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                {/* Add more table cells based on your data */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
