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

    const result = await response.json();
    return result ?? "Something went wrong in fetch";

  } catch (error) {
    console.log("Error: ", error)
    return "Something went wrong in fetch";
  }
}

export default userSignup;