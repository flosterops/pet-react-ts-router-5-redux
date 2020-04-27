import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchContracts } from 'store/reducers/contractsReducer/actions';
import { Table } from 'widgets/Table';
import { contractsColumns } from 'modules/Contracts/helpers';

const Contracts = ({ fetchContracts, contracts }) => {
    useEffect(() => {
        fetchContracts();
    }, []);
    return <Table columns={contractsColumns} data={contracts} />;
};

const ConnectedContracts = connect(
    ({ contracts }) => {
        return { contracts: contracts.contracts };
    },
    { fetchContracts }
)(Contracts);

export { ConnectedContracts as Contracts };
