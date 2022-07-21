import React, { useEffect, useState } from "react";
import {
  getManagers,
  postManager,
  deleteManager,
  putManager,
} from "../utils/fetchApi";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [changedName, setChangedName] = useState("");
  const [changedDescription, setChangedDescription] = useState("");
  const [id, setId] = useState('');
  const userData = new FormData();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    userData.append("login", login);
    userData.append("password", password);
    userData.append("name", name);
    userData.append("description", description);
    postManager(userData);
    setDescription("");
    setName("");
    setLogin("");
    setPassword("");
  };
  const onChangeHandler = (event) => {
    event.preventDefault();
    if (changedName) {
      userData.append("name", changedName);
    }
    if (changedDescription) {
      userData.append("description", changedDescription);
    }
    putManager(userData, id);
    setDescription("");
    setName("");
  };
  const onDeleteHandler = () => {
    deleteManager(id);
  };
  const onClickBtn = () => {
    getManagers()
      .then((data) => data)
      .catch((error) => console.log(error));
  };
  return (
    <main className="main">
      <h1 className="App">Happy hacking !</h1>
      <button className="getManagersBtn" onClick={onClickBtn}>
        Get managers
      </button>
      <input
        className="input"
        placeholder="set manager id"
        type="number"
        name="id"
        value={id}
        onChange={(event) => setId(event.currentTarget.value)}
      />
      <div className="wrapperForm">
        <form onSubmit={onSubmitHandler} className="form">
          <input
            placeholder="enter login"
            className="input"
            onChange={(event) => setLogin(event.currentTarget.value)}
            value={login}
            type="text"
            name="login"
          />
          <input
            placeholder="enter password"
            className="input"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
            type="password"
            name="password"
          />
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
            value={changedName}
            type="text"
            name="description"
          />
          <input
            placeholder="enter new description"
            className="input"
            onChange={(event) =>
              setChangedDescription(event.currentTarget.value)
            }
            value={changedDescription}
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
    </main>
  );
};

export default App;
