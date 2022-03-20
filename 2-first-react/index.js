/*
This file outilnes the basics of React.
*/

const coder_first_name = "Ryan";
const coder_last_name = "Enns";

// JSX is a JavaScript extension that allows you to define
// objects that are implemented in the same way that HTML
// tags are created. This is a strong imporovement to the
// legibility of dynamic JavaScript webpages.
function coder_name_JSX( firstname, lastname ) {
    return <h1>Hi, I'm {firstname} {lastname}</h1>
}

// custom React tags can be defined by creating a function component
// this entails creating a function with the same name of our custom
// tag; in this case, Greeting(props) for a <Greeting .../>.

// props is short for properties; the expected function prototype for
// a React function component requries this to be the only parameter.
// Function components must be written with capitals. The attributes
// for a function component can be access via props.attriubte.

// components can be nested within other components as needed.
// with respect to props, all functions must be pure; they cannot
// modify props.
function Greeting(props) {
    return <h1>Hi, my name is {props.name}</h1>
}

// ReactDOM.render is the primary method we utilize to write things
// to the HTML DOM. render accepts a structure of JSX objects as well
// as a DOM object that acts as the root that is being written to.
// This root is defined by a vanilla DOM .getElementById(//) call.
ReactDOM.render(
    <div>
        <Greeting name={coder_first_name}/>
        <h2>This is my first attempt using React JS</h2>
        <p>I have included React in this project using the <i>easy</i> method.</p>
        <p>Meaning, I have used the React and Babel CDN links; like I used with JQuery.</p>
    </div>
    ,document.getElementById('react_root')
);