import React, { useState } from 'react';
import { Button, Input, Space, message, DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const TimestampConverter: React.FC = () => {
  const [timestamp, setTimestamp] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);

  const timestampToDate = () => {
    if (!timestamp) {
      message.error('请输入时间戳');
      return;
    }
    
    const ts = parseInt(timestamp);
    if (isNaN(ts)) {
      message.error('请输入有效的时间戳');
      return;
    }
    
    // 假设时间戳是秒级的，如果不是则需要相应调整
    const dateObj = ts > 9999999999 ? new Date(ts) : new Date(ts * 1000);
    setDate(dayjs(dateObj));
    setTime(dayjs(dateObj));
  };

  const dateToTimestamp = () => {
    if (!date) {
      message.error('请选择日期');
      return;
    }
    
    const dateTime = time ? date.hour(time.hour()).minute(time.minute()).second(time.second()) : date;
    const ts = Math.floor(dateTime.valueOf() / 1000);
    setTimestamp(ts.toString());
  };

  const clearAll = () => {
    setTimestamp('');
    setDate(null);
    setTime(null);
  };

  const copyTimestamp = () => {
    navigator.clipboard.writeText(timestamp);
    message.success('已复制到剪贴板');
  };

  return (
    <div>
      <h2>时间戳转换工具</h2>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Input
            placeholder="请输入时间戳"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
          <Button type="primary" onClick={timestampToDate}>转换为日期</Button>
        </Space>
        {date && (
          <div>
            <p>转换结果: {date.format('YYYY-MM-DD')} {time?.format('HH:mm:ss')}</p>
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          <Space>
            <DatePicker value={date} onChange={setDate} />
            <TimePicker value={time} onChange={setTime} />
            <Button type="primary" onClick={dateToTimestamp}>转换为时间戳</Button>
          </Space>
        </div>
        {timestamp && (
          <div>
            <Space>
              <span>转换结果: {timestamp}</span>
              <Button onClick={copyTimestamp}>复制</Button>
            </Space>
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          <Button onClick={clearAll}>清空</Button>
        </div>
      </Space>
    </div>
  );
};

export default TimestampConverter;