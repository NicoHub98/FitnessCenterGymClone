import data from "./cardsClasses.json";
import { useState } from "react";

export const useFilter = () => {
  const cards = data.cards;

  const [filter, setFilter] = useState({
    turno: "mañana",
  });

  const filterCards = (cards) => {
    return cards.filter((card) => {
      const turno = card.turno === filter.turno;
      return turno;
    });
  };
  const filteredCards = filterCards(cards);

  return {
    filteredCards,
    filter,
    setFilter,
  };
};
