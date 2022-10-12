import React from "react";
import {useState, useRef} from "react";
import "./App.css";
const arr = [];

function App() {
  const [toDo, setToDo] = useState();
  const [changeToDo, setChangeToDo] = useState();
  const [count, setCount] = useState(0);
  const name = useRef();
  const deleteProgram = useRef();
  const changeName = useRef();
  const changeBtn = useRef();
  const changeInnerText = useRef();
  const id = useRef();
  const obj = {};

  function handleChange(e) {
    setToDo(e.target.value);
  }

  function handleAdd() {
    obj.comment = toDo;
    obj.id = count;
    arr.push(obj);
    setCount(count + 1);
    name.current.value = "";
  }

  function handleDelete() {
    deleteProgram.current.style.display = "none";
  }

  function handleUpdate(item) {
    changeName.current.style.display = "block";
    changeBtn.current.style.display = "block";
    changeInnerText.current.value = item.comment;
  }

  function handleChangeUpdate(e) {
    setChangeToDo(e.target.value);
  }

  function handleChangeTo(item) {
    document.getElementById(item.id).innerText = changeToDo;
    changeName.current.style.display = "none";
    changeBtn.current.style.display = "none";
    item.comment = changeToDo;
  }

  return (
    <div className="App">
      <div style={{display: "none"}} ref={changeName}>
        <input
          type="text"
          id="updatename"
          paceholder="changename"
          ref={changeInnerText}
          onChange={handleChangeUpdate}
        />
      </div>
      <input type="text" id="name" onChange={handleChange} ref={name} />
      <button onClick={handleAdd}>Submit</button>
      <ul>
        {arr.map((item) => (
          <div className="item" ref={deleteProgram}>
            <li key={item.id} id={item.id}>
              {item.comment}
            </li>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => handleUpdate(item)}>Update</button>
            <button
              onClick={() => handleChangeTo(item)}
              className="changeBtn"
              ref={changeBtn}
            >
              Change
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
