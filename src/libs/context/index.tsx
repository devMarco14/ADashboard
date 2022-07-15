import React from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'WEEK_REQUESTED':
      return action.payload;
    default:
      return state;
  }
}

export const WeekContext = React.createContext<any>({
  currentWeek: ['1900-01-01', '1900-12-31'],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeWeek: () => {},
});

export function WeekProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, []);

  const changeWeek = React.useCallback((value: any): void => {
    dispatch(value);
  }, []);

  const memoedValue = React.useMemo(
    () => ({
      currentWeek: state,
      changeWeek,
    }),
    [state],
  );

  return (
    <WeekContext.Provider value={memoedValue}>{children}</WeekContext.Provider>
  );
}

export default WeekProvider;
