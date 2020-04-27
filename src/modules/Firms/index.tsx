import * as React from 'react';
import { connect } from 'react-redux';
import { fetchFirms } from 'store/reducers/firmsReducer/actions';
import { useEffect } from 'react';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { firmsColumns } from 'modules/Firms/helpers';

const Firms = ({ fetchFirms, firms }) => {
    useEffect(() => {
        fetchFirms();
    }, []);

    return (
        <Column>
            <Table columns={firmsColumns} data={firms} />
        </Column>
    );
};

const ConnectedFirms = connect(
    ({ firms }) => {
        return { firms: firms.firms };
    },
    { fetchFirms }
)(Firms);

export { ConnectedFirms as Firms };
