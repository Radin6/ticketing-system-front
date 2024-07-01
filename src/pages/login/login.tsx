import { useState } from 'react';
// import generateHash from '../../utils/generateHash';
import userLogin from '../../services/users/userLogin';
import { useNavigate } from "react-router-dom";
//import {storeUser} from "../../store/storeUser"

function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate();
  //const { user, setUser } = storeUser();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
      // password: generateHash(password)
    }

    const response = await userLogin(userData)
    // setUser({
    //   response
    // })
    // console.log(response)

    if (response) {
      setTimeout(() => navigate("/home"), 1000)
    }

  }

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col border rounded-md bg-blue-100 p-6">
        <h1 className="text-xl text-center">Login Page</h1>
        <form className="flex flex-col my-2" onSubmit={handleLogin}>
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
          <button type="submit" className="bg-blue-500 p-3 rounded-md mt-6">
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

export default Login;