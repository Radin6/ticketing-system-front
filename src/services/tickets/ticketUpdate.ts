import Cookies from "js-cookie";
import { ITicketCreateEdit } from "@/types/ticketTypes";

async function ticketUpdate(ticketData: ITicketCreateEdit, selectedTicketId: string) : Promise<any> {
  try {
    const authToken = Cookies.get("token");
    const response = await fetch(import.meta.env.VITE_URL_ENDPOINT+"/api/tickets/"+selectedTicketId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(ticketData)
    });

    const result = response.json();

    return result
  } catch(error) {
    console.log("Error updating ticket: ", error)
  }
}

export default ticketUpdate;