import {
  useBeerState,
  useBeerDispatch,
} from "../components/BeerContext";
import { getAphabetLetterByIndex } from "../utils/getAlphabetic";

const useBeer = () => {
  const beerDispatch = useBeerDispatch();
  const state = useBeerState();

  const resetLowestBeer = () => {
    if (state.lowestBeer) beerDispatch({ type: "RESET_LOWEST_BEER" });
  };

  const addNewBeer = () => {
    beerDispatch({
      type: "ADD_BEER",
      payload: {
        addBeer: {
          name: `Cerveja ${getAphabetLetterByIndex(state.beerCount)}`,
          volume: 0,
          price: 0,
        },
      },
    });

    resetLowestBeer();
  };

  const getBeer = (id: number) => {
    return state.beers.find((beer) => beer.id === id);
  };

  const updateBeerName = (id: number, name: string) => {
    beerDispatch({
      type: "UPDATE_BEER_NAME",
      payload: {
        updateBeerName: { id, name },
      },
    });

    return true;
  };

  const updateBeerVolume = (id: number, volume: number) => {
    const value = Number(volume);

    if (isNaN(value)) return false;

    beerDispatch({
      type: "UPDATE_BEER_VOLUME",
      payload: {
        updateBeerVolume: { id, volume: value },
      },
    });

    return true;
  };

  const updateBeerPrice = (id: number, price: number) => {
    const value = Number(price);

    if (isNaN(value)) return false;

    beerDispatch({
      type: "UPDATE_BEER_PRICE",
      payload: {
        updateBeerPrice: { id, price: value },
      },
    });

    return true;
  };

  interface IObjectKeys {
    [key: string]: any;
  }

  interface BeerProp extends IObjectKeys {
    name: typeof updateBeerName;
    volume: typeof updateBeerVolume;
    price: typeof updateBeerPrice;
  }

  const updateBeer = (propName: string, id: number, value: number | string) => {
    const beerProp: BeerProp = {
      name: updateBeerName,
      volume: updateBeerVolume,
      price: updateBeerPrice,
    };

    if (beerProp[propName]) {
      beerProp[propName](id, Number(value)) && resetLowestBeer();
    }
  };

  const removeBeer = (id: number) => {
    beerDispatch({ type: "REMOVE_BEER", payload: { removeBeerId: id } });
    resetLowestBeer();
  };

  const resetBeer = () => {
    beerDispatch({ type: "RESET" });
  };

  const getLowest = () => {
    beerDispatch({ type: "GET_LOWEST_BEER" });

    return state.lowestBeer;
  };

  return {
    addNewBeer,
    getBeer,
    updateBeer,
    removeBeer,
    resetBeer,
    getLowest,
    ...state,
  };
};

export default useBeer;
