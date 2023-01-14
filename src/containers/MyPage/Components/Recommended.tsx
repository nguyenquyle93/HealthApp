import React from "react";
import { Wrapper, ItemColumn, ItemContainer } from "../MyPage.style";
import { Link } from "react-router-dom";
import MORNING from "../../../assets/icon/morning.png";
import SNACK from "../../../assets/icon/snack.png";
import SNACKBG from "../../../assets/icon/snack-bg.png";
import { COLUMN_PAGE } from "../../../settings/constants";

const HEADER_ITEMS = [
  {
    name: "Morning",
    image: MORNING,
    link: COLUMN_PAGE,
  },
  {
    name: "Lunch",
    image: MORNING,
    link: COLUMN_PAGE,
  },
  {
    name: "Dinner",
    image: MORNING,
    link: COLUMN_PAGE,
  },
  {
    name: "Snack",
    image: SNACK,
    link: COLUMN_PAGE,
  },
];

const Recommended = () => {
  return (
    <ItemContainer>
      {HEADER_ITEMS.map((item, index) => {
        return (
          <ItemColumn key={index}>
            <img className="space" src={item.image} />
            <span className="en">{item.name}</span>
          </ItemColumn>
        );
      })}
    </ItemContainer>
  );
};

export default React.memo(Recommended, () => false);
