
import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState(
    {
    books: 10,
    notebooks: 13,
    pens: 40,
  }
  );
    // Create add and remove functions here that changes the

    console.log(inv.books)
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={(inv)=>{
          // inv.books++
          inv.books=inv.books+1
          console.log("clicked")
          setInv(inv.books)
          console.log(inv.books)
        }}>+</button>
        <button className="circlularButton">-</button>
        <p>{inv.books}</p>
      </div>
    
      total: {0}
    </div>
  );
};