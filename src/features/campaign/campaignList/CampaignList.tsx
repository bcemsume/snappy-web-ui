import React, { useEffect } from "react";
import DataTable from "../../../components/DataTable";
import Button from "../../../components/Buttton";
import Divider from "../../../components/Divider";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { getCampaigns } from "./campaignListSlice";
import { getCampaign } from "../campaignForm/campaignSlice";
import { EditOutlined } from "@ant-design/icons";
import { Campaign } from "../types";

interface Props {
  onEditClick: () => void;
}

const CampaignList = (props: Props) => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state: RootState) => state.campaignList);

  useEffect(() => {
    dispatch(getCampaigns(1));
  }, [dispatch]);
  const columns = [
    {
      title: "Adet",
      dataIndex: "Claim",
      key: "claim",
    },
    {
      title: "Urun",
      dataIndex: "ProductID",
      key: "productId",
    },
    {
      title: "Bitis Tarihi",
      dataIndex: "FinishDate",
      key: "finishDate",
    },
    {
      title: "Islemler",
      key: "islemler",
      render: (text: any, record: Campaign) => (
        <span>
          <Button
            text=""
            type="primary"
            shape="round"
            icon={<EditOutlined />}
            onClick={() => {
              props.onEditClick();
              dispatch(getCampaign(record.ID));
            }}
          />
          <Divider type="vertical" />
        </span>
      ),
    },
  ];
  return (
    <DataTable
      loading={campaigns.loading}
      columns={columns}
      data={campaigns.data}
    ></DataTable>
  );
};

export default CampaignList;
