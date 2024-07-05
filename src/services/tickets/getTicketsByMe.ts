import Cookies from 'js-cookie';

async function getTicketsByMe() : Promise<any> {

  try {
    const authToken = Cookies.get("token");
    const response = await fetch(import.meta.env.VITE_URL_ENDPOINT+"/api/tickets/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
    });

    const result = await response.json();
    return result;

  } catch(error) {
    console.log("Error: ", error);
    return {message: "Something went wrong trying to create a ticket"}
  }
}

export default getTicketsByMe;