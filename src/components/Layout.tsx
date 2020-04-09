import React from "react";
import { Layout as AntLayout } from "antd";
interface Props {
  children: React.ReactChild[];
  style?: React.CSSProperties;
}

const Layout = (props: Props) => {
  return (
    <AntLayout className="site-layout" style={props.style}>
      {props.children}
    </AntLayout>
  );
};

export default Layout;
