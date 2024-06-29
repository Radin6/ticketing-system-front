import Cookies from 'js-cookie';
import { ITicketCreate } from '../../types/ticketTypes';

async function ticketCreate(ticketData : ITicketCreate) : Promise<any> {

  try {
    const authToken = Cookies.get("token");
    const response = await fetch(import.meta.env.VITE_URL_ENDPOINT+"/api/tickets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(ticketData)
    });

    const result = response.json();
    return result;

  } catch(error) {
    console.log("Error: ", error);
    return "Something went wrong trying to create a ticket"
  }
}

export default ticketCreate;