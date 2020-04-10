import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import Content from "../components/Content";
import DataTable from "../components/DataTable";
import Button from "../components/Buttton";
import { DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import Drawer from "../components/Drawer";
import Form from "../components/Form";
import FormItem from "../components/FormItem";
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";

const formStyle = {
  labelCol: { span: 3 },
};
const data = [
  {
    key: "1",
    description: "Filtre Kahve",
    price: "10.5",
    finishDate: "2030-01-01",
  },
  {
    key: "2",
    description: "Latte",
    price: "11.5",
    finishDate: "2030-01-01",
  },
  {
    key: "3",
    description: "Mocha",
    price: "13.5",
    finishDate: "2030-01-01",
  },
];
const extraButtons = (setDrawerVisible: any) => (
  <>
    <Button
      onClick={() => {
        setDrawerVisible(true);
      }}
      type="primary"
      text="Yeni"
      icon={<PlusOutlined />}
    />
    <Button type="danger" text="Toplu Sil" icon={<DeleteOutlined />} />
  </>
);

const Products = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [editValues, setEditValues] = useState<any>({});
  const drawerFooter = () => (
    <div
      style={{
        textAlign: "right",
      }}
    >
      <Button
        style={{ style: { marginRight: 8 } }}
        text="Iptal"
        onClick={() => {}}
      />
      <Button type="primary" text="Kaydet" />
    </div>
  );
  const columns = [
    {
      title: "Urun Adi",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Fiyat",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Bitis Tarihi",
      dataIndex: "finishDate",
      key: "finishDate",
    },
    {
      title: "Islemler",
      key: "islemler",
      render: (text: any, record: any) => (
        <span>
          <Button
            text=""
            type="primary"
            shape="round"
            onClick={() => {
              setEditValues({ ...record });
              setDrawerVisible(true);
            }}
          />
          <Divider type="vertical" />
        </span>
      ),
    },
  ];

  const onClose = () => {
    setDrawerVisible(false);
    setEditValues({});
  };
  const onFinish = (value: any): void => {};
  return (
    <PageHeader title="Urunler" extra={extraButtons(setDrawerVisible)}>
      <Divider />
      <Content>
        <DataTable columns={columns} data={data}></DataTable>
      </Content>
      <Drawer
        footer={drawerFooter()}
        onClose={onClose}
        visible={drawerVisible}
        title="Yeni Urun"
      >
        <Content>
          <Form onFinish={onFinish} onFinishFailed={onFinish} style={formStyle}>
            <FormItem
              label="Urun Adi"
              name="description"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input type="text" />
            </FormItem>

            <FormItem
              label="Fiyat"
              name="price"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input type="text" />
            </FormItem>
            <FormItem
              label="Bitis Tarihi"
              name="finisDate"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <DatePicker />
            </FormItem>
          </Form>
        </Content>
      </Drawer>
    </PageHeader>
  );
};

export default Products;
