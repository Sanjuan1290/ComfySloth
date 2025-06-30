
import { NavLink } from "react-router-dom"

export default function HeaderNav({ navLocation }){

    return(

        <div className="headerNav">
            <h1><NavLink to='/'>Home</NavLink> / { navLocation }</h1>
        </div>
   
    )
}