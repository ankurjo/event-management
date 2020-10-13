import React from 'react';
import { Col, Form, Input, InputNumber } from 'antd';
import { TagsOutlined } from '@ant-design/icons';

export const FormInput = ({ setEventName, title, name, type, value }) => (
  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
    <Form.Item label={title} name={name}>
      {type === 'text' ? (
        <Input
          // prefix={
          //   <TagsOutlined />
          // }
          value={value}
          onChange={e => {
            setEventName(e.target.value);
          }}
        />
      ) : (
          <InputNumber
            style={{ width: '100%' }}
            min={1} max={100000}
            value={value}
            onChange={e => {
              setEventName(e);
            }} />
        )

      }

    </Form.Item>
  </Col>
);
