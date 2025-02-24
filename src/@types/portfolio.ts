export type PortfolioInterface = {
  title: string;
  team: boolean;
  startDate: string;
  endDate?: string;
  role: string;
  description: string;
  contents: string[];
  webUrl?: string;
  stacks: string[];
  importance: number;
};
