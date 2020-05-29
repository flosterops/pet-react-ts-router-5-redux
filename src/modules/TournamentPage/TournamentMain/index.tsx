import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'widgets/Table';
import { Column, Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { Title } from 'ui/Title';
import { Loader } from 'ui/Loader';
import { getTournamentTeamsColumns } from 'modules/TournamentPage/TournamentMain/helpers';
import { AlignItemsTypes, ColorTypes, FontSizeTypes, TagNameTypes } from 'models/UIEnums';
import './style.scss';

const getWinnerTeam = (status, winnerId, teams) => {
    if (status === 2 && winnerId) {
        return teams.find(({ _id }) => winnerId === _id);
    }
    return false;
};

const TeamWinner = ({ teamWinner }) => {
    const { _id, teamTitle } = teamWinner;
    return (
        <Column>
            <Row className="trn-main__title" ai={AlignItemsTypes.flexEnd} widthAuto>
                <Title className="trn-main__title_winner" tagName={TagNameTypes.default}>
                    Команда победитель:
                </Title>
                <Link to={`/team/${_id}`}>
                    <Description color={ColorTypes.blue} fontSize={FontSizeTypes.l}>
                        {teamTitle}
                    </Description>
                </Link>
            </Row>
        </Column>
    );
};

const TournamentMain = ({ date, teams, history, status, winnerId }) => {
    const teamsColumns = getTournamentTeamsColumns();

    const onRowClick = (e, record) => {
        const { _id: id } = record;
        history.push(`/team/${id}`);
    };

    if (!teams) {
        return <Loader size={64} />;
    }

    const teamWinner = getWinnerTeam(status, winnerId, teams);
    return (
        <Column className="trn-main">
            <Row widthAuto>
                <Title className="trn-main__title" tagName={TagNameTypes.default}>{`Дата проведения: ${date}`}</Title>
            </Row>
            {teamWinner && <TeamWinner teamWinner={teamWinner} />}
            <Column>
                <Row widthAuto>
                    <Title className="trn-main__title" tagName={TagNameTypes.default}>
                        Список команд
                    </Title>
                </Row>
                <Table onRowClick={onRowClick} data={teams} columns={teamsColumns} />
            </Column>
        </Column>
    );
};

export { TournamentMain };
