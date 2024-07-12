import React from "react";
import Modal from "../../../components/Modal"
import { ITicketsTable } from "./TicketsTable";

interface IModalTicketExpanded {
  onClose: () => void;
  ticketExpanded: ITicketsTable
}

const ModalTicketExpanded: React.FC<IModalTicketExpanded> = ({ onClose, ticketExpanded }) => {

  return (
    <Modal onClose={onClose}>
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
    </Modal >
  )
}

export default ModalTicketExpanded;