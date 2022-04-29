import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      let res = await fetch("http://localhost:8080/employee");
      let data = await res.json();
      console.log(data);
      setData(data);
    }
    getdata();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home length={Data.length} />}></Route>
        <Route path="/employees" element={<EmployeeList data={Data} />}></Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/employees/:id"
          element={
            <ProtectedRoute>
              <EmployeeDetails />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/logout" element={<Logout />}></Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
