import { AuthContext } from "../Context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";

import { CounterContext } from "../Context/CounterContext";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState({});
  const { isAuth } = useContext(AuthContext);
  const { handlecount } = useContext(CounterContext);

  const handleChange = (name) => {
    handlecount(name, 1);
  };

  useEffect(() => {
    async function getdata() {
      let res = await fetch(`http://localhost:8080/employee/${id}`);
      let data = await res.json();
      console.log(data);
      setData(data);
    }
    getdata();
  }, []);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="user_details">
      <img className="user_image" src={Data.image} />
      <h4 className="user_name">{Data.username}</h4>
      <span className="user_salary">${Data.salary}</span>
      <span className="tasks">
        <li className="task">{Data.tasks}</li>
      </span>
      Status: <b className="status">{Data.status}</b>
      Title: <b className="title">{Data.title}</b>
      {
        /* Show this button only if user is not already terminated (users status is working) */
        Data.status === "working" ? (
          <button className="fire" onClick={() => handleChange("terminated")}>
            Fire Employee
          </button>
        ) : (
          ""
        )
      }
      {
        /* Show this button only if user is not already team lead or terminated */
        Data.title === "Team Lead" || Data.title === "terminated" ? (
          ""
        ) : (
          <button className="promote" onClick={() => handleChange("promoted")}>
            promote
          </button>
        )
      }
    </div>
  );
};
