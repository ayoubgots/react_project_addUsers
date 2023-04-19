import React from "react";
import Card from "./Card";
import Button from "./Button";
import  ReactDOM  from "react-dom";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.errorHandler} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.e.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.e.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.errorHandler}>Okey</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop errorHandler={props.errorHandler}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay  e = {props.e} errorHandler={props.errorHandler} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
