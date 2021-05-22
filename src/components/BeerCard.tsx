import { ChangeEvent, FC, useState, memo } from "react";

import type { Beer } from "../typings/Beer";
import useBeer from "../hooks/useBeer";

import styles from "../styles/BeerCard.module.css";

interface Props {
  beer: Beer;
}

const BeerCard: FC<Props> = ({ beer }) => {
  const { updateBeer, removeBeer } = useBeer();
  const [togleName, setTogleName] = useState(false);
  const { name, price, volume, id } = beer;

  console.log(name)

  const togleChangeName = () => setTogleName(!togleName);

  const _handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: eventName, value } = event.currentTarget;

    updateBeer(eventName, id, value);
  };

  const _handleRemoveBeer = (id: number) => {
    removeBeer(id);
  };

  return (
    <div>
      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={() => _handleRemoveBeer(id)}
        >
          x
        </button>

        <label htmlFor={`name ${id}`}></label>
        <input
          className={styles.inputName}
          autoFocus
          name="name"
          id={`name ${id}`}
          onBlur={togleChangeName}
          value={name}
          onChange={_handleInputChange}
        />

        <label htmlFor={`volume ${id}`}></label>

        <input
          type=""
          placeholder="volume"
          id={`volume ${id}`}
          name="volume"
          value={volume ?? ""}
          onChange={_handleInputChange}
        />

        <label htmlFor={`price ${id}`}></label>

        <input
          type="text"
          placeholder="valor"
          id={`price ${id}`}
          name="price"
          value={price ?? ""}
          onChange={_handleInputChange}
        />
      </div>
    </div>
  );
};

export default memo(BeerCard);
