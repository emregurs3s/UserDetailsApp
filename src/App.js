import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import UserList from "./components/UserList";
function App(){
return(
  <div className="App">
    <div>

  <UserList />

    </div>
    <div>
      sağ
    </div>
  </div>
)
}
export default App 


