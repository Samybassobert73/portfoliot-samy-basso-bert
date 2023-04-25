import React, {useState}from 'react'

function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <input 
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>sign in</button>
    </div>
  )
}

export default Auth