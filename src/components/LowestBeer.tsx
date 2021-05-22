import { FC, useEffect, useState } from "react";

import useBeer from "../hooks/useBeer";

import styles from "../styles/LowestBeer.module.css";

const LowestBeer: FC = () => {
  const { lowestBeer } = useBeer();
  const [beerName, setBeerName] = useState("");

  useEffect(() => {
    if (lowestBeer?.name) {
      setBeerName(lowestBeer.name);
    }
  }, [lowestBeer]);

  return (
    <div className={styles.lowestBeer} style={{ opacity: lowestBeer ? 1 : 0 }}>
      <p>A cerveja mais barata é {beerName}</p>
    </div>
  );
};

export default LowestBeer;
