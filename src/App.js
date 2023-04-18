import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList,setUserList] = useState([])

  const onAddUserHandler = (user) =>{
    setUserList((prevUserList)=>{
      return ([
        ...prevUserList,
        user,
      ]);
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser = {onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
