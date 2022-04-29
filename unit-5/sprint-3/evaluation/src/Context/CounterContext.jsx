import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

export const CountContextProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    async function getdata() {
      let res = await fetch("http://localhost:8080/employee");
      let data = await res.json();
      console.log(data);
      setEmployee(data);
    }
    getdata();
  }, []);

  const [count, setCount] = useState({
    total: employee.length,
    terminated: 0,
    promoted: 0,
    total_new: 0,
  });

  const handlecount = (name, value) => {
    count[`${name}`] += value;

    setCount({ ...count });
  };

  return (
    <CounterContext.Provider value={{ count, handlecount }}>
      {children}
    </CounterContext.Provider>
  );
};
