import { useState } from 'react';
// import generateHash from '../../utils/generateHash';
import userLogin from '@/services/users/userLogin';
import { useNavigate } from "react-router-dom";
import { useStoreUser } from "@/store/useStoreUser"
import Input from '@/components/Input';
import Button from '@/components/Button';
import AuthLayout from '@/components/Layout/AuthLayout';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate();
  const { setUser } = useStoreUser();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
      // password: generateHash(password)
    }

    const response = await userLogin(userData)

    if ("user" in response) {
      setUser(response.user)
      toast.loading("Logging in..")
      setTimeout(() => {
        navigate("/home")
        toast.dismiss()
      }, 1000)
    } else {
      console.log(response);
    }

  }

  return (
    <AuthLayout>
      <section className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col border rounded-md bg-gradient-to-t from-green-500 to-green-600 p-6 shadow-lg">
          <h1 className="text-xl text-center font-semibold text-white">Login Page</h1>
          <form className="flex flex-col my-2" onSubmit={handleLogin}>
            <label htmlFor="email" className="py-1">
              Email
            </label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              className="border"
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
              className="border"
              required
            />
            <Button 
              type="submit"
              className="mt-6 mx-auto"
              variant="green"
            >
              Login
            </Button>
          </form>
        </div>
      </section>
    </AuthLayout>
  )
}

export default Login;