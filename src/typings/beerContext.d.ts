import type { Beer } from "./Beer";

export interface State {
  beers: Beer[];
  lowestBeer: Beer | null;
  beerCount: number;
}

export interface AddBeer {
  type: "ADD_BEER";
  payload: {
    addBeer: Omit<Beer, "id">;
  };
}

export interface UpdateBeerName {
  type: "UPDATE_BEER_NAME";
  payload: {
    updateBeerName: Omit<Beer, "price" | "volume">;
  };
}

export interface UpdateBeerVolume {
  type: "UPDATE_BEER_VOLUME";
  payload: {
    updateBeerVolume: Omit<Beer, "name" | "price">;
  };
}

export interface UpdateBeerPrice {
  type: "UPDATE_BEER_PRICE";
  payload: {
    updateBeerPrice: Omit<Beer, "name" | "volume">;
  };
}

export interface RemoveBeer {
  type: "REMOVE_BEER";
  payload: {
    removeBeerId: Beer["id"];
  };
}

export interface ResetLowest {
  type: "RESET_LOWEST_BEER";
}

export interface GetLowestBeer {
  type: "GET_LOWEST_BEER";
}

export interface Reset {
  type: "RESET";
}

export type Action =
  | AddBeer
  | UpdateBeerName
  | UpdateBeerVolume
  | UpdateBeerPrice
  | RemoveBeer
  | ResetLowest
  | GetLowestBeer
  | Reset;

export type Dispatch = (action: Action) => void;
