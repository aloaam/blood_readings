import { useState, useEffect } from "react";
import { getAllBloodReadings } from "./client";
import { Layout, Menu, Breadcrumb, Table } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./App.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Reading",
    dataIndex: "reading",
    key: "reading",
  },
  {
    title: "Time Of Reading",
    dataIndex: "timeOfReading",
    key: "timeOfReading",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

function App() {
  const [readings, setReadings] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const fetchReadings = () =>
    getAllBloodReadings()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReadings(data);
      });

  useEffect(() => {
    console.log("component is mounted");
    fetchReadings();
  }, []);

  const renderReadings = () => {
    if (readings.length <= 0) {
      return "No data available";
    }
    return (
      <Table
        dataSource={readings}
        columns={columns}
        title={() => "Blood Readings"}
        pagination={{ pageSize: 50 }}
        // scroll={{ y: 240 }}
        rowKey={(readings) => readings.id}
      />
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {renderReadings()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          By Alo © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;