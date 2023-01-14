/* eslint-disable */
import React, { useState } from "react";
import { Wrapper } from "./ColumnPage.style";
import Recommended from "./Components/Recommended";
import Article from "./Components/Article";

function ColumnPage() {
  return (
    <>
      <Wrapper>
        <Recommended />
        <Article />
      </Wrapper>
    </>
  );
}

export default ColumnPage;
