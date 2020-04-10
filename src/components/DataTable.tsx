import React from "react";
import { Table } from "antd";

interface Props {
  columns: any[];
  data: any[];
}

const DataTable = (props: Props) => {
  return <Table columns={props.columns} dataSource={props.data} />;
};

export default DataTable;
