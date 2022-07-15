export interface ReportData {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

export interface MediaData {
  channel: string;
  date: string;
  imp: number;
  click: number;
  cost: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
}

export interface WeekListPropsType {
  weeksList: string[][];
  setWeek: React.Dispatch<React.SetStateAction<string[]>>;
  isVisible: boolean;
  onClick: (event: MouseEvent<Element, MouseEvent>) => void;
}
