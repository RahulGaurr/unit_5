import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const EmployeeList = ({ data }) => {
  return (
    <div className="list_container">
      {data.map((e) => {
        return (
          <div className="employee_card">
            <Link to={`/employees/${e.id}`}>
              <img className="employee_image" src={e.image} alt="" />
              <span className="employee_name">{e.employee_name}</span>
              <span className="employee_title">{e.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
