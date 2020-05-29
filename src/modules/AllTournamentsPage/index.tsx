import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Column } from 'ui/Layout';
import { Table } from 'widgets/Table';
import { fetchTournaments } from 'store/reducers/tournamentReducer/actions';
import { getMainTableColumns } from 'modules/Main/helpers';
import './style.scss';

const AllTournamentsPage = ({ fetchTournaments, tournaments, history }) => {
    useEffect(() => {
        fetchTournaments();
    }, []);

    const tournamentsColumns = getMainTableColumns();

    const onRowClick = (e, record) => {
        const { _id: id } = record;
        history.push(`/tournament/${id}`);
    };

    return (
        <Column className="all-tournaments">
            <Table onRowClick={onRowClick} columns={tournamentsColumns} data={tournaments} />
        </Column>
    );
};

const ConnectedAllTournamentsPage = connect(({ tournament }) => ({ tournaments: tournament.tournaments }), {
    fetchTournaments
})(withRouter<any, any>(AllTournamentsPage));

export { ConnectedAllTournamentsPage as AllTournamentsPage };
