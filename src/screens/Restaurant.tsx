import React from "react";
import PageHeader from "../components/PageHeader";

import Content from "../components/Content";
import Divider from "../components/Divider";
import RestaurantForm from "../features/restaurant/RestaurantForm";

const Restaurant = () => {
  return (
    <PageHeader title="Restaurant Bilgileri">
      <Divider />
      <Content>
        <RestaurantForm />
      </Content>
    </PageHeader>
  );
};

export default Restaurant;
