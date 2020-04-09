import React from "react";

import { AppRouter, GetAppMenu } from "../router/AppRouter";
import Sider from "../components/Sider";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Home() {
  return (
    <Layout>
      <Sider>
        <div className="logo" />
        <GetAppMenu />
      </Sider>

      <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
        <Header />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <AppRouter />
        </Content>
        <Footer text="Snappy ©2020 Created by BCS"></Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
