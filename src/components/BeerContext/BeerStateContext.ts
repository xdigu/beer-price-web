import { createContext } from "react";
import { State } from "../../typings/beerContext";

const BeerStateContext = createContext<State | undefined>(undefined);

export default BeerStateContext;
