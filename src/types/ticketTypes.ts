export interface ITicketCreate {
  description: string;
  priority: TPriority;
  title: string;
  status?: TSatatus;
}

export type TPriority = "low" | "medium" | "high";

export type TSatatus = "open" | "closed" | "in-progress";