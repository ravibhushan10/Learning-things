import { useState } from "react"
import { Outlet,Link } from "react-router"

export default function Details(){

    return(
        <>
        <nav>
            <Link to="/Details">Details</Link>
            <Link to="Hello">Hello</Link>
            <Link to="Hi">Hi</Link>
        </nav>

       {/* Outlet wala select karega only one when you click from the first.js file se Hi,Hello wala */}
        <Outlet></Outlet>
        </>
    )
}
