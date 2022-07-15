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

export interface SelectBoxPropsType {
  week: string[];
  weeksList: string[][];
  setWeek: React.Dispatch<React.SetStateAction<string[]>>;
}
