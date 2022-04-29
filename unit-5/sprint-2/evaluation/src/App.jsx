import { useState, useEffect } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
function App() {
  const [students, setStudents] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    handleContent();
    return;
  }, [show]);

  const handleShow = () => {
    setShow(!show);
  };

  async function handleContent() {
    const response = await fetch("http://localhost:8080/students");
    const data = await response.json();
    console.log(data);
    setStudents(data);
  }
  // const handleContent = () => {
  //   axios.get("http://localhost:8080/students").then((res) => {
  //     console.log(res);
  //     setUsers(res.data);
  //   });
  // };
  return (
    <div className="App">
      <button
        className="togglebtn"
        onClick={() => {
          handleShow();
        }}
      >
        {show ? "Show Students" : "Add New Student"}
      </button>

      {show ? (
        <AddStudent handleShow={handleShow} handleContent={handleContent} />
      ) : (
        <ShowStudents users={students} handleContent={handleContent} />
      )}
    </div>
  );
}

export default App;
