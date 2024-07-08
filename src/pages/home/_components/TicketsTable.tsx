import React from "react";
import { ITicketCreateEdit } from "../../../types/ticketTypes";
import formatDate from "../../../utils/formatDate";
import { MdDelete, MdEditSquare } from "react-icons/md";

export interface ITicketsTable extends ITicketCreateEdit {
  ticketId: string;
  userId: string;
  createdAt: string;
}

interface TicketsProps {
  tickets: ITicketsTable[];
  handleDeleteTicket: (ticketId: string) => void;
  handleClickEditTicket: (ticket: ITicketsTable) => void;
}

const thStyle = "border border-gray-500 px-4 py-1 text-left text-nowrap";
// Added py-2 to give some vertical padding
const tdStyle = "border border-gray-300 px-4 py-1 text-ellipsis overflow-hidden text-nowrap";
// Removed max-w and added overflow-hidden

const TicketsTable: React.FC<TicketsProps> = ({ tickets, handleDeleteTicket, handleClickEditTicket }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse bg-blue-50">
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
            <tr key={ticket.ticketId} className="hover:bg-blue-200">
              <td className={tdStyle}>{formatDate(ticket.createdAt)}</td>
              <td className={tdStyle}>{ticket.title}</td>
              <td className={`${tdStyle} max-w-xs md:max-w-md lg:max-w-lg`}>{ticket.description}</td>
              <td className={tdStyle}>{ticket.status}</td>
              <td className={tdStyle}>{ticket.priority}</td>
              <td className={tdStyle}>
                <div className="flex space-x-2">
                  <button onClick={() => handleClickEditTicket(ticket)}>
                    <MdEditSquare className="text-xl hover:text-green-600" />
                  </button>
                  <button onClick={() => handleDeleteTicket(ticket.ticketId)}>
                    <MdDelete className="text-xl hover:text-green-600" />
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