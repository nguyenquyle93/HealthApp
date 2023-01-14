import React from "react";
import MOREICON from "../../../assets/icon/more.png";
import { DropdownMenu } from "../AppLayout.style";

const items = [
  {
    label: "自分の記録",
    key: 0,
    // link: MY_PAGE,
  },
  {
    label: "体重グラフ",
    key: 1,
    // link: MY_RECORD,
  },
  {
    label: "目標",
    key: 2,
    // link: COLUMN_PAGE,
  },
  {
    label: "選択中のコース",
    key: 3,
    // link: "",
  },
  {
    label: "コラム一覧",
    key: 4,
    // link: "",
  },
  {
    label: "設定",
    key: 5,
    // link: "",
  },
];

const HeaderLayout = () => {
  return (
    <DropdownMenu menu={{ items }} trigger={["click"]} placement="bottomRight">
      <img className="footer-link icon" src={MOREICON} />
    </DropdownMenu>
  );
};

export default React.memo(HeaderLayout, () => false);
