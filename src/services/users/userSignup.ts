import Cookies from 'js-cookie';

interface ISignupData {
  name: string;
  email: string;
  password: string;
}

interface IResponse200 {
  token: string;
  user: {
    name: string;
    email: string;
    role: "admin" | "user";
  }
}

async function userSignup(data : ISignupData) : Promise<IResponse200 | string> {
  
  try {
    const response = await fetch(import.meta.env.VITE_URL_ENDPOINT+"/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.token) {
      Cookies.remove("token");
      Cookies.set("token", result.token);

      return result.user
    }
    return result;

  } catch (error) {
    console.log("Error: ", error)
    return "Something went wrong in fetch";
  }
}

export default userSignup;