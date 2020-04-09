import React from "react";
import { Button as AntButton } from "antd";
export interface IProps {
  type?: String;
  onClick?: () => void;
  text: String;
  icon?: React.ReactNode;
  attrs?: any;
}

const Button = (props: IProps) => {
  const { onClick, icon, text } = props;
  return (
    <AntButton onClick={() => onClick} {...props.attrs}>
      {icon && icon}
      {text}
    </AntButton>
  );
};
export default Button;
