import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import FooterLayout from "./Components/FooterLayout";
import HeaderLayout from "./Components/HeaderLayout";
import { FloatButton } from "antd";
import { BackButton } from "./AppLayout.style";
import BACKTOTOP from "../../assets/icon/back-to-top.png";

const { Header, Content, Footer } = Layout;
const AppLayout = ({ children }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderLayout />
      <Content>{children}</Content>
      <FooterLayout />
      <BackButton>
        <img src={BACKTOTOP} />
      </BackButton>
    </Layout>
  );
};

export default React.memo(AppLayout, () => false);
