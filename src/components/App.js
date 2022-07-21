import React, {useEffect, useState} from "react";
import {
  getManagers,
  postManager,
  deleteManager,
  putManager,
} from "../utils/fetchApi";

const  App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
    const [changedName, setChangedName] = useState("");
    const [changedDescription, setChangedDescription] = useState("");
  const userData = new FormData();
  // useEffect(() => {
  //   getManagers()
  //     .then((data) => data)
  //     .catch((error) => console.log(error));
  // }, []);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    userData.append("name", name);
    userData.append('description', description);
    postManager(userData);
    setDescription('');
    setName('');
  };
    const onChangeHandler = (event) => {
      event.preventDefault();
      if (changedName) {
        userData.append("name", changedName);
      }
      if (changedDescription) {
        userData.append("description", changedDescription);
      }
      putManager(userData, 36);
      setDescription("");
      setName("");
    };
  const onDeleteHandler = () => {
    deleteManager()
  };
  const onClickBtn = () => {
        getManagers()
      .then((data) => data)
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className="App">Happy hacking !</h1>
      <button className="getManagersBtn" onClick={onClickBtn}>
        Get managers :)
      </button>
      <div className="wrapperForm">
        <form onSubmit={onSubmitHandler} className="form">
          <input
            placeholder="enter name"
            className="input"
            onChange={(event) => setName(event.currentTarget.value)}
            value={name}
            type="text"
            name="name"
          />
          <input
            placeholder="enter description"
            className="input"
            onChange={(event) => setDescription(event.currentTarget.value)}
            value={description}
            type="text"
            name="description"
          />
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
        <form onSubmit={onChangeHandler} className="form">
          <input
            placeholder="enter new name"
            className="input"
            onChange={(event) => setChangedName(event.currentTarget.value)}
            value={name}
            type="text"
            name="description"
          />
          <input
            placeholder="enter new description"
            className="input"
            onChange={(event) =>
              setChangedDescription(event.currentTarget.value)
            }
            value={description}
            type="text"
            name="description"
          />
          <button className="changeBtn" type="submit">
            change
          </button>
        </form>
      </div>
      <button onClick={onDeleteHandler} className="deleteBtn" type="button">
        delete manager
      </button>
    </>
  );
}

export default App;
