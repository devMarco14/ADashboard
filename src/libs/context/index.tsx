import React from 'react';
import { WEEK_CHANGE_TYPE, INITIAL_WEEK_STATE } from 'libs/utils/constants';

type ActionType = {
  type: string;
  payload: string[];
};

type ContextType = {
  currentWeek: string[];
  changeWeek: (value: ActionType) => void;
};

function reducer(state: string[], action: ActionType) {
  switch (action.type) {
    case WEEK_CHANGE_TYPE:
      return state.slice(state.length).concat(action.payload);
    default:
      return state;
  }
}

export const WeekContext = React.createContext<ContextType>({
  currentWeek: INITIAL_WEEK_STATE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeWeek: () => {},
});

export function WeekProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_WEEK_STATE);

  const changeWeek = React.useCallback(
    (value: ActionType): void => {
      dispatch(value);
    },
    [state],
  );

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
