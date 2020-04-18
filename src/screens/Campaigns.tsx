import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import Content from "../components/Content";
import Button from "../components/Buttton";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Drawer from "../components/Drawer";
import CampaignList from "../features/campaign/campaignList/CampaignList";
import CampaignForm from "../features/campaign/campaignForm/CampaignForm";

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

const Campaigns = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const onDrawerClose = () => {
    setDrawerVisible(false);
  };
  const onEditClick = () => {
    setDrawerVisible(true);
  };
  return (
    <PageHeader title="Kampanyalar" extra={extraButtons(setDrawerVisible)}>
      <Divider />
      <Content>
        <CampaignList onEditClick={() => onEditClick()} />
      </Content>
      <Drawer
        onClose={onDrawerClose}
        visible={drawerVisible}
        title="Kampanya Tanim"
      >
        <CampaignForm drawerOpen={drawerVisible} />
      </Drawer>
    </PageHeader>
  );
};

export default Campaigns;
