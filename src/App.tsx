import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import JsonFormatter from './components/JsonFormatter';
import TimestampConverter from './components/TimestampConverter';
import './App.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [current, setCurrent] = useState('json');
  
  const items = [
    {
      label: 'JSON格式化',
      key: 'json',
    },
    {
      label: '时间戳转换',
      key: 'timestamp',
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[current]}
          items={items}
          onClick={(e) => setCurrent(e.key)}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          {current === 'json' && <JsonFormatter />}
          {current === 'timestamp' && <TimestampConverter />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>前端工具箱 ©2023</Footer>
    </Layout>
  );
};

export default App;