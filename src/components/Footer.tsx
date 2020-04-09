import React from "react";
import { Layout } from "antd";

interface Props {
  text: String;
}

const AntFooter = Layout.Footer;

const Footer = (props: Props) => {
  return <AntFooter style={{ textAlign: "center" }}>{props.text} </AntFooter>;
};

export default Footer;
