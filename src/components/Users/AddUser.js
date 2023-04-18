import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [isValid,setIsValid] = useState(true);

  const onNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const onAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const AddUserHandler = (e) => {
    e.preventDefault();
    if(enteredAge.trim().length === 0 || enteredName.trim().length === 0){
      return ;
        }
    if(+enteredAge<1){
      return ;
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
  return (
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
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
