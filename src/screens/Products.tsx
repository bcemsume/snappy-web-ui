import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import Content from "../components/Content";
import Button from "../components/Buttton";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import ProductList from "../features/product/productList/ProductList";
import ProductForm from "../features/product/productForm/ProductForm";
import Drawer from "../components/Drawer";

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

const drawerFooter = () => (
  <div
    style={{
      textAlign: "right",
    }}
  >
    <Button text="Iptal" onClick={() => {}} />
    <Divider type="vertical" />
    <Button type="primary" text="Kaydet" />
  </div>
);

const Products = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const onDrawerClose = () => {
    setDrawerVisible(false);
  };
  const onEditClick = () => {
    debugger;
    setDrawerVisible(true);
  };
  return (
    <PageHeader title="Urunler" extra={extraButtons(setDrawerVisible)}>
      <Divider />
      <Content>
        <ProductList onEditClick={() => onEditClick()} />
      </Content>
      <Drawer
        onClose={onDrawerClose}
        visible={drawerVisible}
        title="Urun Tanim"
      >
        <ProductForm drawerOpen={drawerVisible} />
      </Drawer>
    </PageHeader>
  );
};

export default Products;
