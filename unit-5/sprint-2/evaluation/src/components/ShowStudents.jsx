import { useEffect, useState } from "react";
import axios from "axios";
export const ShowStudents = ({ handleContent }) => {
  const [studentData, setstudentData] = useState([]);

  const [sortby, setSortby] = useState(null);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    axios.get("http://localhost:8080/students").then((res) => {
      setstudentData(res.data);
      handleContent();
    });
  }, [order]);

  const handleChange = (e) => {
    const [name, value] = e.target;

    setSortby({ ...sortby, [name]: value });
    handleContent();
  };

  const sortbyChange = (e) => {
    const [name, value] = e.target;

    setOrder({ ...order, [name]: value });
  };

  const handlesort = () => {
    if (order === "asc") {
      const sorted = [...studentData].sort((a, b) =>
        a[sortby] > b[sortby] ? 1 : -1
      );
      setstudentData(sorted);
      handleContent();
    } else if (order === "desc") {
      const sorted = [...studentData].sort((a, b) =>
        a[sortby] < b[sortby] ? 1 : -1
      );
      setstudentData(sorted);
      handleContent();
    }
  };

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={handleChange}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={sortbyChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handlesort}>
          sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {studentData.map((e) => {
            return (
              <tr className="row" key={e.id}>
                <td className="first_name">{e.first_name}</td>
                <td className="last_name">{e.last_name}</td>
                <td className="email">{e.email}</td>
                <td className="gender">{e.gender}</td>
                <td className="age">{e.age}</td>
                <td className="tenth_score">{e.tenth_score}</td>
                <td className="twelth_score">{e.twelth_score}</td>
                <td className="preferred_branch">{e.preferred_branch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
