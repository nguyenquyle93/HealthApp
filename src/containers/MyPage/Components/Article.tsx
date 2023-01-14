import React, { useState, useEffect } from "react";
import {
  ArticleContainer,
  ArticleContent,
  ImageContainer,
  MoreButton,
} from "../MyPage.style";
import format from "date-fns/format";
import { COLUMN_PAGE } from "../../../settings/constants";
import { Col, Row } from "antd";
import COLUMN1 from "../../../assets/image/m01.jpg";
import COLUMN2 from "../../../assets/image/l03.jpg";
import COLUMN3 from "../../../assets/image/d01.jpg";
import COLUMN4 from "../../../assets/image/l01.jpg";
import COLUMN5 from "../../../assets/image/m01.jpg";
import COLUMN6 from "../../../assets/image/l02.jpg";
import COLUMN7 from "../../../assets/image/d02.jpg";
import COLUMN8 from "../../../assets/image/s01.jpg";

const ARTICLE_ITEM = {
  name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
  tag: ["魚料理", "和食", "DHA"],
  time: new Date(),
  image: COLUMN1,
  link: COLUMN_PAGE,
};

const IMAGE_LIST = [
  COLUMN1,
  COLUMN2,
  COLUMN3,
  COLUMN4,
  COLUMN5,
  COLUMN6,
  COLUMN7,
  COLUMN8,
];
const DEAL = ["Morning", "Lunch", "Dinner", "Snack"];
const Article = () => {
  const [articleData, setArticleData] = useState([]);
  const [pageLength, setPageLength] = useState(7);

  const CreateData = (length: number) => {
    let newList = [];
    for (let i = 0; i <= length; i++) {
      newList.push({
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tag: ["魚料理", "和食", "DHA"],
        time: format(new Date(), "mm.dd.")+DEAL[i<4?i:i%4],
        image: IMAGE_LIST[i < 8 ? i : i % 8],
        link: COLUMN_PAGE,
      });
    }
    setArticleData(newList);
  };

  const LoadMoreData = () => {
    let newLength = pageLength + 8;
    CreateData(newLength);
    setPageLength(newLength);
  };

  useEffect(() => {
    CreateData(pageLength);
  }, [pageLength]);

  return (
    <ArticleContainer>
      <Row gutter={[8, 8]}>
        {articleData?.map((item, index) => {
          return (
            <Col xs={8} md={8} lg={6}>
              <ArticleContent key={index}>
                <ImageContainer>
                  <img className="image" src={item.image} />
                  <span className="time en">{item.time}</span>
                </ImageContainer>
              </ArticleContent>
            </Col>
          );
        })}
      </Row>
      <div className="button-container">
        <MoreButton className="ja" onClick={() => LoadMoreData()}>
          コラムをもっと見る
        </MoreButton>
      </div>
    </ArticleContainer>
  );
};

export default React.memo(Article, () => false);
