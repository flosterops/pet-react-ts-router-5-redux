import React from 'react';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { Title } from 'ui/Title';
import { ColorTypes, FontSizeTypes, TagNameTypes } from 'models/UIEnums';

const TeamActivity = ({ activity }) => {
    return (
        <Column>
            <Title tagName={TagNameTypes.default} color={ColorTypes.blue} fontSize={FontSizeTypes.l}>
                Активность
            </Title>
            <Table data={activity} columns={[]} />
        </Column>
    );
};

export { TeamActivity };
