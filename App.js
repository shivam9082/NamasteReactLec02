/* 
- Features provided by Parcel:
    - HMR -> Hot Module Reloading
    - File Watcher Algorithm -> c++
    - Bundling
    - Minify
    - Cleaning our Code
    - Dev and Production build
    - Super Fast Build Algorithm
    - Image Optimization
    - Caching While Development
    - Compression
    - Compatible with older version of Browsers.
    - HTTPS on dev
    - port number
    - consistent hashing algorithm
    - Zero Configuration
    - Transitive Dependencies
    - Tree Shaking - Removing un-wanted code.

*/


//import React  from "react";
import { createElement as ce } from "react";
import ReactDOM from "react-dom"

// createElement -> Object-> HTMLcode(DOM)

// react element..further we are never going to use createElement..so elminating this part of code..
/* const heading1 = ce("h1",{
    id: "header1",
    key: "h1",
},"Header1"); */

//above is react code which is quite lengthy to type..hence use jsx.


//jsx for above code :
//--jsx is html like code in javascript.. not exact html.

//JSX => React.createElement => Object => HTML(DOM)
//react element..
const heading = <h1 id = "header1" key="k1">Header1</h1>

/*
- React Component: 
    - Functional Component..
*/

//if it is a component then write {<header />}, also in {} we can write any piece of javascript code.

//component composition or composing components.
const HeaderComp = ()=> {
    return (<div>
        {heading} 
        <h1 id = "title">Namste React Functional Component.</h1>
        <h2 id="subtitle">Hii there.</h2>
    </div>);
} 

/* 
For a single expression, you can use implicit return:
const HeaderComp = () => (
    <div>
        {heading}
        <h1 id="title">Namaste React Functional Component.</h1>
        <h2 id="subtitle">Hi there.</h2>
    </div>
); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComp />); // way to render react functional component.