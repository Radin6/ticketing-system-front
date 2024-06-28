import HomeLayout from "../../components/Layout/HomeLayout";

function Home() {

  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col border rounded-md bg-blue-100 p-6">
          <h1>This is the home page</h1>
        </div>
      </div>
    </HomeLayout>

  )
}

export default Home;