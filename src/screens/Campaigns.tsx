import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import Content from "../components/Content";
import Button from "../components/Buttton";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Drawer from "../components/Drawer";

interface Props {}

const Campaigns = (props: Props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };
  const onEditClick = () => {
    setDrawerVisible(true);
  };

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
    </>
  );
  return (
    <PageHeader title="Kampanyalar" extra={extraButtons(setDrawerVisible)}>
      <Divider />
      <Content>
        <div></div>
      </Content>
      <Drawer
        onClose={onDrawerClose}
        visible={drawerVisible}
        title="Urun Tanim"
      >
        <div></div>
      </Drawer>
    </PageHeader>
  );
};

export default Campaigns;
