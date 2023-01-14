import React from "react";
import { Wrapper, ProgessDeal, MyRecordContainer } from "../MyPage.style";
import { Link } from "react-router-dom";
import MORNING from "../../../assets/icon/morning.png";
import SNACK from "../../../assets/icon/snack.png";
import SNACKBG from "../../../assets/icon/snack-bg.png";
import CHART from "../../../assets/image/chart.png";
import { COLUMN_PAGE } from "../../../settings/constants";

const HEADER_ITEMS = [
  {
    name: "Morning",
    image: MORNING,
    link: COLUMN_PAGE,
  },
  {
    name: "Lunch",
    image: MORNING,
    link: COLUMN_PAGE,
  },
  {
    name: "Dinner",
    image: MORNING,
    link: COLUMN_PAGE,
  },
  {
    name: "Snack",
    image: SNACK,
    link: COLUMN_PAGE,
  },
];

const MyRecord = () => {
  return (
    <MyRecordContainer>
      <div className="left">
        <ProgessDeal
          type="circle"
          percent={75}
          trailColor={"transparent"}
          strokeColor={"white"}
          strokeWidth={3}
          format={(percent) => (
            <p className="neon-text en">
              <span className="small-text">05/21</span>
              {percent}%
            </p>
          )}
        />
      </div>
      <div className="right">
        <img src={CHART} />
      </div>
    </MyRecordContainer>
  );
};

export default React.memo(MyRecord, () => false);
