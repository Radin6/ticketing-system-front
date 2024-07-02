import { ITicketsTable } from "../pages/home/_components/TicketsTable"

export const TicketsMocks : ITicketsTable[] = [
  {
    ticketId: "0b728d48-f31d-4d16-9e97-4a0ca2af2949",
    userId: "eb8a469d-b6aa-4d17-b371-746e27181611",
    status: "open",
    priority: "medium",
    title: "Ticket 1",
    description: "This is ticket 1",
    createdAt: "2024-09-02T06:21:14.060+00:00",
  },
  {
    ticketId: "0b728d48-f31d-4d16-1237-4a0ca2af2949",
    userId: "7a3756dd-9653-4209-b126-b3597f02f047",
    status: "closed",
    priority: "high",
    title: "Ticket 2",
    description: "This is ticket 2",
    createdAt: "2024-07-02T06:20:13.060+00:00",
  },
  {
    ticketId: "0b728d48-f31d-4d16-9e45-4a0ca2af2949",
    userId: "eb8a469d-b6aa-4d17-b371-746e27181611",
    status: "open",
    priority: "medium",
    title: "Ticket 3",
    description: "This is ticket 3",
    createdAt: "2024-08-02T06:20:30.060+00:00",
  },
]