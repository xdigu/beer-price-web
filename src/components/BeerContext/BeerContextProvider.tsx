import { FC, useReducer, useContext } from "react";
import BeerDispatchContext from "./BeerDispatchContext";
import BeerStateContext from "./BeerStateContext";
import beerContextReducer, { initialState } from "./BeerReducer";

const BeerContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(beerContextReducer, initialState);

  return (
    <BeerStateContext.Provider value={state}>
      <BeerDispatchContext.Provider value={dispatch}>
        {children}
      </BeerDispatchContext.Provider>
    </BeerStateContext.Provider>
  );
};

const useBeerState = () => {
  const ctx = useContext(BeerStateContext);

  if (ctx === undefined)
    throw new Error("useBeerState must be used within a BeerStateContext");

  return ctx;
};

const useBeerDispatch = () => {
  const ctx = useContext(BeerDispatchContext);

  if (ctx === undefined)
    throw new Error(
      "useBeerDispatch must be used within a BeerDispatchContext"
    );

  return ctx;
};

export { BeerContextProvider, useBeerState, useBeerDispatch };
