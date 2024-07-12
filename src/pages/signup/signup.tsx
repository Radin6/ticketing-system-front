import { useState } from 'react'
import userSignup from '@/services/users/userSignup'
import { useNavigate } from "react-router-dom";
import Input from '@/components/Input';
import Button from '@/components/Button';
import AuthLayout from '@/components/Layout/AuthLayout';
import toast from 'react-hot-toast';
// import generateHash from '../../utils/generateHash'

function Signup() {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const userData = {
      name: username,
      email: email,
      password: password
      // password: generateHash(password)
    }

    const response = await userSignup(userData)

    if ("user" in response) {
      toast.loading("Signing up...")
      setTimeout(() => {
        toast.dismiss()
        navigate("/home")
      }
      , 1000)
    } else {
      console.log(response);
    }
  }

  return (
    <AuthLayout>
      <section className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col border rounded-md bg-gradient-to-t from-blue-200 to-blue-400 p-6 shadow-lg">
          <h1 className="text-xl text-center font-semibold">Signup Page</h1>
          <form className="flex flex-col my-2" onSubmit={handleSignup}>
            <label htmlFor="username" className="py-1">
              Username
            </label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              id="username"
              required
            />
            <label htmlFor="email" className="py-1">
              Email
            </label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              required
            />
            <label htmlFor="password" className="py-1">
              Password
            </label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              required
            />
            <Button 
              type="submit"
              className="mt-6 mx-auto"
              variant="blue">
              Signup
            </Button>
          </form>
        </div>
      </section>
    </AuthLayout>
  )
}

export default Signup;