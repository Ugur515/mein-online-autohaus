import React from "react"
import ReactDom from "react-dom/client"
import Navbar from "./components/navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./components/products";
import App from "./App";
import './index.css';



const element = <h1>Hello World</h1>;


// root zum rendern von HTML stuff(immer das letzte wird displayed)
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(element);
root.render(<App/>);