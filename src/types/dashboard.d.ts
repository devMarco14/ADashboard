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

export type ReportType =
  | 'cost'
  | 'imp'
  | 'click'
  | 'convValue'
  | 'ctr'
  | 'cvr'
  | 'cpc'
  | 'cpa'
  | 'roas'
  | 'conv';

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
  revenue?: number;
}

export interface WeekListPropsType {
  weeksList: string[][];
  setWeek: (value: string[]) => void;
  isVisible: boolean;
  onClick: (event: MouseEvent<Element, MouseEvent>) => void;
}
