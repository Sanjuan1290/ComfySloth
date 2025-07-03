import facebookIcon from '../assets/loginPageIcons/facebookIcon.png'
import googleIcon from '../assets/loginPageIcons/googleIcon.png'
import linkedinIcon from '../assets/loginPageIcons/linkedinIcon.png'

import { NavLink } from 'react-router-dom'

export default function Login(){

    return(
        <section className="login_section">

            <form className="signIn_form">

                <h1>Sign in</h1>

                <div>
                    <img src={facebookIcon} alt="facebookIcon" />
                    <img src={googleIcon} alt="googleIcon" />
                    <img src={linkedinIcon} alt="linkedinIcon" />
                </div>

                <p>or use your account</p>

                <input type="text" placeholder='Email' id='email' name='email'/>
                <input type="text" placeholder='Password' id='password' name='password'/>

                <p>Forgot your password?</p>

                <button id='signinBtn'>SIGN IN</button>
            </form>

            <section>
                <h1>Good Day!</h1>
                <p>Enter your personal details and start ordering in ComfyCloth!</p>
                <NavLink to={`/signup`}>SIGN UP</NavLink>
            </section>

        </section>
    )
}