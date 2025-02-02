import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const [ userData, setUserData ] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault();
    
        setUserData({
            fullName:{
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        })
    
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div>
            <img 
                className='w-16 mb-10'
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
            />
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className='text-lg font-medium mb-2'>What's our Captain's name?</h3>
                <div className='flex gap-4 mb-7'>
                    <input
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
                        type='text' 
                        required 
                        placeholder='First Name' 
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <input
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
                        type='text' 
                        required 
                        placeholder='Last Name' 
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </div>
                <h3 className='text-lg font-medium mb-2'>What's our Captain's email?</h3>
                <input
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    type='email' 
                    required 
                    placeholder='email@example.com' 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input 
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    type='password' 
                    required 
                    placeholder='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} 
                />
                <button
                    className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
                >
                    Create Captain Account
                </button>
            </form>
            <p className='text-center'>
                Already have an Account ? <Link to="/captain-login" className='text-blue-600'>Login Here</Link>
            </p>
        </div>

        <div>
            <p className='text-[10px] leading-tight'>
                This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                Policy</span> and <span className='underline'>Terms of Service apply</span>.
            </p>
        </div>
    </div>
  )
}

export default CaptainSignup
