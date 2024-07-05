import Cookies from 'js-cookie';

async function ticketDelete(ticketId : string) : Promise<any> {

  try {
    const authToken = Cookies.get("token");
    const response = await fetch(import.meta.env.VITE_URL_ENDPOINT+"/api/tickets/"+ticketId, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
    });

    const result = response.json();
    return result;

  } catch(error) {
    console.log("Error: ", error);
    return {message: "Something went wrong trying to delete a ticket"}
  }
}

export default ticketDelete;