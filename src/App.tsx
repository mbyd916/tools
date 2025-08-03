import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import JsonFormatter from './components/JsonFormatter';
import TimestampConverter from './components/TimestampConverter';
import Base64EncoderDecoder from './components/Base64EncoderDecoder';
import UrlEncoderDecoder from './components/UrlEncoderDecoder';
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
    {
      label: 'Base64编码/解码',
      key: 'base64',
    },
    {
      label: 'URL编码/解码',
      key: 'url',
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
          {current === 'base64' && <Base64EncoderDecoder />}
          {current === 'url' && <UrlEncoderDecoder />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>前端工具箱 ©2023</Footer>
    </Layout>
  );
};

export default App;