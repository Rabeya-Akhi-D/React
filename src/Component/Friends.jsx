import { useState } from "react";


const Friends = () => {
  const [friends, setFriends] = useState(["Alex", "Gemini"]);
  const addOneFriend = () => setFriends([...friends,"Rabeya"]);
  const removeFriend = () => {
  const updatedList = friends.filter((f) => f !== "Rabeya");
  setFriends(updatedList);
};
const updateFriend = ()=> setFriends(friends.map(f=>f== "Gemini"?"Gemini Smith":f))
  return (
    <div>
     <ul>
       {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
     </ul>

      <button onClick={addOneFriend}>Add new Friend</button>
      <button onClick={removeFriend}>Remove one Friend</button>
      <button onClick={updateFriend}>update a friend</button>
    </div>
  );
};

export default Friends;
