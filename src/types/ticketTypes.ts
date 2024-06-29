export interface ITicketCreate {
  description: string;
  priority: TPriority;
  title: string;
  status?: TSatatus;
}

type TPriority = "low" | "medium" | "high";

type TSatatus = "open" | "closed" | "in-progress";