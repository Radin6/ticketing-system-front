import Button from "./components/Button"


function App() {

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-xl font-bold">
          Welcome to the best ticketing system page
      </h1>
      <Button>Log in</Button>
      <Button className="bg-red-500">Sign up</Button>

    </main>
  )
}

export default App
