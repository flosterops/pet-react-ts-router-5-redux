import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    acceptTeamRequestInTournament,
    cancelTeamRequestInTournament,
    fetchTournamentRequests
} from 'store/reducers/requestsReducer/actions';
import { getTournamentsRequestsColumns } from './helpers';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { Title } from 'ui/Title';
import { ColorTypes, FontSizeTypes, TagNameTypes } from 'models/UIEnums';
import './style.scss';

const TournamentRequestsPage = ({ fetchTournamentRequests, tournamentRequests }) => {
    useEffect(() => {
        fetchTournamentRequests();
    }, []);

    const onAccept = (tournamentId, teamId, requestId) => {
        acceptTeamRequestInTournament(tournamentId, teamId, requestId).then(res => {
            if (!res.error) {
                return fetchTournamentRequests();
            }
        });
    };

    const onCancel = id => {
        cancelTeamRequestInTournament(id).then(res => {
            if (!res.error) {
                return fetchTournamentRequests();
            }
        });
    };

    const requestTournamentsColumns = getTournamentsRequestsColumns(onAccept, onCancel);

    return (
        <Column className="request-trn">
            <Title
                className="request-trn__title"
                tagName={TagNameTypes.default}
                fontSize={FontSizeTypes.xl}
                color={ColorTypes.blue}
            >
                Заявки на участие в турнирах
            </Title>
            <Table data={tournamentRequests} columns={requestTournamentsColumns} />
        </Column>
    );
};

const ConnectedTournamentRequestsPage = connect(
    ({ requests }) => ({
        tournamentRequests: requests.tournamentRequests
    }),
    { fetchTournamentRequests }
)(TournamentRequestsPage);

export { ConnectedTournamentRequestsPage as TournamentRequestsPage };
