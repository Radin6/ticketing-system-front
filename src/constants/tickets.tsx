export interface ISortOption {
  title: string;
  property: string;
}

export const SORT_OPTIONS = [
  {
    title: "By Status",
    property: "status"
  },
  {
    title: "By Priority",
    property: "priority"
  },
  {
    title: "By Date",
    property: "createdAt"
  }
]