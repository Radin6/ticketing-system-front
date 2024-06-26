import Button from "./components/Button"
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-xl font-bold">
          Welcome to the best ticketing system page
      </h1>
      <Button onClick={() => {navigate("/login")}} >
        Log in
      </Button>
      <Button 
        onClick={() => {navigate("/signup")}}
        className="bg-red-500">
        Sign up
      </Button>

    </main>
  )
}

export default App
