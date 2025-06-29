
import { NavLink } from "react-router-dom"

export default function HeaderNav(){

    return(

        <div>
            <h1><NavLink to='/'>Home</NavLink> / About</h1>
        </div>
   
    )
}