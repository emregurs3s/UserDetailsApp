import React, {useEffect,useState}from "react";
import axios from "axios";
function UserList({setActiveUserId}){
    const [users,setUsers] = useState([]);

    useEffect(()=>{
    
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
    setUsers(res.data);
    
        });
    
    
    })
    
return(
    <div>
<h2>Kullanıcılar</h2>
    <ul className="user-list">
      {users.map(user=>(
        <li key={user.id} onClick={()=>setActiveUserId(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
    </div>
);


}
export default UserList;