import * as React from 'react';
import { Table as TableAnt } from 'antd';
import './style.scss';

const Table = ({ data, columns }) => {
    return <TableAnt pagination={false} dataSource={data} columns={columns} />;
};

export { Table };
