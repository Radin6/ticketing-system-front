import { useState } from 'react'
import userSignup from '../../services/users/userSignup'
import generateHash from '../../utils/generateHash'

function Signup() {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const newUser = {
      name: username,
      email: email,
      password: generateHash(password)
    }

    const response = await userSignup(newUser)
    console.log(response)

  }

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col border rounded-md bg-red-100 p-6">
        <h1 className="text-xl text-center">Signup Page</h1>
        <form className="flex flex-col my-2" onSubmit={handleSignup}>
          <label htmlFor="username">
            Username
          </label>
          <input 
            onChange={(e) => setUsername(e.target.value)}
            value={username} 
            type="text" 
            id="username" 
            className="border" 
            required
            />
          <label htmlFor="email">
            Email
          </label>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email" 
            id="email" 
            className="border" 
            required
            />
          <label htmlFor="password" className="border">
            Password
          </label>
          <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
            type="password" 
            id="password" 
            className="border" 
            required
            />
          <button type="submit" className="bg-red-500 p-3 rounded-md mt-6">
            Signup
          </button>
        </form>
      </div>
    </main>
  )
}

export default Signup;