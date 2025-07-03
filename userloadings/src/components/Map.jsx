import React, { useEffect, useState } from 'react';

const Map = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers(url) {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        console.log(e.message);
      }
    }

    fetchUsers('https://jsonplaceholder.typicode.com/users');
  }, []);

  return (
    <div className="w-full">
      {users &&users.map((user) => (
        <div key={user.id} className="flex justify-between border p-2 bg-gray-300 ">
          <div className="w-2/6">{user.id}. {user.name}</div>
          <div className="w-2/6">@{user.username}</div>
          <div className="w-2/6">{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Map;
