export interface Report {
  cost: number;
  convValue: number;
  roas: number;
}

export interface AdsData {
  adType: string;
  budget: number;
  endDate: string | null;
  id: number;
  report: Report;
  startDate: string;
  status: string;
  title: string;
}

export interface Ads {
  count: number;
  ads: AdsData[];
}
