import { useState, useEffect } from "react";
import ticketCreate from "../../services/tickets/ticketCreate"
import ticketUpdate from "../../services/tickets/ticketUpdate"
import ticketDelete from "../../services/tickets/ticketDelete";
import getTicketsByMe from "../../services/tickets/getTicketsByMe";
import { TPriority, TStatus, ITicketCreateEdit } from "../../types/ticketTypes";
import { ITicketsTable } from "./_components/TicketsTable";
import toast from "react-hot-toast";

function useHomeLogic() {
  const [showModal, setShowModal] = useState(false);

  // CreateTicket states
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TPriority>("low");

  // EditTicket extra states
  const [status, setStatus] = useState<TStatus>("open");
  const [selectedTicketId, setSelectedTicketId] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Ticket Expanded Info
  const [ticketExpanded, setTicketExpanded] = useState<ITicketsTable|null>(null)

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
      priority: priority,
      status: "open"
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

  return {
    tickets,
    setTickets,
    isLoading,
    showModal,
    title,
    setTitle,
    description,
    setDescription,
    priority,
    setPriority,
    status,
    setStatus,
    selectedTicketId,
    isEditing,
    ticketExpanded,
    setTicketExpanded,
    fetchTicketsTrigger,
    setFetchTicketsTrigger,
    handleOpenModal,
    handleClickEditTicket,
    handleDeleteTicket,
    handleEditTicket,
    handleOnClose,
    handleCreateTicket
  };
}

export default useHomeLogic;