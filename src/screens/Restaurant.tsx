import React from "react";
import Content from "../components/Content";
import Divider from "../components/Divider";
import PageHeader from "../components/PageHeader";
import RestaurantImages from "../features/restaurant/imageForm/RestaurantImages";
import RestaurantForm from "../features/restaurant/RestaurantForm";

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
