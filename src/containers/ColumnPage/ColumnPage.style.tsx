import styled from "styled-components";
import theme from "../../theme";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 100%;
  padding: 70px 160px;
`;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div:last-child {
    margin-right: 0;
  }
`;

const ItemColumn = styled.div`
  height: 144px;
  width: 25%;
  margin-right: 32px;
  background-color: ${theme.colors.dark600};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  span {
    padding: 2px 0px;
  }
  .space {
    width: 60px;
    height: 2px;
    margin: 5px;
  }
  .en {
    font-size: 22px;
    color: ${theme.colors.primary300};
  }
  .ja {
    font-size: 18px;
    color: ${theme.colors.light};
  }
`;

const ArticleContainer = styled.div`
  margin-top: 60px;
  .button-container {
    padding-top: 30px;
    text-align: center;
  }
`;

const ArticleContent = styled.div`
  width: 100%;
  height: 100%;
  .time {
    font-size: 15px;
    color: ${theme.colors.light};
    background-color: ${theme.colors.primary300};
  }
  .title {
    font-size: 15px;
    color: ${theme.colors.dark500};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .tag {
    padding-right: 10px;
    font-size: 12px;
    color: ${theme.colors.primary400};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 70%;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .time {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3px 6px;
  }
`;

const MoreButton = styled(Button)`
  font-size: 18px;
  color: ${theme.colors.light};
  background-image: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
  height: 58px;
  width: 296px;
`;

export {
  Wrapper,
  ItemContainer,
  ItemColumn,
  ArticleContainer,
  ArticleContent,
  ImageContainer,
  MoreButton,
};
