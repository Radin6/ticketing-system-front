function Signup() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col border rounded-md bg-red-100 p-6">
        <h1 className="text-xl text-center">Signup Page</h1>
        <form action="" className="flex flex-col my-2" onSubmit={() => {alert("signup...")}}>
          <label htmlFor="email">
            Email
          </label>
          <input type="text" id="email" className="border" />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <input type="text" id="password" className="border" />
          <button type="submit" className="bg-red-500 p-3 rounded-md mt-6">
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

export default Signup;