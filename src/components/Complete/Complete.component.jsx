import React, { useContext } from 'react';
import { EventContext } from '../../App';

import { Button } from 'antd';

export const Complete = ({ record }) => {
  const [, dispatchEvents] = useContext(EventContext);
  return (
    <a
      href="#complete"
      onClick={() => {
        dispatchEvents({
          type: 'COMPLETE_EVENT',
          payload: record.key,
        });
      }}
    >
      <Button type="primary">Complete</Button>
    </a>
  );
};
