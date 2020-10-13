import React from 'react';

import { Complete } from '../../components/Complete/Complete.component';
import { Delete } from '../../components/Delete/Delete.component';
import { Title } from '../../components/Title/Title.component';

export const FORM_COLUMNS = [
  {
    title: 'Event Name',
    dataIndex: 'eventName',
    key: 'eventName',
    onFilter: (_, record) => record.completed === 'false',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    onFilter: (_, record) => record.completed === 'false',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: 'Venue',
    dataIndex: 'venue',
    key: 'venue',
    onFilter: (_, record) => record.completed === 'false',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    onFilter: (_, record) => record.completed === 'false',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
    onFilter: (_, record) => record.completed === 'false',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (_, record) => {
      return (
        <>
          <Delete record={record} />
        </>
      );
    },
  },
];