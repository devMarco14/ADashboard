export const INITIAL_AD_DATA = [
  {
    id: 1,
    adType: 'web',
    title: '광고 1234',
    budget: 500000,
    status: 'active',
    startDate: '2020-10-19T00:00:00',
    endDate: null,
    report: {
      cost: 267144117,
      convValue: 1157942685,
      roas: 433,
    },
  },
];
export const ADD_DATA = {
  id: Math.floor(Math.random() * 1000),
  adType: 'web',
  title: '',
  budget: 0,
  status: 'active',
  startDate: '달력',
  endDate: null,
  report: {
    cost: 0,
    convValue: 0,
    roas: 0,
  },
};
