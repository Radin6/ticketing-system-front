function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col border rounded-md bg-blue-100 p-6">
        <h1 className="text-xl text-center">Login Page</h1>
        <form action="" className="flex flex-col my-2" onSubmit={() => {alert("login")}}>
          <label htmlFor="email">
            Email
          </label>
          <input type="text" id="email" className="border" />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <input type="text" id="password" className="border" />
          <button type="submit" className="bg-blue-500 p-3 rounded-md mt-6">
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

export default Login;