import React from "react";

const UserList = () => {
    const title = "user information";
  const users = [
    { id: 1, name: "Alice", age: 23 },
    { id: 2, name: "Bob", age: 27 },
    { id: 3, name: "Rupsa", age: 24 },
  ];
  return (
    <div>
        <h2>{title}</h2>
      {users.map(({ id, name, age }) => (
        <ul key={id}>
          <li>ID:{id}</li>
          <li>Name:{name}</li>
          <li>Age:{age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
