import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { AlignItemsTypes, ColorTypes, ModalTypes } from 'models/UIEnums';
import './style.scss';

const ProfileTeam = ({ userTeam, openModal, fetchUser }) => {
    if (!userTeam) {
        return (
            <Row
                onClick={() => openModal(ModalTypes.createTeamModal, { fetchUser })}
                ai={AlignItemsTypes.center}
                pointer
            >
                <Description color={ColorTypes.blue}>Создать команду</Description>
            </Row>
        );
    }

    const { _id: teamId, teamTitle } = userTeam;

    return (
        <Link to={`/team/${teamId}`}>
            <Row pointer>
                <Description color={ColorTypes.blue}>{teamTitle}</Description>
            </Row>
        </Link>
    );
};

export { ProfileTeam };
