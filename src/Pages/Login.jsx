import { useState } from 'react'
import facebookIcon from '../assets/loginPageIcons/facebookIcon.png'
import googleIcon from '../assets/loginPageIcons/googleIcon.png'
import linkedinIcon from '../assets/loginPageIcons/linkedinIcon.png'
import { useNavigate, useOutletContext } from 'react-router-dom'


export default function Login(){

    const [formType, setFormType] = useState('signin_section')
    const navigateTo = useNavigate()
    const { setIsLoggedIn } = useOutletContext()

    async function handleSignIn(e){
        e.preventDefault()

        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const res = await fetch('https://comfysloth-server.onrender.com/api/v1/userAccounts/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
2
            const result = await res.json()

            if(!res.ok){
                console.log('login failed!');
                return null
            }

            console.log(result);

            if(result.success){
                setIsLoggedIn(result.success)
                navigateTo('/cart')
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignUp(e){
        e.preventDefault()

        const formData = new FormData(e.target)
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')

        try{
            const res = await fetch('https://comfysloth-server.onrender.com/api/v1/userAccounts/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })

            const result = await res.json()

            if(!res.ok){
                console.error(result.error)
                return
            }
            console.log('signup successfully!', result);
        }catch(err){
            console.log(err);
        }
    }


    const signInForm = () => (
        <>
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
        </>
    )

    const signUpForm = () => (
        <>
            <h1>Create Account</h1>

            <div>
                <img src={facebookIcon} alt="facebookIcon" />
                <img src={googleIcon} alt="googleIcon" />
                <img src={linkedinIcon} alt="linkedinIcon" />
            </div>

            <p>or use your email for registration</p>

            <input type="text" placeholder='Name' id='name' name='name'/>
            <input type="text" placeholder='Email' id='email' name='email'/>
            <input type="text" placeholder='Password' id='password' name='password'/>

            <button id='signinBtn'>SIGN UP</button>
        </>
    )

    const signInSection = () => (
    <>
        <h1>Good Day!</h1>
        <p>Enter your personal details and start ordering in ComfyCloth!</p>
        <button onClick={() => {setFormType('signup_section')}}>SIGN UP</button>
    </>
    )
    const signUpSection = () => (
        <>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={() => {setFormType('signin_section')}}>SIGN IN</button>
        </>
    )



    return(
        <section className={`${formType}`}>
                <form key={formType} onSubmit={formType === 'signin_section' ? handleSignIn : handleSignUp}>
                    {formType === 'signin_section' ? signInForm() : signUpForm()}
                </form>

                <section>
                    {formType === 'signin_section' ? signInSection() : signUpSection()}
                </section>

        </section>
    )
}