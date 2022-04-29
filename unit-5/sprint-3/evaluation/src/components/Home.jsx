import { useContext } from "react";

import { CounterContext } from "../Context/CounterContext";

export const Home = ({ length }) => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
  const { count } = useContext(CounterContext);

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{length}</span>
        </div>
        <div>
          Total Terminated:{" "}
          <span className="total_terminated">{count.terminated}</span>
        </div>
        <div>
          Total Promoted:{" "}
          <span className="total_promoted">{count.promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{count.total_new}</span>
        </div>
      </div>
    </>
  );
};
