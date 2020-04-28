import { DropDown } from 'widgets/DropDown';
import React from 'react';

const getContractsColumns = (onDeleteContract, onEditContract) => [
    {
        title: 'Договор',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Номер договора',
        dataIndex: 'numberd',
        key: 'numberd'
    },
    {
        title: 'Сумма договора',
        dataIndex: 'sumd',
        key: 'sumd'
    },
    {
        title: 'Срок заключения договора',
        dataIndex: 'datastart',
        key: 'datastart'
    },
    {
        title: 'Срок завершения договора',
        dataIndex: 'datafinish',
        key: 'datafinish'
    },
    {
        title: 'Аванс',
        dataIndex: 'avans',
        key: 'avans'
    },
    {
        title: '',
        dataIndex: 'options',
        key: 'options',
        render: (value, args) => {
            const {
                id,
                name,
                numberd,
                sumd,
                datastart,
                datafinish,
                avans,
                firmId
            } = args;
            return (
                <DropDown
                    onDelete={() => onDeleteContract(id, firmId)}
                    onEdit={() =>
                        onEditContract(
                            id,
                            {
                                name,
                                numberd,
                                sumd,
                                datastart,
                                datafinish,
                                avans
                            },
                            firmId
                        )
                    }
                    addContract={null}
                />
            );
        }
    }
];

export { getContractsColumns };
