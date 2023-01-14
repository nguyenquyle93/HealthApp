import React, { useState, useEffect } from "react";
import {
  ArticleContainer,
  ArticleContent,
  ImageContainer,
  MoreButton,
} from "../ColumnPage.style";
import format from "date-fns/format";
import { COLUMN_PAGE } from "../../../settings/constants";
import { Col, Row } from "antd";
import COLUMN1 from "../../../assets/image/column-1.jpg";
import COLUMN2 from "../../../assets/image/column-2.jpg";
import COLUMN3 from "../../../assets/image/column-3.jpg";
import COLUMN4 from "../../../assets/image/column-4.jpg";
import COLUMN5 from "../../../assets/image/column-5.jpg";
import COLUMN6 from "../../../assets/image/column-6.jpg";
import COLUMN7 from "../../../assets/image/column-7.jpg";
import COLUMN8 from "../../../assets/image/column-8.jpg";

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
const Article = () => {
  const [articleData, setArticleData] = useState([]);
  const [pageLength, setPageLength] = useState(7);

  const CreateData = (length: number) => {
    let newList = [];
    for (let i = 0; i <= length; i++) {
      newList.push({
        name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tag: ["魚料理", "和食", "DHA"],
        time: format(new Date(), "yyyy.MM.dd hh:mm"),
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
      <Row gutter={[8, 16]}>
        {articleData?.map((item, index) => {
          return (
            <Col xs={8} md={8} lg={6}>
              <ArticleContent key={index}>
                <ImageContainer>
                  <img className="image" src={item.image} />
                  <span className="time en">{item.time}</span>
                </ImageContainer>
                <span className="ja title">{item.name}</span>
                {item.tag.map((itemX, indexX) => {
                  return (
                    <span className="ja tag" key={itemX + indexX}>
                      #{itemX}
                    </span>
                  );
                })}
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
