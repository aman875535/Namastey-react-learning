
// Core react without JSX ,  We will use JSX for creating Html ------------------------------------------



{/*1--- <div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    </div>
</div> 

ReactElement(object) = Html(Browser understand)

-----

2--- <div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    <h2>I am H1 tag</h2>
    </div>
</div> 


*/


}

// const parent = React.createElement('div', { id: "parent" }, 
// React.createElement('div', { id: 'child' }, 
// React.createElement('h1', {}, "I am H1 tag")))


const parent = React.createElement('div', { id: "parent" },
    React.createElement('div', { id: 'child' },
        React.createElement('h1', {}, "I am H1 tag"), [React.createElement('h2', {}, "I am H2 tag")]
    )
)

// const heading = React.createElement("h1", { id: "heading" }, "Hello Namaste React")
console.log(parent) //object
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent) // covert heding object convert into h1 tag and put it yo root