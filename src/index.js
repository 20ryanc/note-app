import React from 'react';
import ReactDOM from 'react-dom';
import App from "./note/app.js";

//var content = [["1","123"],["2","223"],["3","323"],["4","423"]]
var cont = [["",""]];

ReactDOM.render(<App content={cont} />, document.getElementById('root'));