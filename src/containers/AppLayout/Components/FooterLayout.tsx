import React from "react";
import { FooterContainer } from "../AppLayout.style";
import { Link } from "react-router-dom";

const FOOTER_ITEMS = [
  {
    name: "会員登録",
    link: "",
  },
  {
    name: "運営会社",
    link: "",
  },
  {
    name: "利用規約",
    link: "",
  },
  {
    name: "個人情報の取扱について",
    link: "",
  },
  {
    name: "特定商取引法に基づく表記",
    link: "",
  },
  {
    name: "お問い合わせ",
    link: "",
  },
];

const FooterLayout = () => {
  return (
    <FooterContainer>
      {FOOTER_ITEMS.map((item, index) => {
        return (
          <Link to={item.link} key={item.name} className='footer-link ja'>
            <p className="ja">{item.name}</p>
          </Link>
        );
      })}
    </FooterContainer>
  );
};

export default React.memo(FooterLayout, () => false);
