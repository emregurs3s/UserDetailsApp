import {useEffect, useState} from 'react';
import './App.css';
import UserList from "./components/UserList";
import UserDetails from './components/UserDetails';
function App(){
  const [activeUserId,setActiveUserId] = useState(null);
return(
  <div className="App">
    <div>

  <UserList setActiveUserId={setActiveUserId}/>
  {
    
  }

    </div>
    {
      activeUserId && (
        <div>
     <UserDetails activeUserId={activeUserId}/>
    </div>
      )
    }
  </div>
)
}
export default App 


