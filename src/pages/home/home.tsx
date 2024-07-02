import HomeLayout from "../../components/Layout/HomeLayout";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import ticketCreate from "../../services/tickets/ticketCreate"
import { ITicketCreate, TPriority } from '../../types/ticketTypes';
import getTicketsByMe from "../../services/tickets/getTicketsByMe";
import TicketsTable, { ITicketsTable } from "./_components/TicketsTable";
import Input from "../../components/Input";
//import { TicketsMocks } from "../../mocks/TicketsMocks";

// const CreateTicketModal = () => {
//   <Modal setShowModal={setShowModal}>
//     <table>1</table>
//   </Modal>
// }

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<TPriority|string>("")
  const [tickets, setTickets] = useState<ITicketsTable[]>([])

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await getTicketsByMe()
      // setTickets(TicketsMocks)
      if (response?.ticket) {
        console.log(response.ticket)
        setTickets(response.ticket)
      }
    }

    fetchTickets()
  }, [])

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCreateTicket = async (e: any) => {
    e.preventDefault();
    const ticketData: ITicketCreate = {
      title: title,
      description: description,
      priority: priority
    }

    const response = await ticketCreate(ticketData)

    console.log("creating ticket: ", response)
    setTitle("")
    setDescription("")
    setPriority("low")
    setShowModal(false);
  }

  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col border rounded-md bg-blue-100 p-6">
          {tickets?.length && <TicketsTable tickets={tickets} />}
          <Button onClick={handleOpenModal}>
            Create New Ticket
          </Button>
          {showModal &&
            <Modal setShowModal={setShowModal}>
              <form className="flex flex-col my-2" onSubmit={handleCreateTicket}>
                <label htmlFor="title" className="py-1">
                  Title
                </label>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  id="title"
                  required
                />
                <label htmlFor="description" className="py-1">
                  Description
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  id="description"
                  className="border px-2 py-1 rounded-md bg-slate-100"
                  required
                />
                <label htmlFor="priority" className="py-1">
                  Priority
                </label>
                <select
                  onChange={(e) => setPriority(e.target.value)}
                  value={priority}
                  id="priority"
                  className="border px-2 py-1 rounded-md bg-slate-100"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <Button type="submit" className="mt-6 mx-auto">
                  Create Ticket
                </Button>
              </form>
            </Modal>
          }
        </div>
      </div>
    </HomeLayout>

  )
}

export default Home;