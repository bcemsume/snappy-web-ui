import React from "react";
import { Table } from "antd";

interface Props {
  columns: any[];
  data: any[];
  loading?: boolean;
}

const DataTable = (props: Props) => {
  return (
    <Table
      loading={props.loading}
      columns={props.columns}
      dataSource={props.data}
    />
  );
};

export default DataTable;
