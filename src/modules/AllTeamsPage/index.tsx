import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTeams } from 'store/reducers/teamReducer/actions';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { getTeamsColumn } from 'modules/AllTeamsPage/helpers';
import './style.scss';

const AllTeamsPage = ({ teams, fetchTeams, history }) => {
    useEffect(() => {
        fetchTeams();
    }, []);

    const onRowClick = (e, record) => {
        const { _id: id } = record;
        history.push(`/team/${id}`);
    };

    const teamsColumns = getTeamsColumn();

    return (
        <Column className="all-teams">
            <Table onRowClick={onRowClick} columns={teamsColumns} data={teams} />
        </Column>
    );
};

const ConnectedAllTeamPage = connect(({ team }) => ({ teams: team.teams }), { fetchTeams })(
    withRouter<any, any>(AllTeamsPage)
);

export { ConnectedAllTeamPage as AllTeamsPage };
