import React from "react";
import { Button as AntButton } from "antd";
export interface IProps {
  type?: "primary" | "default" | "dashed" | "danger" | "link" | "ghost";
  onClick?: () => void;
  text: String;
  icon?: React.ReactNode;
  attrs?: any;
  style?: any;
  shape?: "circle" | "round" | "circle-outline";
}

const Button = (props: IProps) => {
  const { onClick, icon, text, type, style, shape } = props;
  return (
    <AntButton
      shape={shape}
      {...style}
      type={type}
      onClick={onClick}
      {...props.attrs}
    >
      {icon && icon}
      {text}
    </AntButton>
  );
};
export default Button;
