import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

import Content from "../components/Content";
import Divider from "../components/Divider";
import RestaurantForm from "../features/restaurant/RestaurantForm";
import firebase from "firebase";
import Button from "../components/Buttton";
import { Upload, Carousel } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import useFirebaseUpload from "../hooks/useFirebaseFileUploader";
import Spin from "../components/Spin";
import RestaurantImages from "../features/restaurant/imageForm/RestaurantImages";
const Restaurant = () => {
  return (
    <>
      <PageHeader title="Restaurant Bilgileri">
        <Divider />
        <Content>
          <RestaurantForm />
        </Content>
      </PageHeader>
      <br />
      <PageHeader title="Restaurant Resimleri">
        <RestaurantImages />
      </PageHeader>
    </>
  );
};

export default Restaurant;
