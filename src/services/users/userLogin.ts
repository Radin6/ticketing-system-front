import Cookies from "js-cookie";
import { IUser, IUserError } from "@/types/userTypes";

interface ILoginData {
  email: string;
  password: string;
}

export interface IResponse200 {
  token: string;
  user: IUser
}

async function userLogin(data : ILoginData) : Promise<IResponse200 | IUserError> {

  try {
    const response = await fetch(import.meta.env.VITE_URL_ENDPOINT+"/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json();
    console.log(result)

    if (result.token && result.user) {
      Cookies.remove("token");
      Cookies.set("token", result.token);

    }

    return result;

  } catch (error) {
    console.log("Error: ", error)
    return {message: "error"} as IUserError
  }
}

export default userLogin;