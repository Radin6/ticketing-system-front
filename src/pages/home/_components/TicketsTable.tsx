import React from "react";
import { ITicketCreateEdit } from "../../../types/ticketTypes"
import formatDate from "../../../utils/formatDate";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

export interface ITicketsTable extends ITicketCreateEdit {
  ticketId: string;
  userId: string;
  createdAt: string;
}

interface TicketsProps {
  tickets: ITicketsTable[];
  handleDeleteTicket: (ticketId: string) => void;
  handleClickEditTicket: (ticket: ITicketCreateEdit) => void;
}

const thStyle = "border border-gray-500 px-4 text-nowrap text-ellipsis"
const tdStyle = "border border-gray-300 px-4 text-nowrap text-ellipsis overflow-hidden max-w-[100px] md:max-w-[200px] lg:max-w-[400px]"

const TicketsTable: React.FC<TicketsProps> = ({ tickets, handleDeleteTicket, handleClickEditTicket }) => {
  
  return (
    <table className="mb-5">
      <thead>
        <tr>
          <th className={thStyle}>Created At</th>
          <th className={thStyle}>Title</th>
          <th className={thStyle}>Description</th>
          <th className={thStyle}>Status</th>
          <th className={thStyle}>Priority</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket =>
          <tr key={ticket.ticketId}>
            <td className={tdStyle}>{formatDate(ticket.createdAt)}</td>
            <td className={tdStyle}>{ticket.title}</td>
            <td className={tdStyle}>{ticket.description}</td>
            <td className={tdStyle}>{ticket.status}</td>
            <td className={tdStyle}>{ticket.priority}</td>
            <td>
              <div className="flex">
                <button onClick={()=> handleClickEditTicket(ticket)}>
                  <MdEditSquare className="text-xl hover:text-green-600" />
                </button>
                <button onClick={() => handleDeleteTicket(ticket.ticketId)}>
                  <MdDelete className="text-xl hover:text-green-600" />
                </button>
              </div>
            </td>
          </tr>
        )}
      </tbody>

    </table>
  )
}

export default TicketsTable;