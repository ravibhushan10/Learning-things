import React from "react";
import ReactDOM from "react-dom/client";


function Card(){
    return (
      <div style={{border:"2px solid black",padding:"2px"}}>
        {/* In jsx img are self closing tag */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYDR7zV0j-gmr5ciMPZLsJ2J2XG8e3PUWTo6oHkcnP05gf2fEmvLY7MBV5IEUmK8RqU&usqp=CAU" height="200px" width="200px"/>
        <div style={{textAlign:"center"}}>
            <h2>T-Shirts</h2>
            <h1>40-80%off</h1>
            <h2>Shop Now</h2>
        </div>
      </div>
    )
}

function App(){
    return (
      
        <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);