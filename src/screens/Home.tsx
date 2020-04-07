import React from "react";
import { Layout } from "antd";

import { AppRouter, GetAppMenu } from "../router/AppRouter";

const { Header, Content, Footer, Sider } = Layout;

function Home() {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <GetAppMenu />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <AppRouter />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Snappy ©2020 Created by BCS
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
