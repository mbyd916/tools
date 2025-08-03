import React, { useState } from 'react';
import { Button, Input, Space, message } from 'antd';
import type { InputRef } from 'antd';

const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const inputRef = React.createRef<InputRef>();

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (error) {
      message.error('无效的JSON格式');
    }
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    message.success('已复制到剪贴板');
  };

  return (
    <div>
      <h2>JSON格式化工具</h2>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input.TextArea
          ref={inputRef}
          rows={8}
          placeholder="请输入JSON字符串"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Space>
          <Button type="primary" onClick={formatJson}>格式化</Button>
          <Button onClick={clearAll}>清空</Button>
        </Space>
        {output && (
          <div>
            <Space>
              <Button onClick={copyToClipboard}>复制结果</Button>
            </Space>
            <Input.TextArea
              rows={12}
              readOnly
              value={output}
              style={{ marginTop: '10px' }}
            />
          </div>
        )}
      </Space>
    </div>
  );
};

export default JsonFormatter;