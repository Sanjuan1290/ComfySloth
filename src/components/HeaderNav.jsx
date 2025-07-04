
import { NavLink } from "react-router-dom"

export default function HeaderNav({ navLocation, subLocation }){

    return(

        <div className="headerNav">
            {
                subLocation ? <h1>
                    <NavLink to='/'>Home</NavLink> 
                    <NavLink to='/products'>/ { navLocation }</NavLink> / {subLocation}</h1>
                    :
                <h1><NavLink to='/'>Home</NavLink> / { navLocation }</h1>
            }

        </div>
   
    )
}