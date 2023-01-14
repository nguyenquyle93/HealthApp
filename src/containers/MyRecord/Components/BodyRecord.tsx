import React, { useState, useEffect } from "react";
import { ExerciseContainer, ChartButton } from "../MyRecord.style";
import format from "date-fns/format";
import { COLUMN_PAGE } from "../../../settings/constants";
import CHART from "../../../assets/image/chart2.png";
import { Col, Row } from "antd";

const BodyRecord = () => {
  const [ExerciseData, setExerciseData] = useState([]);
  const [pageLength, setPageLength] = useState(100);

  const CreateData = (length: number) => {
    let newList = [];
    for (let i = 0; i <= length; i++) {
      newList.push({
        name: "家事全般（立位・軽い）",
        calo: 26,
        totalTime: 10,
        time: format(new Date(), "yyyy.MM.dd hh:mm"),
      });
    }
    setExerciseData(newList);
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
    <ExerciseContainer>
      <div className="title-container">
        <div>
          <div className="sub-title en">BODY</div>
          <div className="sub-title en">RECORD</div>
        </div>
        <div className="title en"> {format(new Date(), "yyyy.MM.dd")}</div>
      </div>
      <img src={CHART} className="chart" />
      <ChartButton shape="round" size={"small"}>
        日
      </ChartButton>
      <ChartButton shape="round" size={"small"}>
        週
      </ChartButton>
      <ChartButton shape="round" size={"small"}>
        月
      </ChartButton>
      <ChartButton shape="round" size={"small"}>
        年
      </ChartButton>
    </ExerciseContainer>
  );
};

export default React.memo(BodyRecord, () => false);
