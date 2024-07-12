import Button from "@/components/Button"
import HomeLayout from "@/components/Layout/HomeLayout";
import { useNavigate } from "react-router-dom";
import todoListImg from "@/assets/todo-list.png"
import { useStoreUser } from "@/store/useStoreUser";

function Landing() {
  const navigate = useNavigate();
  const { user } = useStoreUser()

  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-3 max-w-[500px] px-5 mt-20">
          <div className="">
            <img src={todoListImg} alt="todo list landing image" />
          </div>
          <h1 className="text-2xl font-bold font-mono text-center">
            Welcome to the best ticketing system page
          </h1>
          {user ?
            <Button
              onClick={() => { navigate("/home") }}
              variant="green"
            >
              Tickets Menu
            </Button>
            :
            <Button
              onClick={() => { navigate("/signup") }}
              variant="green"
            >
              Sign up
            </Button>
          }

        </div>
      </div>
    </HomeLayout>
  )
}

export default Landing
