import { useEffect, useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/wrapper";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const onAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const AddUserHandler = (e) => {
    e.preventDefault();
    if(enteredName.trim().length === 0  || enteredAge.trim().length === 0  ){
      setError({
        title : "Invalid Inputs !!!",
        message : "Please enter a valid name of age (non-empty values)"
      })
      return ;
        }
    if(+enteredAge<0){
      setError({
        title : "Negative Age !!!",
        message : "Please enter a Positive Age "
      })
      return;
    }

    const user = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onAddUser(user);

 
    //to reset the fields in the form
    setEnteredAge("");
    setEnteredName("");
  };
  const clearBtnHandler = () =>{
      props.clearList([])
  }

  const onCloseError =(e)=>{
    e.preventDefault();
    setError(null);
  }

  useEffect(()=>{
    const indentifier = setTimeout(()=>{
      console.log('time pased')
    },500)
    return () =>{
      console.log("clean up")
      clearTimeout(indentifier)
    }
  },[enteredName,enteredAge])




  return (
    <Wrapper>
      {error && <ErrorModal errorHandler = {onCloseError} e = {error} />}
    <Card className={`${classes.input} ${classes.isValid ? `classes.isvalid`: ""}`}>
      <form onSubmit={AddUserHandler}>
        <div className="container">
          <div className="control">
            <label>Name</label>
            <input type="text" value={enteredName} onChange={onNameHandler} />
          </div>
          <div className="control">
            <label>Age</label>
            <input type="number" value={enteredAge} onChange={onAgeHandler} />
          </div>
          <div className="control_actions">
            {/* <button type="submit">submit</button> */}
            <Button type="submit"> submit</Button>
            <Button type="reset" onClick={clearBtnHandler}> clear</Button>
          </div>
        </div>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
