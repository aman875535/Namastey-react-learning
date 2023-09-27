import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement('div', {id:'parent'}, "JSX creation")

// JSX-----------

// episode 3
//react Functional components

// const Heading = ()=>{
//     return <h1>Namastey React Functional Component</h1>;
// }

// const Heading = ()=><h1>Namastey React Functional Component</h1>; // sort handed
// for multy html
const Heading1 = () => {
  return (
    <div className="parent">
      <h1>Namastey React Functional Component</h1> 
    </div>
  );
};

// if we want to write Heading1 into Heding component----  
const Heading = () => {
    return (
      <div className="parent">
        <Heading1 />
        <h1>Namastey React Functional Component</h1> 
      </div>
    );
  };
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(<Heading />)
