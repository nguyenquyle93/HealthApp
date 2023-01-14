import React from "react";
import { Wrapper, ItemColumn, ItemContainer } from "../MyRecord.style";
import { Link } from "react-router-dom";
import MYRECOMMENT1 from "../../../assets/image/MyRecommend-1.jpg";
import MYRECOMMENT2 from "../../../assets/image/MyRecommend-2.jpg";
import MYRECOMMENT3 from "../../../assets/image/MyRecommend-3.jpg";
import { COLUMN_PAGE } from "../../../settings/constants";
import { Col, Row } from "antd";

const HEADER_ITEMS = [
  {
    name: "BODY RECORD",
    jaName: "自分のカラダの記録",
    image: MYRECOMMENT1,
    link: COLUMN_PAGE,
  },
  {
    name: "MY EXERCISE",
    jaName: "自分の運動の記録",
    image: MYRECOMMENT2,
    link: COLUMN_PAGE,
  },
  {
    name: "MY DIARY",
    jaName: "自分の日記",
    image: MYRECOMMENT3,
    link: COLUMN_PAGE,
  },
];

const Recommended = () => {
  return (
    <ItemContainer>
      <Row >
        {HEADER_ITEMS.map((item, index) => {
          return (
            <Col span={8} className="col-container">
              <ItemColumn key={index} bg={item.image}>
                <div className="mask"></div>
                <div className="text-container">
                  <span className="en">{item.name}</span>
                  <span className="ja">{item.jaName}</span>
                </div>
              </ItemColumn>
            </Col>
          );
        })}
      </Row>
    </ItemContainer>
  );
};

export default React.memo(Recommended, () => false);
