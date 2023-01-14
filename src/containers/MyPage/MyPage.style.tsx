import styled from "styled-components";
import theme from "../../theme";
import { Button } from "antd";
import SNACKBG from "../../assets/icon/snack-bg.png";
import D01 from "../../assets/image/d01.jpg";
import { Progress } from "antd";

const Wrapper = styled.div`
  width: 100%;
  padding: 70px 160px;
`;

const MyRecordContainer = styled.div`
  width: 100%;
  height: 316px;
  display: flex;
  flex-direction: row;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  .left {
    height: 100%;
    width: 45%;
    background-image: url(${D01});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    height: 100%;
    width: 55%;
    background-color: ${theme.colors.dark600};
    text-align: start;
    padding-left: 50px;
    display: flex;
    align-items: center;
    img {
      height: 300px;
    }
  }
`;

const ItemContainer = styled.div`
  width: 650px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const ItemColumn = styled.div`
  height: 116px;
  width: 108px;
  background-image: url(${SNACKBG});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  span {
    padding: 2px 0px;
  }
  .space {
    width: 45px;
  }
  .en {
    font-size: 20px;
    color: ${theme.colors.light};
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
  height: 100%;
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

const ProgessDeal = styled(Progress)`
  .ant-progress-circle-path,
  .ant-progress-circle-trail,
  .ant-progress-circle,
  .ant-progress-circle-path {
    color: #fff;
    stroke: 0 0 7px #fff, 0 0 1px #ffcc21, 0 0 2px #ffcc21;
    text-shadow: 0 0 7px #fff, 0 0 1px #ffcc21, 0 0 2px #ffcc21;
  }
  .ant-progress-inner {
    height: 181px !important;
    width: 181px !important;
  }
  .neon-text {
    color: ${theme.colors.light} !important;
    font-size: 25px;
  }
  .small-text {
    font-size: 18px;
    padding-right: 5px;
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
  MyRecordContainer,
  ItemContainer,
  ItemColumn,
  ArticleContainer,
  ArticleContent,
  ImageContainer,
  MoreButton,
  ProgessDeal,
};
