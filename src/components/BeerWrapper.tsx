import { FC } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import BeerCard from "../components/BeerCard";
import useBeer from "../hooks/useBeer";

import styles from "../styles/BeerWrapper.module.css";

const BeerWrapper: FC = () => {
  const { beers } = useBeer();

  console.log(beers)

  return (
    <TransitionGroup className={styles.grid}>
      {beers.map((beer, idx) => (
        <CSSTransition key={beer.id} timeout={200} classNames="item">
          <BeerCard key={idx} beer={beer} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default BeerWrapper;
