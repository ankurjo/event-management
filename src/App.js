import React, { createContext } from 'react';
import { useImmerReducer } from "use-immer";
import { Table, Row, Col, Card } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import { AddEventForm } from './components/Form/AddEventForm.component';
import { eventReducer } from './utils/functions/formReducer';

import { FORM_INITIAL_STATE } from './utils/constants/INITIAL_STATE';
import { FORM_COLUMNS } from './utils/constants/FORM_COLUMNS';

export const EventContext = createContext();

const App = () => {
  const [events, dispatchEvents] = useImmerReducer(eventReducer, FORM_INITIAL_STATE);
  return (
    <EventContext.Provider value={[events, dispatchEvents]}>
      <Row type="flex" justify="center">

        <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ margin: 20, padding: 20 }}>
          <Card>
            <AddEventForm />
          </Card>
        </Col>


        <Col xs={24} sm={24} md={24} lg={18} xl={18} >
          <Table dataSource={events} columns={FORM_COLUMNS} />
        </Col>

      </Row>
     
    </EventContext.Provider>
  );
};
export default App;
