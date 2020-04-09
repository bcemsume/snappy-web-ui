import React from "react";
import { Table, Tag } from "antd";
import { ColumnType } from "antd/lib/table";

interface Props {
  columns: any[];
  data: any[];
}

const DataTable = (props: Props) => {
  return <Table columns={props.columns} dataSource={props.data} />;
};

interface ColumnsModel {
  title: String;
  dataIndex: String;
  key: String;
  render: () => void;
}

export default DataTable;
