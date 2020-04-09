import React from "react";
import { Layout } from "antd";
interface Props {
  children: React.ReactNode;
  style?: any;
}
const Content = (props: Props) => {
  return (
    <Layout.Content style={{ ...props.style }}>{props.children}</Layout.Content>
  );
};

export default Content;
