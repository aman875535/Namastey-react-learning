import React from "react";
import ReactDOM  from "react-dom/client";



// const parent = React.createElement('div', {id:'parent'}, "JSX creation")

// JSX-----------
const Heading = (<h1 id="heading" className="heading"> Using JSX</h1>)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Heading) 