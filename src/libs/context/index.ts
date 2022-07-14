import React from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'WEEK_REQUESTED':
      return action.payload;
    default:
      return state;
  }
}

export const WeekContext = React.createContext({
  currentWeek: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeWeek: () => {},
});

function WeekProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, []);

  const changeWeek = (value: any): void => {
    dispatch(value);
  };

  return (
    <WeekContext.Provider>
  );
}
