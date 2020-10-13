import React, { useContext } from 'react';
import { EventContext } from '../../App';

import { Popconfirm, Button } from 'antd';

export const Delete = ({ record }) => {
  const [, dispatchEvents] = useContext(EventContext);

  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={() => {
        dispatchEvents({
          type: 'DELETE_EVENT',
          payload: record.key,
        });
      }}
    >
      <Button type="primary" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
