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
import toast from "react-hot-toast";
import TicketStats from "./_components/TicketStats";
//import { TicketsMocks } from "../../mocks/TicketsMocks";

function Home() {
  const [showModal, setShowModal] = useState(false);

  // CreateTicket states
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TPriority>();

  // EditTicket extra states
  const [status, setStatus] = useState<TStatus>();
  const [selectedTicketId, setSelectedTicketId] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Ticket Expanded Info
  const [ticketExpanded, setTicketExpanded] = useState<ITicketsTable>()

  const [tickets, setTickets] = useState<ITicketsTable[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchTicketsTrigger, setFetchTicketsTrigger] = useState<boolean>(false);

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
  }, [fetchTicketsTrigger])

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

    if (!response.message) {
      toast.success("New ticket created")
      setFetchTicketsTrigger(!fetchTicketsTrigger);
    }

    console.log(response)
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

    const response = await ticketDelete(ticketId)

    if (!response.message) {
      const filteredTickets = tickets.filter(ticket => ticket.ticketId !== ticketId)
      setTickets(filteredTickets)
      toast.success("Ticket has been deleted")
    }

    console.log(response)
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

    if (!response.message) {
      setFetchTicketsTrigger(!fetchTicketsTrigger);
      toast.success("Ticket edited")
    }

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
          <div className="my-4">
            <TicketStats total={tickets.length} />
            {ticketExpanded &&
              <Modal onClose={() => setTicketExpanded()}>
                <table className="m-9">
                  <tr>
                    <th className="px-5">Created AT</th>
                    <td>{ticketExpanded.createdAt}</td>
                  </tr>
                  <tr>
                    <th className="px-5">Title</th>
                    <td>{ticketExpanded.title}</td>
                  </tr>
                  <tr>
                    <th className="px-5">Description</th>
                    <td>{ticketExpanded.description}</td>
                  </tr>
                  <tr>
                    <th className="px-5">Status</th>
                    <td>{ticketExpanded.status}</td>
                  </tr>
                  <tr>
                    <th className="px-5">Priority</th>
                    <td>{ticketExpanded.priority}</td>
                  </tr>
                </table>
              </Modal>
            }
            {tickets?.length
              ? <TicketsTable
                tickets={tickets}
                handleDeleteTicket={handleDeleteTicket}
                handleClickEditTicket={handleClickEditTicket}
                setTicketExpanded={setTicketExpanded}
              />
              : <Loading className="w-[300px] h-[150px]" />
            }
          </div>
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
                  onChange={(e) => setPriority(e.target.value as TPriority)}
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
                    onChange={(e) => setStatus(e.target.value as TStatus)}
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