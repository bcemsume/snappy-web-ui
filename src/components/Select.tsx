import React from "react";
import { Select as AntSelect } from "antd";
interface Props {
  children: any[];
  style?: any;
  defaultValue?: any;
  placeholder: String;
  onChange?: (val: any, option: any) => void;
  mode?: "multiple" | "tags";
}

const Select = (props: Props) => {
  const { defaultValue, style, onChange, children, placeholder, mode } = props;
  return (
    <AntSelect
      mode={mode}
      style={style}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {children}
    </AntSelect>
  );
};

export default Select;
