export interface ITicketCreateEdit {
  description: string;
  priority: TPriority;
  title: string;
  status: TStatus;
}

export type TPriority = "low" | "medium" | "high";

export type TStatus = "open" | "closed" | "in-progress";