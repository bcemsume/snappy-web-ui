import React from "react";
import { Drawer as AntDrawer } from "antd";

interface Props {
  onClose: () => void;
  visible: boolean;
  title: String;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const Drawer = (props: Props) => {
  const { onClose, visible, title, footer, children } = props;
  return (
    <AntDrawer
      destroyOnClose={true}
      title={title}
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={footer}
    >
      {children}
    </AntDrawer>
  );
};

export default Drawer;
