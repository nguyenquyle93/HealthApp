import React from "react";
import { HeaderContainer } from "../AppLayout.style";
import { Link } from "react-router-dom";
import APPICON from "../../../assets/icon/app.png";
import MYPAGEICON from "../../../assets/icon/mypage.png";
import RECORDICON from "../../../assets/icon/myrecord.png";
import NOTIICON from "../../../assets/icon/noti.png";
import { MY_PAGE, MY_RECORD, COLUMN_PAGE } from "../../../settings/constants";
import DropDownMenu from "./DropDownMenu";

const HEADER_ITEMS = [
  {
    name: "自分の記録",
    icon: MYPAGEICON,
    link: MY_PAGE,
  },
  {
    name: "チャレンジ",
    icon: RECORDICON,
    link: MY_RECORD,
  },
  {
    name: "お知らせ",
    icon: NOTIICON,
    link: COLUMN_PAGE,
  },
];

const HeaderLayout = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Link to={COLUMN_PAGE} className="footer-link">
          <img className="app-icon" src={APPICON} />
        </Link>
      </div>
      <div className="container">
        {HEADER_ITEMS.map((item, index) => {
          return (
            <Link to={item.link} key={item.name} className="footer-link">
              <img className="icon" src={item.icon} />
              <p className="ja">{item.name}</p>
            </Link>
          );
        })}
        <DropDownMenu />
      </div>
    </HeaderContainer>
  );
};

export default React.memo(HeaderLayout, () => false);
