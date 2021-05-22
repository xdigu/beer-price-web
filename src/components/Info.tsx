import { FC } from "react";

import styles from "../styles/Info.module.css";

const Info: FC = () => {
  return (
    <>
      <h2 className={styles.title}>Beer Price</h2>

      <h1 className={styles.description}>
        Maneira simples de saber qual cerveja é a mais barata.
      </h1>
    </>
  );
};

export default Info;
