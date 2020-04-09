import React from "react";
import { Form } from "antd";
interface Props {
  children: React.ReactNode;
  label?: String;
  name?: any;
  rules?: any[];
  style?: any;
}

const FormItem = (props: Props) => {
  const { children, label, name, rules, style } = props;
  return (
    <Form.Item {...style} label={label} name={name} rules={rules}>
      {children}
    </Form.Item>
  );
};

export default FormItem;
