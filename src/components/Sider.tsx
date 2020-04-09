import React from "react";
import { Layout } from "antd";
interface Props {
  children: React.ReactChild[];
}

const AntSider = Layout.Sider;
const Sider = (props: Props) => {
  return (
    <div>
      <AntSider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        {props.children}
      </AntSider>
    </div>
  );
};

export default Sider;
