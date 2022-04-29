import { useContext, useState } from "react";
import { CounterContext } from "../Context/CounterContext";
import axios from "axios";
import "../index.css";

export const Admin = () => {
  const { handlecount } = useContext(CounterContext);
  const [userData, setUserData] = useState({
    employee_name: "",
    employee_id: "",
    title: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: "",
    status: "",
    team: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlecount(1, "total_new");
    console.log(userData);
    axios.post("http://localhost:8080/employee", userData);
  };
  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        name="employee_name"
        onChange={handleChange}
        value={userData.employee_name}
      />
      <input
        type="text"
        placeholder="Employee id"
        name="employee_id"
        onChange={handleChange}
        value={userData.employee_id}
      />
      <br></br>
      <select name="title" onChange={handleChange} value={userData.title}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={handleChange}
        value={userData.salary}
      />{" "}
      <br></br>
      <input
        type="text"
        placeholder="Image"
        name="image"
        onChange={handleChange}
        value={userData.image}
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={handleChange}
        value={userData.username}
      />{" "}
      <br></br>
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={userData.password}
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handleChange}
        value={userData.tasks}
      />{" "}
      <br></br>
      <select
        name="status"
        id="status"
        onChange={handleChange}
        value={userData.status}
      >
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handleChange}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>{" "}
      <br></br>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
