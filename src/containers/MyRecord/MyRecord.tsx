/* eslint-disable */
import React, { useState } from "react";
import { Wrapper } from "./MyRecord.style";
import Recommended from "./Components/Recommended";
import MyExercise from "./Components/MyExercise";
import BodyRecord from "./Components/BodyRecord";
import Article from "./Components/Article";

function MyRecord() {
  return (
    <>
      <Wrapper>
        <Recommended />
        <BodyRecord />
        <MyExercise />
        <Article />
      </Wrapper>
    </>
  );
}

export default MyRecord;
