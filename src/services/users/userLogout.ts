import Cookies from "js-cookie";


function userLogout() {

  try {
    Cookies.remove("token");

  } catch(error) {
    console.log("Logout error: ",error)
  }
  
}

export default userLogout;