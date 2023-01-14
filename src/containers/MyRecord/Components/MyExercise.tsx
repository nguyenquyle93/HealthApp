import React, { useState, useEffect } from "react";
import { ExerciseContainer, ExerciseContent } from "../MyRecord.style";
import format from "date-fns/format";
import { COLUMN_PAGE } from "../../../settings/constants";
import { Col, Row } from "antd";

const MyExercise = () => {
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
          <div className="sub-title en">MY</div>
          <div className="sub-title en">EXERCISE</div>
        </div>
        <div className="title en">
          {" "}
          {format(new Date(), "yyyy.MM.dd")}
        </div>
      </div>
      <Row gutter={[8, 16]}>
        {ExerciseData?.map((item, index) => {
          return (
            <Col span={12}>
              <ExerciseContent key={index}>
                <div>
                  <div className="content">・{item.name}</div>
                  <div className="tag">{item.calo}kcal</div>
                </div>
                <div className="content-time">
                  {item.totalTime + " " + "min"}
                </div>
              </ExerciseContent>
            </Col>
          );
        })}
      </Row>
    </ExerciseContainer>
  );
};

export default React.memo(MyExercise, () => false);
