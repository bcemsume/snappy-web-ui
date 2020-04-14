import { Menu } from "antd";
import React, { ReactNode } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import History from "../shared/History";
import {
  BarChartOutlined,
  ShoppingOutlined,
  AreaChartOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Restaurant from "../screens/Restaurant";
import Products from "../screens/Products";
import Campaigns from "../screens/Campaigns";

// interface RouterModel {
//   children: ReactNode;
// }

export const AppRouter: React.FC = () => {
  return (
    <Router history={History}>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {ROUTER.map((val, idx) => (
            <Route key={idx} path={`${val.path}`}>
              {val.component}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export const GetAppMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
      {MENUS.map((val, idx) => {
        return (
          <Menu.Item key={idx}>
            {val.icon}
            <span className="nav-text">{val.title}</span>
            <Link to={{ pathname: `${val.path}` }}></Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

interface MenuModel {
  icon: ReactNode;
  title: String;
  path: String;
}

const MENUS: MenuModel[] = [
  {
    icon: <AreaChartOutlined />,
    title: "Ana Sayfa",
    path: "/app",
  },
  {
    icon: <ShoppingOutlined />,
    title: "Restaurant Bilgileri",
    path: "/app/restaurant",
  },
  {
    icon: <AppstoreOutlined />,
    title: "Urunler",
    path: "/app/products",
  },
  {
    icon: <BarChartOutlined />,
    title: "Kampanyalar",
    path: "/app/campaigns",
  },
  {
    icon: <TeamOutlined />,
    title: "Musteri Takip",
    path: "/app/customers",
  },
];

interface RouterModel {
  path: String;
  component: ReactNode;
}
const ROUTER: RouterModel[] = [
  {
    path: "/app/restaurant",
    component: <Restaurant />,
  },
  {
    path: "/app/products",
    component: <Products />,
  },
  {
    path: "/app/campaigns",
    component: <Campaigns />,
  },
];
