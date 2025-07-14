import React from "react";
import { useState, useEffect } from "react";
const Fetching = () => {
 const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      console.log("Fetching data...");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData()
  }, []);

return (
  <div>
    {data.length === 0 ? <p>Loading...</p> : (
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.body}</li>
        ))}
      </ul>
    )}
  </div>
);

}
 

export default Fetching;
