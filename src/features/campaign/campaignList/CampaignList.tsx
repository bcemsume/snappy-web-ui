import React, { useEffect } from "react";
import DataTable from "../../../components/DataTable";
import Button from "../../../components/Buttton";
import Divider from "../../../components/Divider";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { getCampaigns, deleteCampaign } from "./campaignListSlice";
import { getCampaign } from "../campaignForm/campaignSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Campaign } from "../types";
import { Popconfirm } from "antd";

interface Props {
  onEditClick: () => void;
}

const CampaignList = (props: Props) => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state: RootState) => state.campaignList);
  const loginUser = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    dispatch(getCampaigns(loginUser?.RestaurantID ?? 0));
  }, [dispatch]);
  const columns = [
    {
      title: "Adet",
      dataIndex: "Claim",
      key: "claim",
    },
    {
      title: "Urun",
      dataIndex: "Description",
      key: "Description",
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
          <Popconfirm
            placement="left"
            title={"Silmek Istediginize Emin misiniz?"}
            onConfirm={() => {
              dispatch(deleteCampaign(record.ID));
              dispatch(getCampaigns(loginUser?.RestaurantID ?? 0));
            }}
            okText="Evet"
            cancelText="Hayir"
          >
            <Button
              text=""
              type="danger"
              shape="round"
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
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
