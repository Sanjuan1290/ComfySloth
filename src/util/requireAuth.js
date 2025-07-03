import { redirect } from "react-router-dom"

export default function requireAuth(){
    
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false

    if(!isLoggedIn){
        const response = redirect('/login')
        throw response
    }

    return null
}