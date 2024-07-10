import React from "react";
import { ITicketCreateEdit, TPriority, TStatus } from "../../../types/ticketTypes";
import formatDate from "../../../utils/formatDate";
import { MdDelete, MdEditSquare } from "react-icons/md";
import Modal from "../../../components/Modal";

export interface ITicketsTable extends ITicketCreateEdit {
  ticketId: string;
  userId: string;
  createdAt: string;
}

interface TicketsProps {
  tickets: ITicketsTable[];
  handleDeleteTicket: (ticketId: string) => void;
  handleClickEditTicket: (ticket: ITicketsTable) => void;
  setTicketExpanded: (ticket: ITicketsTable)=> void;
}

const ticketStatus = (status: TStatus) => {

  const statusStyle = {
    open: " bg-green-200 px-1 w-fit",
    "in-progress": " bg-blue-200 px-1 w-fit",
    closed: " bg-red-200 px-1 w-fit"
  }

  return (
    <p className={`rounded-md ${statusStyle[status]}`}>{status}</p>
  )
}

const ticketPriority = (priority: TPriority) => {
  const priorityStyle = {
    low: " text-blue-500",
    medium: " text-yellow-500",
    high: " text-red-500"
  }
  return (
    <p className={` ${priorityStyle[priority]}`}>{priority}</p>
  )
}

const thStyle = "border border-gray-500 px-4 py-1 text-left text-nowrap";
const tdStyle = "border border-gray-300 px-4 py-1 text-ellipsis overflow-hidden text-nowrap";

const TicketsTable: React.FC<TicketsProps> = ({ tickets, handleDeleteTicket, handleClickEditTicket, setTicketExpanded }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-blue-50">
        <thead className="bg-slate-300">
          <tr>
            <th className={thStyle}>Created At</th>
            <th className={thStyle}>Title</th>
            <th className={thStyle}>Description</th>
            <th className={thStyle}>Status</th>
            <th className={thStyle}>Priority</th>
            <th className={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.ticketId} onClick={()=>{setTicketExpanded(ticket)}} className="hover:bg-blue-200">
              <td className={tdStyle}>{formatDate(ticket.createdAt)}</td>
              <td className={tdStyle+" max-w-[200px] lg:max-w-[250px]"}>{ticket.title}</td>
              <td className={tdStyle+" max-w-[200px] lg:max-w-[470px]"}>{ticket.description}</td>
              <td className={tdStyle}>{ticketStatus(ticket.status)}</td>
              <td className={tdStyle}>{ticketPriority(ticket.priority)}</td>
              <td className={tdStyle}>
                <div className="flex space-x-2">
                  <button onClick={() => handleClickEditTicket(ticket)}>
                    <MdEditSquare className="text-xl hover:text-blue-600" />
                  </button>
                  <button onClick={() => handleDeleteTicket(ticket.ticketId)}>
                    <MdDelete className="text-xl hover:text-blue-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;