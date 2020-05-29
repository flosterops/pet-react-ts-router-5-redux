import React, { useState } from 'react';
import store from 'store';
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
import config from './config.json';
import './style.scss';
import { Button } from 'antd';
import { addTeam } from 'store/reducers/teamReducer/actions';

interface ICreateTeamModalProps {
    options: any;
    onClose: (...args) => void;
}

interface ICreateTeamModalState {
    teamMembers: string[];
    teamTitle: string;
    teamDescription: string;
}

const CreateTeamModal: React.FC<ICreateTeamModalProps> = ({ options, onClose }): React.ReactElement => {
    const [formFields, changeFormFields] = useState<ICreateTeamModalState>({
        teamMembers: [],
        teamTitle: '',
        teamDescription: ''
    });

    const handleChange = (e, id, type, field) => {
        if (type !== 'select') {
            const { value } = e.target;
            return changeFormFields({ ...formFields, [field]: value });
        }
    };

    const onAddTeam = () => {
        const { teamTitle, teamDescription } = formFields;
        const { fetchUser } = options;
        const { _id: userId } = store.getState().user.user;
        addTeam({ teamTitle, teamDescription, userId }).then(res => {
            const { data, error } = res;
            if (!error) {
                fetchUser(userId);
                onClose();
            }
        });
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
                {config.map(({ id, type, field, label }) => (
                    <Column jc={JustifyContentTypes.flexStart} key={id}>
                        <Description className="modal-crt-team__label">{label}</Description>
                        <ModalField type={type} field={field} id={id} onChange={handleChange} />
                    </Column>
                ))}
            </Column>
            <Column jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.center} className="modal-crt-team__footer">
                <Button type="primary" onClick={onAddTeam}>
                    Добавить
                </Button>
            </Column>
        </Column>
    );
};

export { CreateTeamModal };
