import React from "react";
import Card from "../components/Card";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "../logo.png";
import LoginForm from "../features/login/LoginForm";
interface Props {}

const Login = (props: Props) => {
  const tabList = [
    {
      key: "login",
      tab: "Giris",
    },
    {
      key: "register",
      tab: "Kayit Ol",
    },
  ];

  const contentList = {
    login: <LoginForm />,
    register: <p>content2</p>,
  };
  return (
    <>
      <Row sytle={{ justify: "center", align: "top" }}>
        <Col>
          <img alt="logo" style={{ height: 128, width: 100 }} src={logo} />
        </Col>
      </Row>
      <br />
      <br />
      <Row sytle={{ justify: "center", align: "middle" }}>
        <Col style={{ span: 8 }}>
          <Card title="" tabList={tabList} contentList={contentList} />
        </Col>
      </Row>
    </>
  );
};

export default Login;
