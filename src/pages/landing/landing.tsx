import Button from "../../components/Button"
import HomeLayout from "../../components/Layout/HomeLayout";
import { useNavigate } from "react-router-dom";
import todoListImg from "../../assets/todo-list.png"

function Landing() {
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center h-screen gap-3">
        <div className="max-w-[500px]">
          <img src={todoListImg} alt="todo list landing image" />
        </div>
        <h1 className="text-xl font-bold">
          Welcome to the best ticketing system page
        </h1>
        <Button
          onClick={() => { navigate("/signup") }}
          className="bg-red-500">
          Sign up
        </Button>
      </div>
    </HomeLayout>
  )
}

export default Landing
