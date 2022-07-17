import React from 'react';
import { WEEK_CHANGE_TYPE, INITIAL_WEEK_STATE } from 'libs/utils/constants';

interface ActionType<T> {
  type: string;
  payload: T;
}

type LoadingState = {
  [key in string]?: boolean;
};

interface WeekContextType {
  currentWeek: string[];
  changeWeek: (value: ActionType<string[]>) => void;
}

interface LoadContextType {
  componentLoadingState: LoadingState;
  changeLoadingState: (value: ActionType<LoadingState>) => void;
}

function weekReducer(state: string[], action: ActionType<string[]>) {
  switch (action.type) {
    case WEEK_CHANGE_TYPE:
      return state.slice(state.length).concat(action.payload);
    default:
      return state;
  }
}

function loadingReducer(state: LoadingState, action: ActionType<LoadingState>) {
  switch (action.type) {
    case 'TEST':
      // console.log(state, action.payload, { ...state, ...action.payload });
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const WeekContext = React.createContext<WeekContextType>({
  currentWeek: INITIAL_WEEK_STATE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeWeek: () => {},
});

export const LoadContext = React.createContext<LoadContextType>({
  componentLoadingState: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLoadingState: () => {},
});

export function WeekProvider({ children }: { children: React.ReactNode }) {
  const [weekState, dispatchWeek] = React.useReducer(
    weekReducer,
    INITIAL_WEEK_STATE,
  );

  const changeWeek = React.useCallback(
    (value: ActionType<string[]>): void => {
      dispatchWeek(value);
    },
    [weekState],
  );

  const memoedValue = React.useMemo(
    () => ({
      currentWeek: weekState,
      changeWeek,
    }),
    [weekState],
  );

  return (
    <WeekContext.Provider value={memoedValue}>{children}</WeekContext.Provider>
  );
}

export function LoadProvider({ children }: { children: React.ReactNode }) {
  const [loadingState, dispatchLoading] = React.useReducer(loadingReducer, {});

  const changeLoadingState = React.useCallback(
    (value: ActionType<LoadingState>): void => {
      dispatchLoading(value);
    },
    [loadingState],
  );

  const memoedValue = React.useMemo(
    () => ({
      componentLoadingState: loadingState,
      changeLoadingState,
    }),
    [loadingState],
  );
  return (
    <LoadContext.Provider value={memoedValue}>{children}</LoadContext.Provider>
  );
}
