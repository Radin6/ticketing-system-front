import Cookies from "js-cookie";

interface ILoginData {
  email: string;
  password: string;
}

interface IResponse200 {
  token: string;
}

async function userLogin(data : ILoginData) : Promise<IResponse200 | string> {
  
  try {
    const response = await fetch(import.meta.env.VITE_URL_ENDPOINT+"/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json();

    if (result.token) {
      Cookies.remove("token");
      Cookies.set("token", result.token);

      return "Log in successful";
    }

    return result;

  } catch (error) {
    console.log("Error: ", error)
    return "Something went wrong in fetch";
  }
}

export default userLogin;