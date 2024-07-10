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

*/


import React  from "react";
import ReactDOM from "react-dom"
const heading1 = React.createElement("h1",{
    id: "header1",

},"Header1");

const heading2 = React.createElement("h1",{
    id:"header2",
},
"Header2")

const container = React.createElement("div",{
    id:"container",
},
[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);