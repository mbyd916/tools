import React, { useState } from 'react';
import { Button, Input, Space, message, Tabs } from 'antd';

const UrlEncoderDecoder: React.FC = () => {
  const [encodeInput, setEncodeInput] = useState('');
  const [encodeOutput, setEncodeOutput] = useState('');
  
  const [decodeInput, setDecodeInput] = useState('');
  const [decodeOutput, setDecodeOutput] = useState('');
  
  const { TabPane } = Tabs;

  const handleEncode = () => {
    try {
      const encoded = encodeURIComponent(encodeInput);
      setEncodeOutput(encoded);
    } catch (error) {
      message.error('编码失败: ' + (error as Error).message);
    }
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(decodeInput);
      setDecodeOutput(decoded);
    } catch (error) {
      message.error('解码失败: 无效的URL编码字符串');
    }
  };

  const clearEncode = () => {
    setEncodeInput('');
    setEncodeOutput('');
  };

  const clearDecode = () => {
    setDecodeInput('');
    setDecodeOutput('');
  };

  const copyEncodeResult = () => {
    navigator.clipboard.writeText(encodeOutput);
    message.success('已复制到剪贴板');
  };

  const copyDecodeResult = () => {
    navigator.clipboard.writeText(decodeOutput);
    message.success('已复制到剪贴板');
  };

  return (
    <div>
      <h2>URL编码/解码工具</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="编码" key="1">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input.TextArea
              rows={6}
              placeholder="请输入要编码的URL"
              value={encodeInput}
              onChange={(e) => setEncodeInput(e.target.value)}
            />
            <Space>
              <Button type="primary" onClick={handleEncode}>编码</Button>
              <Button onClick={clearEncode}>清空</Button>
            </Space>
            {encodeOutput && (
              <div>
                <Space>
                  <Button onClick={copyEncodeResult}>复制结果</Button>
                </Space>
                <Input.TextArea
                  rows={6}
                  readOnly
                  value={encodeOutput}
                  style={{ marginTop: '10px' }}
                />
              </div>
            )}
          </Space>
        </TabPane>
        <TabPane tab="解码" key="2">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input.TextArea
              rows={6}
              placeholder="请输入要解码的URL编码字符串"
              value={decodeInput}
              onChange={(e) => setDecodeInput(e.target.value)}
            />
            <Space>
              <Button type="primary" onClick={handleDecode}>解码</Button>
              <Button onClick={clearDecode}>清空</Button>
            </Space>
            {decodeOutput && (
              <div>
                <Space>
                  <Button onClick={copyDecodeResult}>复制结果</Button>
                </Space>
                <Input.TextArea
                  rows={6}
                  readOnly
                  value={decodeOutput}
                  style={{ marginTop: '10px' }}
                />
              </div>
            )}
          </Space>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UrlEncoderDecoder;