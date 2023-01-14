import React from "react";
import { Wrapper, ItemColumn, ItemContainer } from "../ColumnPage.style";
import { Link } from "react-router-dom";
import SPACE from "../../../assets/icon/space.png";
import { COLUMN_PAGE } from "../../../settings/constants";

const HEADER_ITEMS = [
  {
    name: "RECOMMENDED",
    name2: "COLUMN",
    jaName: "オススメ",
    link: COLUMN_PAGE,
  },
  {
    name: "RECOMMENDED",
    name2: "DIET",
    jaName: "ダイエット",
    link: COLUMN_PAGE,
  },
  {
    name: "RECOMMENDED",
    name2: "BEAUTY",
    jaName: "美容",
    link: COLUMN_PAGE,
  },
  {
    name: "RECOMMENDED",
    name2: "HEALTH",
    jaName: "健康",
    link: COLUMN_PAGE,
  },
];

const Recommended = () => {
  return (
    <ItemContainer>
      {HEADER_ITEMS.map((item, index) => {
        return (
          <ItemColumn key={index}>
            <span className="en">{item.name}</span>
            <span className="en">{item.name2}</span>
            <img className="space" src={SPACE} />
            <span className="ja">{item.jaName}</span>
          </ItemColumn>
        );
      })}
    </ItemContainer>
  );
};

export default React.memo(Recommended, () => false);
