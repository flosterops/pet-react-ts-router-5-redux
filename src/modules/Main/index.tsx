import * as React from 'react';
import { useEffect } from 'react';
import { History } from 'history';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchNearestTournaments, fetchTournaments } from 'store/reducers/tournamentReducer/actions';
import { closeModal, openModal } from 'store/reducers/modalReducer/actions';
import { Table } from 'widgets/Table';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Column, Row } from 'ui/Layout';
import { getMainTableColumns } from './helpers';
import { ITournamentModel } from 'models/Tournament';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    JustifyContentTypes,
    ModalTypes,
    TagNameTypes
} from 'models/UIEnums';
import config from './config.json';

import './style.scss';

interface IMainProps {
    openModal: (type: ModalTypes, options: any) => void;
    tournaments: ITournamentModel[];
    fetchNearestTournaments: () => void;
    history: History;
}

const Main: React.FC<IMainProps> = ({ openModal, tournaments, fetchNearestTournaments, history }) => {
    const mainTableColumns = getMainTableColumns();

    useEffect(() => {
        fetchNearestTournaments();
    }, []);

    const onRowClick = (e, record) => {
        const { _id: id } = record;
        history.push(`/tournament/${id}`);
    };

    return (
        <Column className="main">
            <Row ai={AlignItemsTypes.flexEnd} jc={JustifyContentTypes.spaceBetween}>
                <Title nowrap tagName={TagNameTypes.h1} fontSize={FontSizeTypes.xxl} color={ColorTypes.blue}>
                    Список ближайших турниров по спортивным танцам
                </Title>
                <Row widthAuto>
                    {config.map(({ id, url, text }) => (
                        <Link to={url} key={id}>
                            <Description
                                underline
                                fontSize={FontSizeTypes.l}
                                color={ColorTypes.blue}
                                className="main__link"
                            >
                                {text}
                            </Description>
                        </Link>
                    ))}
                </Row>
            </Row>
            <Table data={tournaments} columns={mainTableColumns} onRowClick={onRowClick} />
        </Column>
    );
};

const ConnectedMain = connect(
    ({ modals, user, tournament }) => {
        return { modals: modals.modals, user: user.user, tournaments: tournament.tournaments };
    },
    { openModal, closeModal, fetchNearestTournaments }
)(withRouter<any, any>(Main));

export { ConnectedMain as Main };
