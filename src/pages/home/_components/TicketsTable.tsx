import React from "react";
import { TPriority, TStatus } from "../../../types/ticketTypes"
import formatDate from "../../../utils/formatDate";

export interface ITicketsTable {
  ticketId: string;
  userId: string;
  status: TStatus;
  priority: TPriority;
  title: string;
  description: string;
  createdAt: string;
}

interface TicketsProps {
  tickets: ITicketsTable[];
}

const thStyle = "border border-gray-300 px-4"

const TicketsTable: React.FC<TicketsProps> = ({tickets}) => {
  return (
    <table className="table-auto">
      <tr>
        <th className={thStyle}>Created At</th>
        <th className={thStyle}>Title</th>
        <th className={thStyle}>Description</th>
        <th className={thStyle}>Status</th>
        <th className={thStyle}>Priority</th>
      </tr>
      {tickets.map(ticket => 
        <tr key={ticket.ticketId}>
          <td>{formatDate(ticket.createdAt)}</td>
          <td>{ticket.title}</td>
          <td>{ticket.description}</td>
          <td>{ticket.status}</td>
          <td>{ticket.priority}</td>
        </tr>
      )}
    </table>
  )
}

export default TicketsTable;