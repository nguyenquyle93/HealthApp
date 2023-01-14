import React, { lazy, Suspense } from "react";
import { Route, Routes as RoutesDom, useLocation } from "react-router-dom";
// import * as qs from "query-string";
import { MY_PAGE, MY_RECORD, COLUMN_PAGE } from "./settings/constants";
// import { InLineLoader } from "./components/InlineLoader/InlineLoader";
import MyPage from "./containers/MyPage/MyPage";
import MyRecord from "./containers/MyRecord/MyRecord";
import ColumnPage from "./containers/ColumnPage/ColumnPage";

const Routes = () => {
  const location = useLocation();
  // const query = qs.parse(location.search);
  return (
    // <Suspense fallback={<InLineLoader />}>
    <RoutesDom>
      <Route index element={<ColumnPage />} />
      <Route path={MY_PAGE} element={<MyPage />} />
      <Route path={MY_RECORD} element={<MyRecord />} />
    </RoutesDom>
    // </Suspense>
  );
};

export default Routes;
