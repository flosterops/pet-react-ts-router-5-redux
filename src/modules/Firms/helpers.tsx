import React from 'react';
import { DropDown } from 'widgets/DropDown';

const getFirmColumns = (onDeleteFirm, onEditFirm, addContract) => [
    {
        title: 'Название фирмы',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Начальник',
        dataIndex: 'shef',
        key: 'shef'
    },
    {
        title: 'Адресс',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: '',
        dataIndex: 'options',
        key: 'options',
        render: (value, args) => {
            const { id, name, shef, address } = args;
            return (
                <DropDown
                    onDelete={() => onDeleteFirm(id)}
                    onEdit={() => onEditFirm(id, { name, shef, address })}
                    addContract={() => addContract(id)}
                />
            );
        }
    }
];

export { getFirmColumns };
