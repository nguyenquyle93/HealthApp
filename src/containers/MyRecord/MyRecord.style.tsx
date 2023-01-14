import styled from "styled-components";
import theme from "../../theme";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 100%;
  padding: 70px 160px;
`;

const ItemContainer = styled.div`
  width: 100%;
  .col-container {
    background-color: ${theme.colors.primary300};
    padding: 24px !important;
    max-width: 31% !important;
  }
  .ant-row {
    justify-content: space-between;
  }
`;

const ItemColumn = styled.div`
  height: 262px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .mask {
    background-color: ${theme.colors.dark500};
    width: 100%;
    height: 100%;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
  }
  .text-container {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .space {
    width: 60px;
    height: 2px;
    margin: 5px;
  }
  .en {
    font-size: 25px;
    color: ${theme.colors.primary300};
  }
  .ja {
    font-size: 14px;
    color: ${theme.colors.light};
    background-color: ${theme.colors.primary400};
    width: 100%;
    text-align: center;
    padding: 2px;
    padding-bottom: 4px;
  }
`;

const ArticleContainer = styled.div`
  margin-top: 60px;
  .button-container {
    padding-top: 30px;
    text-align: center;
  }
  .title {
    font-size: 22px;
    font-weight: bold;
    color: ${theme.colors.dark500};
    margin-bottom: 10px;
  }
`;

const ArticleContent = styled.div`
  width: 100%;
  border: 2px solid ${theme.colors.gray};
  padding: 15px;
  .time {
    font-size: 18px;
    font-weight: bold;
  }
  .content {
    font-size: 12px;
    color: ${theme.colors.dark500};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .tag {
    padding-right: 10px;
    font-size: 12px;
    color: ${theme.colors.primary400};
  }
`;

const ExerciseContainer = styled.div`
  margin-top: 60px;
  background-color: ${theme.colors.dark500};
  padding: 16px 24px;
  .title {
    font-size: 22px;
    font-weight: bold;
    color: ${theme.colors.light};
    margin-left: 20px;
  }
  .chart {
    width: 100%;
    padding: 0 20px;
  }
  .sub-title {
    font-size: 15px;
    color: ${theme.colors.light};
  }
  .title-container {
    display: flex;
    margin-bottom: 10px;
  }
  .ant-row {
    height: 264px;
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #777777;
      background-color: #777777;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ffcc21;
      border-radius: 10px;
    }
  }
`;

const ExerciseContent = styled.div`
  width: 95%;
  color: ${theme.colors.light};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  .time {
    font-size: 18px;
    font-weight: bold;
  }
  .content {
    font-size: 15px;
    /* color: ${theme.colors.dark500}; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .tag {
    font-size: 15px;
    color: ${theme.colors.primary300};
    padding-left: 15px;
  }
  .content-time {
    font-size: 18px;
    color: ${theme.colors.primary300};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  .image {
    width: 100%;
  }
  .time {
    position: absolute;
    bottom: 3px;
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

const ChartButton = styled(Button)`
  font-size: 15px;
  color: ${theme.colors.primary300};
  width: 56px;
  margin-right: 15px;
  :hover {
    color: ${theme.colors.light} !important;
    background-color: ${theme.colors.primary300};
  }
`;

export {
  Wrapper,
  ItemContainer,
  ItemColumn,
  ArticleContainer,
  ArticleContent,
  ExerciseContainer,
  ExerciseContent,
  ImageContainer,
  MoreButton,
  ChartButton,
};
