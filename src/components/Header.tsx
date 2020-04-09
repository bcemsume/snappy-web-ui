import React from "react";
import { Layout } from "antd";
interface Props {}
const AntHeader = Layout.Header;
const Header = (props: Props) => {
  return (
    <AntHeader className="site-layout-background" style={{ padding: 0 }} />
  );
};

export default Header;
