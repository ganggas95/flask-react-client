// import express from "express";
// import React from "react";
// import { renderToString } from "react-dom/server";
// import Home from "./components/Home";
// const app = express();
// app.get('/', (req, res)=>{
//     const content = renderToString(<Home/>);
//     res.send(content);
// })
// app.listen(3000, ()=>{
//     console.log('server listened in port : 3000');
// })

import React from 'react';
import ReactDOM from "react-dom";
import Home from "./components/Home";
ReactDOM.render(
    <Home />,
    document.getElementById('root')
)

