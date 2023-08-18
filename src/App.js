import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [isEditing, setEditing] = useState(false);

  let add = () => {
    if (isEditing) {
      list[isEditing.index] = text;
      setList([...list]);
      setText("");
      setEditing(false);
    } else {
      list.push(text);
      setList([...list]);
      setText("");
    }
  };

  const edit = (i) => {
    setEditing({ index: i });
    setText(list[i]);
  };

  const del = (i) => {
    list.splice(i, 1);
    setList([...list]);
  };

  const delAll = () => {
    setList([]);
  };

  return (
    <div className="wholePage text-white">
      <div className="body text-center m-auto ">
        <div>
          <h1 className="fw-bold display-4 py-4 mb-3 text-decoration-underline ">
            TO-DO APP
          </h1>
        </div>
        <div>
          <input
            className="p-2 my-3 w-100 text-center rounded-5"
            placeholder="Enter Your List"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div className="my-3">
            <button
              className="p-2 px-4 m-2 rounded-5 btn btn-success"
              onClick={add}
            >
              {isEditing ? "Update" : "Add"}
            </button>
            <button
              className="p-2 px-4 m-2 rounded-5 btn btn-danger"
              onClick={delAll}
            >
              Delete All
            </button>
          </div>

          <ul className="text-center fw-bold ">
            {list.length ? (
              list.map((x, i) => (
                <li key={i}>
                  {x}
                  <div>
                    <button
                      className="btn btn-warning rounded-5 px-4 m-2"
                      onClick={() => edit(i)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-secondary rounded-5 px-4 m-2"
                      onClick={() => del(i)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <div className="text-white-50">No Records Available</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
