import { useState, useEffect } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList,setUserList] = useState([])

  useEffect(() => {
    const storedUserList = localStorage.getItem('userList');
    if (storedUserList) {
      setUserList(JSON.parse(storedUserList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(userList));
  }, [userList]);
  const onAddUserHandler = (user) =>{
    
    setUserList((prevUserList)=>{
      localStorage.setItem('userList',JSON.stringify(userList))
      return ([
        ...prevUserList,
        user,
      ]);
    })

  
  }
  return (
    <>
      <AddUser onAddUser = {onAddUserHandler} clearList = {setUserList} />
      {userList.length === 0 ? "": <UserList users={userList} />}
    </>
  );
};

export default App;
