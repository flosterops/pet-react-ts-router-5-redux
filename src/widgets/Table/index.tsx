import * as React from 'react';
import { Table as TableAnt } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';

interface ITableProps {
    data: any[];
    columns: any;
    onRowClick?: (...args) => any;
}

const Table: React.FC<ITableProps> = ({ data, columns, onRowClick }) => {
    return (
        <TableAnt
            onRow={record => (onRowClick ? { onClick: e => onRowClick(e, record) } : {})}
            pagination={false}
            dataSource={data}
            columns={columns}
        />
    );
};

export { Table };
