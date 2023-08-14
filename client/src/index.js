// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )

import React from "react";
import App from "./App";
import {createRoot} from "react-dom/client"


const dom = document.getElementById("root")
const root = createRoot(dom)
root.render(<App />)