import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeamRequests } from 'store/reducers/requestsReducer/actions';
import { Column } from 'ui/Layout';

const TeamRequestsPage = ({ fetchTeamRequests, teamRequests }) => {
    useEffect(() => {
        fetchTeamRequests();
    }, []);
    console.log(teamRequests);
    return <Column>TeamRequestsPage</Column>;
};

const ConnectedTeamRequestsPage = connect(
    ({ requests }) => ({
        teamRequests: requests.teamRequests
    }),
    { fetchTeamRequests }
)(TeamRequestsPage);

export { ConnectedTeamRequestsPage as TeamRequestsPage };
