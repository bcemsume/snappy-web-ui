import React from "react";
import { DatePicker as AntDatePicker } from "antd";
interface Props {
  onChange?: (value: any, dateString: String) => void;
}

const DatePicker = (props: Props) => {
  return <AntDatePicker onChange={props.onChange} />;
};

export default DatePicker;
