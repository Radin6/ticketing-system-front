import HomeLayout from "../../components/Layout/HomeLayout";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import ticketCreate from "../../services/tickets/ticketCreate"
import { ITicketCreate, TPriority } from '../../types/ticketTypes';
import getTicketsByMe from "../../services/tickets/getTicketsByMe";

// const CreateTicketModal = () => {
//   <Modal setShowModal={setShowModal}>
//     <table>1</table>
//   </Modal>
// }

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<TPriority>("low")
  const [tickets, setTickets] = useState({})

  // useEffect(() =>{
  //   const fetchTickets = async () => {
  //     const response = await getTicketsByMe()
  //     if (response?.ticket) {
  //       console.log("tickets response: ", response.ticket)
  //     }
  //   }

  //   fetchTickets()
  // },[])

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCreateTicket = async (e: any) => {
    e.preventDefault();
    const ticketData : ITicketCreate = {
      title: title,
      description: description,
      priority: priority
    }

    const response = await ticketCreate(ticketData)

    console.log("creating ticket: ",response)
    
  }

  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col border rounded-md bg-blue-100 p-6">
          {tickets && "There are tickets"}
          <Button onClick={handleOpenModal}>
            Create New Ticket
          </Button>
          {showModal &&
            <Modal setShowModal={setShowModal}>
              <form className="flex flex-col my-2" onSubmit={handleCreateTicket}>
                <label htmlFor="title">
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  id="title"
                  className="border"
                  required
                />
                <label htmlFor="description" className="border">
                  Description
                </label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  id="description"
                  className="border"
                  required
                />
                <label htmlFor="priority" className="border">
                  Priority
                </label>
                <select
                  onChange={(e) => setPriority(e.target.value)}
                  value={priority}
                  id="priority"
                  className="border"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <button type="submit" className="bg-blue-500 p-3 rounded-md mt-6">
                  Create Ticket
                </button>
              </form>
            </Modal>
          }
        </div>
      </div>
    </HomeLayout>

  )
}

export default Home;