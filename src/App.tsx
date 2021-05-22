import { FC } from "react";

import { BeerContextProvider } from "./components/BeerContext";
import useBeer from "./hooks/useBeer";

import styles from "./styles/Beer.module.css";
import Info from "./components/Info";
import BeerWrapper from "./components/BeerWrapper";
import LowestBeer from "./components/LowestBeer";

const Beer: FC = () => {
  const { addNewBeer, getLowest, resetBeer } = useBeer();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Info />
        <LowestBeer />
        <BeerWrapper />

        <div className={styles.footer}>
          <button onClick={addNewBeer}>Adicionar</button>
          <button onClick={getLowest}>Mais Barata</button>
          <button onClick={resetBeer}>Resetar</button>
        </div>
      </main>
    </div>
  );
};

const App: FC = () => {
  return (
    <BeerContextProvider>
      <Beer />
    </BeerContextProvider>
  );
};

export default App;
