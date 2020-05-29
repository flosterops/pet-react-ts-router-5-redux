import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {
    fetchTournamentTeams,
    getCurrentTournament,
    sendEnterTournamentRequest
} from 'store/reducers/tournamentReducer/actions';
import { openModal } from 'store/reducers/modalReducer/actions';
import { Title } from 'ui/Title';
import { Column, Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { Loader } from 'ui/Loader';
import { TournamentInfo } from 'modules/TournamentPage/TournamentInfo';
import { TournamentMain } from 'modules/TournamentPage/TournamentMain';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    JustifyContentTypes,
    ModalTypes,
    TagNameTypes
} from 'models/UIEnums';
import { getTournamentStatusText } from 'helpers/tournament';
import { getPrice } from 'helpers/price';
import { getDate } from 'helpers/dates';
import './style.scss';

const TournamentPage = ({
    tournament,
    getCurrentTournament,
    activeTournament,
    sendEnterTournamentRequest,
    appUser,
    tournamentTeams,
    fetchTournamentTeams,
    history,
    openModal
}) => {
    const [editMode, changeEditMode] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        getCurrentTournament(id);
        fetchTournamentTeams(id);
    }, []);

    if (!tournament) {
        return (
            <Column fullHeight jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
                <Loader size={64} />;
            </Column>
        );
    }

    const onFinisTournament = () => {
        openModal(ModalTypes.finishTournament, { teams: tournamentTeams });
    };

    const { tournamentTitle, tournamentDescription, tournamentPrice, startDate, status, winnerId } = tournament;
    const prettifiedPrice = getPrice(tournamentPrice);
    const admin = appUser ? appUser.admin : false;
    const statusText = getTournamentStatusText(status);
    return (
        <Column className="trn-page">
            <Row className="trn-page__header">
                <Row>
                    <Title
                        className="trn-page__title"
                        tagName={TagNameTypes.default}
                        color={ColorTypes.blue}
                        fontSize={FontSizeTypes.xl}
                    >
                        {tournamentTitle}
                    </Title>
                    <Description fontSize={FontSizeTypes.xl} uppercase>
                        ({statusText})
                    </Description>
                </Row>
                {admin && (
                    <>
                        {/*<Button type="primary" onClick={() => changeEditMode(!editMode)}>*/}
                        {/*    {editMode ? 'Сохранить' : 'Изменить'}*/}
                        {/*</Button>*/}
                        <Button onClick={onFinisTournament} type="primary">
                            Завершить турнир
                        </Button>
                    </>
                )}
            </Row>
            <Row fullHeight className="trn-page__main">
                <TournamentInfo
                    price={prettifiedPrice}
                    info={tournamentDescription}
                    activeTournament={activeTournament}
                    sendEnterTournamentRequest={sendEnterTournamentRequest}
                    appUser={appUser}
                    tournamentId={id}
                />
                <TournamentMain
                    status={status}
                    winnerId={winnerId}
                    date={getDate(startDate)}
                    history={history}
                    teams={tournamentTeams}
                />
            </Row>
        </Column>
    );
};

const ConnectedTournamentPage = connect(
    ({ tournament, app }) => ({
        tournament: tournament.currentTournament,
        activeTournament: tournament.activeTournament,
        tournamentTeams: tournament.tournamentTeams,
        appUser: app.appUser
    }),
    {
        getCurrentTournament,
        sendEnterTournamentRequest,
        fetchTournamentTeams,
        openModal
    }
)(withRouter<any, any>(TournamentPage));

export { ConnectedTournamentPage as TournamentPage };
