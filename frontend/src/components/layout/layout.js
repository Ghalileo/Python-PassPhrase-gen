import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import axios from 'axios'
import GETPhrases from '../GetPhrases/getPhrases';
import POSTPhrase from '../PostPhrase/postPhrase';
import GETSignups from '../GetSignups/getSignups';

import 'antd/dist/antd.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item> */}
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Yams</Menu.Item>
              {/* <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item> */}
            </SubMenu>
            {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            <Menu.Item key="9" icon={<FileOutlined />}>
              Phrases
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Yams</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h2 style={{textAlign:"center"}}>Add a Phrase</h2>
              <POSTPhrase/>
              <br/>
              <h5 className="card text-white bg-dark mb-3" style={{textAlign: "center"}}>Your Phrases</h5>
              <GETPhrases/>
              <h5 className="card text-white bg-dark mb-3" style={{textAlign: 'center'}}>Signed-Up Users</h5>
              <GETSignups/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Copyright 2021, All rights reserved &copy;</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;