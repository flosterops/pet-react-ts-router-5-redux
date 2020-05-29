import React, { useState } from 'react';
import store from 'store';
import { Button, Select } from 'antd';
import { addTeam } from 'store/reducers/teamReducer/actions';
import { ModalField } from 'widgets/Modals/components/CreateTeamModal/ModalField';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Icon } from 'ui/Icon';
import { Description } from 'ui/Description';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    IconTypes,
    JustifyContentTypes,
    TagNameTypes
} from 'models/UIEnums';
import './style.scss';

const FinishTournamentModal = ({ options, onClose }) => {
    const [winner, setWinner] = useState<string>();
    const { teams } = options;
    const { Option } = Select;

    const handleChange = value => {
        setWinner(value);
    };

    const onFinish = () => {
        onClose();
    };

    return (
        <Column className="modal-crt-team" jc={JustifyContentTypes.center}>
            <Row className="modal-crt-team__header" jc={JustifyContentTypes.spaceBetween} ai={AlignItemsTypes.center}>
                <Title color={ColorTypes.blue} tagName={TagNameTypes.default} fontSize={FontSizeTypes.l} uppercase>
                    добавление фирмы
                </Title>
                <Row pointer widthAuto onClick={onClose} className="modal-crt-team__close">
                    <Icon className="modal-crt-team__close" type={IconTypes.iconCloseBlack} />
                </Row>
            </Row>
            <Column jc={JustifyContentTypes.spaceAround} fullHeight>
                <Select
                    className="modal-crt-team__select"
                    placeholder="Команда победитель"
                    onChange={handleChange}
                >
                    {teams.map(({ _id, teamTitle }) => (
                        <Option value={_id}>{teamTitle}</Option>
                    ))}
                </Select>
            </Column>
            <Column jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.center} className="modal-crt-team__footer">
                <Button type="primary" onClick={onFinish}>
                    Добавить
                </Button>
            </Column>
        </Column>
    );
};

export { FinishTournamentModal };
