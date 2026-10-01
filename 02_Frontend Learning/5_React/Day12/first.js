import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";


function App(){

    return (
        
        <BrowserRouter>

        <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
        </nav>
        {/* routes ke uppar wale sare har page me dikhega . here you attach header section */}

 {/* Routes wale section se ek hi Route select hoga at a time.. By default Home page wala select hoga */}
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Details" element={<Details></Details>}>
            {/* when you write "/file_name" then it start finding from root like "/","/Contact","/Dashboard" */}

            {/* this index shows in by default in details section  */}
            <Route index element={<Zero></Zero>}></Route>
            <Route path="Hello" element={<Hello></Hello>}></Route>
            <Route path="Hi" element={<Hi></Hi>}></Route>
            {/* But when you write "file_name" then it start finding from only its upper parent  */}
            
            </Route>
        </Routes>


        {/* footer section */}
        </BrowserRouter>
        
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


