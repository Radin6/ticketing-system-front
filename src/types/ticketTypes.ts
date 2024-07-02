export interface ITicketCreate {
  description: string;
  priority: TPriority;
  title: string;
  status?: TStatus;
}

export type TPriority = "low" | "medium" | "high" | string;

export type TStatus = "open" | "closed" | "in-progress";