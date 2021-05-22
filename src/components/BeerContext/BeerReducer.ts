import { State, Action } from "../../typings/beerContext";
import { getAphabetLetterByIndex } from "../../utils/getAlphabetic";

export const initialState: State = {
  beers: [
    {
      name: `Cerveja ${getAphabetLetterByIndex(0)}`,
      volume: null,
      price: null,
      id: 0,
    },
    {
      name: `Cerveja ${getAphabetLetterByIndex(1)}`,
      volume: null,
      price: null,
      id: 1,
    },
  ],
  lowestBeer: null,
  beerCount: 2,
};

const beerContextReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_BEER":
      return {
        ...state,
        beers: [
          ...state.beers,
          { ...action.payload.addBeer, id: state.beerCount },
        ],
        beerCount: state.beerCount + 1,
      };

    case "UPDATE_BEER_NAME":
      return {
        ...state,
        beers: [
          ...state.beers.map((el) =>
            el.id === action.payload.updateBeerName.id
              ? { ...el, name: action.payload.updateBeerName.name }
              : el
          ),
        ],
      };

    case "UPDATE_BEER_VOLUME":
      return {
        ...state,
        beers: [
          ...state.beers.map((el) =>
            el.id === action.payload.updateBeerVolume.id
              ? { ...el, volume: action.payload.updateBeerVolume.volume }
              : el
          ),
        ],
      };

    case "UPDATE_BEER_PRICE":
      return {
        ...state,
        beers: [
          ...state.beers.map((el) =>
            el.id === action.payload.updateBeerPrice.id
              ? { ...el, price: action.payload.updateBeerPrice.price }
              : el
          ),
        ],
      };

    case "REMOVE_BEER":
      return {
        ...state,
        beers: [
          ...state.beers.filter((el) => el.id !== action.payload.removeBeerId),
        ],
        lowestBeer: null,
      };

    case "RESET_LOWEST_BEER":
      return {
        ...state,
        lowestBeer: initialState.lowestBeer,
      };

    case "GET_LOWEST_BEER":
      return {
        ...state,
        lowestBeer: state.beers.length
          ? state.beers.reduce((prev, curr) => {
              if (prev.price && prev.volume && curr.price && curr.volume) {
                return prev.price / prev.volume < curr.price / curr.volume
                  ? prev
                  : curr;
              }

              return curr;
            })
          : null,
      };

    case "RESET":
      return initialState;

    default:
      throw new Error("Need to pass a valid type");
  }
};

export default beerContextReducer;
