import React from 'react';
import {
  WEEK_CHANGE_TYPE,
  INITIAL_WEEK_STATE,
  GRAPH_LOADING_TYPE,
} from 'libs/utils/constants';

interface ActionType<T> {
  type: string;
  payload: T;
}

interface WeekActionType<T> {
  type: string;
  payload: {
    currentWeek: T;
    index: number;
  };
}

type LoadingState = {
  [key in string]?: boolean;
};

type CurrentWeekType = {
  currentWeek: string[];
  index: number;
};

interface WeekContextType {
  currentWeekData: CurrentWeekType;
  changeWeek: (value: WeekActionType<string[]>) => void;
}

interface LoadContextType {
  componentLoadingState: LoadingState;
  changeLoadingState: (value: ActionType<LoadingState>) => void;
}

function weekReducer(state: CurrentWeekType, action: WeekActionType<string[]>) {
  switch (action.type) {
    case WEEK_CHANGE_TYPE:
      return {
        ...state,
        currentWeek: state.currentWeek
          .slice(state.currentWeek.length)
          .concat(action.payload.currentWeek),
        index: action.payload.index,
      };
    default:
      return state;
  }
}

function loadingReducer(state: LoadingState, action: ActionType<LoadingState>) {
  switch (action.type) {
    case GRAPH_LOADING_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const WeekContext = React.createContext<WeekContextType>({
  currentWeekData: {
    currentWeek: INITIAL_WEEK_STATE,
    index: 0,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeWeek: () => {},
});

export const LoadContext = React.createContext<LoadContextType>({
  componentLoadingState: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLoadingState: () => {},
});

export function WeekProvider({ children }: { children: React.ReactNode }) {
  const [weekState, dispatchWeek] = React.useReducer(weekReducer, {
    currentWeek: INITIAL_WEEK_STATE,
    index: 0,
  });

  const changeWeek = React.useCallback(
    (value: WeekActionType<string[]>): void => {
      dispatchWeek(value);
    },
    [weekState],
  );

  const memoedValue = React.useMemo(
    () => ({
      currentWeekData: weekState,
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
