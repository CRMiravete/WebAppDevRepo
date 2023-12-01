import React from "react";
import {Link} from "react-router-dom";

function MyNavBar(){
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/archive">Archive</Link></li>
                <li><Link to="/secret">Secret</Link></li>
            </ul>
        </div>
    )
}

export default MyNavBar;