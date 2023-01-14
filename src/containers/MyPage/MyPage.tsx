/* eslint-disable */
import React, { useState } from "react";
import { Wrapper } from "./MyPage.style";
import MyRecord from "./Components/MyRecord";
import Recommended from "./Components/Recommended";
import Article from "./Components/Article";

function MyPage() {
  return (
    <>
      <MyRecord />
      <Wrapper>
        <Recommended />
        <Article />
      </Wrapper>
    </>
  );
}

export default MyPage;
