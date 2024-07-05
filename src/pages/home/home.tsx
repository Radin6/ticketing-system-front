import HomeLayout from "../../components/Layout/HomeLayout";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import ticketCreate from "../../services/tickets/ticketCreate"
import ticketUpdate from "../../services/tickets/ticketUpdate"
import { ITicketCreateEdit, TPriority, TStatus } from '../../types/ticketTypes';
import getTicketsByMe from "../../services/tickets/getTicketsByMe";
import TicketsTable, { ITicketsTable } from "./_components/TicketsTable";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import ticketDelete from "../../services/tickets/ticketDelete";
//import { TicketsMocks } from "../../mocks/TicketsMocks";

function Home() {
  const [showModal, setShowModal] = useState(false);

  // CreateTicket states
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<TPriority>()

  // EditTicket states
  const [status, setStatus] = useState<TStatus>();
  const [selectedTicketId, setSelectedTicketId] = useState("")
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [tickets, setTickets] = useState<ITicketsTable[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await getTicketsByMe()

        if (response?.ticket) {
          setTickets(response.ticket)
        }

      } catch (error) {
        console.log("Error fetch: ", error)
      }
    }

    fetchTickets()
  }, [isLoading])

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleReset = () => {
    setTitle("")
    setDescription("")
    setPriority("low")
    setStatus("open")
    setSelectedTicketId("")
    setShowModal(false);
    setIsLoading(false);
    setIsEditing(false);
  }

  const handleCreateTicket = async (e: any) => {
    setIsLoading(true)
    e.preventDefault();
    const ticketData: ITicketCreateEdit = {
      title: title,
      description: description,
      priority: priority
    }

    const response = await ticketCreate(ticketData)

    console.log("creating ticket: ", response)
    handleReset();
  }

  const handleClickEditTicket = (ticket: ITicketsTable) => {
    setTitle(ticket.title);
    setDescription(ticket.description);
    setPriority(ticket.priority);
    setStatus(ticket.status);
    setSelectedTicketId(ticket.ticketId);
    setIsEditing(true);
    setShowModal(true);
  }

  const handleDeleteTicket = async (ticketId: string) => {
    try {
      const response = await ticketDelete(ticketId)
      const filteredTickets = tickets.filter(ticket => ticket.ticketId !== ticketId)
      setTickets(filteredTickets)
      console.log(response)
    } catch (error) {
      console.log("Error on handle delete: ", error)
    }

  }

  const handleEditTicket = async (e: any) => {
    setIsLoading(true)
    e.preventDefault();
    const ticketData: ITicketCreateEdit = {
      title: title,
      description: description,
      priority: priority,
      status: status
    }

    const response = await ticketUpdate(ticketData, selectedTicketId);
    console.log(response)
    handleReset();
  }

  const handleOnClose = () => {
    setShowModal(false);
    handleReset()
  }

  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col border rounded-md bg-blue-100 p-6 m-4 max-w-full">
          {tickets?.length
            ? <TicketsTable tickets={tickets} handleDeleteTicket={handleDeleteTicket} handleClickEditTicket={handleClickEditTicket} />
            : <Loading className="w-[300px] h-[150px]" />
          }
          <Button onClick={handleOpenModal}>
            Create New Ticket
          </Button>
          {showModal &&
            <Modal onClose={handleOnClose}>
              <form className="flex flex-col my-2" onSubmit={isEditing ? handleEditTicket : handleCreateTicket}>
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
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                {isEditing && <>
                  <label htmlFor="status" className="py-1">
                    Status
                  </label>
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    id="status"
                    className="border px-2 py-1 rounded-md bg-slate-100"
                    required
                  >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                    <option value="in-progress">In-Progress</option>
                  </select>
                </>}
                <Button type="submit" className="mt-6 mx-auto" disabled={isLoading}>
                  {isLoading ? <Loading /> : (isEditing ? "Update Ticket" : "Create Ticket")}
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