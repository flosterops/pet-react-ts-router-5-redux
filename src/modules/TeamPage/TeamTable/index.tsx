import React from 'react';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { Title } from 'ui/Title';
import { ColorTypes, FontSizeTypes, TagNameTypes } from 'models/UIEnums';
import './style.scss';
import { getTeamTableColumns } from 'modules/TeamPage/TeamTable/helpers';

const TeamTable = ({ members, history }) => {
    const memberColumns = getTeamTableColumns();

    const onRowClick = (e, record) => {
        const { _id: id } = record;
        history.push(`/profile/${id}`);
    };

    return (
        <Column>
            <Title tagName={TagNameTypes.default} color={ColorTypes.blue} fontSize={FontSizeTypes.l}>
                Участники
            </Title>
            <Table onRowClick={onRowClick} data={members} columns={memberColumns} />
        </Column>
    );
};

export { TeamTable };
