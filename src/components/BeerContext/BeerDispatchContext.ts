import { createContext } from "react";
import { Dispatch } from "../../typings/beerContext";

const BeerDispatchContext = createContext<Dispatch | undefined>(undefined);

export default BeerDispatchContext;
