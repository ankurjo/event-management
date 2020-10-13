import React, { useRef, useState, useContext } from 'react';
import { Button, Form, Row, Typography, Col } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { openNotification } from '../../utils/functions/openNotification';

import { Calendar } from './Calendar.component';
import { FormInput } from './FormInput.component';

import { EventContext } from '../../App';

const { Title } = Typography;
// eventName, description, venue, price, discount
export const AddEventForm = () => {
  let [eventName, setEventName] = useState();
  let [description, setDescription] = useState();
  let [price, setPrice] = useState();
  let [discount, setDiscount] = useState();
  let [venue, setVenue] = useState();
  const [, dispatchEvents] = useContext(EventContext);
  const formElement = useRef();

  const hasDate = eventName && description && price && discount && venue ? true : false;

  const formSubmit = () => {
    if (eventName && eventName.length >= 5) {
      dispatchEvents({ type: 'ADD_EVENT', payload: [eventName, description, venue, price, discount] });
      // setEventName('');
      // setDescription(' ');
      // setPrice(' ');
      // setDiscount(' ');
      // setVenue('');


    } else {
      openNotification('bottomLeft', 'Title must be a minimum of 5 letters');
    }
  };

  const clearFormData = () => {
    formElement.current.resetFields();
  }


  return (
    <>
      <Form ref={formElement}>
        {/* onFinish={formSubmit} */}
        <Title level={4}>Add Event</Title>
        <Row type="flex" justify="center">
          <FormInput setEventName={setEventName} title={'Event Name'} name={'eventName'} type={'text'} value={eventName} />
          <FormInput setEventName={setDescription} title={'Description'} name={'description'} type={'text'} value={description} />
          <FormInput setEventName={setVenue} title={'Venue'} name={'venue'} type={'text'} value={venue} />
          <FormInput setEventName={setPrice} title={'Price'} name={'price'} type={'number'} value={price} />
          <FormInput setEventName={setDiscount} title={'Discount'} name={'discount'} type={'number'} value={discount} />
          {/* <FormInput setEventName={setEventName} /> */}
          {/* {form && form.length >= 5 && <Calendar setDate={setDate} />}
          {form && form.length < 5 && (
            <Title className="TitleLength" type="danger" level={4}>
              Length must be more than 5
            </Title>
          )} */}
        </Row>
        <Row>
          <Col span={12}>
            <Button type="default" htmlType="submit" onClick={clearFormData}>
              Clear
          </Button>
          </Col>
          <Col span={12}>
            <Button type="primary" htmlType="submit" block disabled={!hasDate} onClick={formSubmit}>
              Add Event
          </Button>
          </Col>

        </Row>
      </Form>
    </>
  );
};
