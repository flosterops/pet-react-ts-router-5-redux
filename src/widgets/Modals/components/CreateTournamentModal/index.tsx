import React, { useState } from 'react';
import { Button } from 'antd';
import moment from 'moment';
import { addTournament } from 'store/reducers/tournamentReducer/actions';
import { FieldModal } from 'widgets/Modals/components/CreateTournamentModal/FieldModal';
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

interface IFormFieldsModel {
    tournamentTitle: string;
    tournamentDescription: string;
    tournamentPrice: number;
    startDate: number;
    finishDate: number;
    maxTeams: number;
}

interface ICreateTournamentModalProps {
    options: any;
    onClose: (...args) => void;
}

const CreateTournamentModal: React.FC<ICreateTournamentModalProps> = ({ options, onClose }) => {
    const [formFields, changeFormsFields] = useState<IFormFieldsModel>({
        tournamentTitle: '',
        tournamentDescription: '',
        tournamentPrice: 0,
        startDate: 0,
        finishDate: 0,
        maxTeams: 0
    });

    const handleChange = (e, id, type, field) => {
        if (type === 'date') {
            return 'date';
        }
        if (type === 'select') {
            return 'select';
        }
        const { value } = e.target;
        changeFormsFields({ ...formFields, [field]: value });
    };

    const inputNumberChange = (value, field) => {
        changeFormsFields({ ...formFields, [field]: value });
    };

    const inputDateChange = (date, dateString, field) => {
        const unixDate = moment(date).unix();
        changeFormsFields({ ...formFields, [field]: unixDate });
    };

    const getOnChangeFuncByType = type => {
        switch (type) {
            case 'number':
                return inputNumberChange;
            case 'date':
                return inputDateChange;
            default:
                return handleChange;
        }
    };

    const onAdd = () => {
        addTournament(formFields).then(res => {
            const { data, error } = res;
            if (!error) {
                onClose();
            }
        });
    };

    return (
        <Column className="modal-crt-trn" jc={JustifyContentTypes.center}>
            <Row className="modal-crt-trn__header" jc={JustifyContentTypes.spaceBetween} ai={AlignItemsTypes.center}>
                <Title color={ColorTypes.blue} tagName={TagNameTypes.default} fontSize={FontSizeTypes.l} uppercase>
                    добавление фирмы
                </Title>
                <Row pointer widthAuto onClick={onClose} className="modal-crt-trn__close">
                    <Icon className="modal-crt-trn__close" type={IconTypes.iconCloseBlack} />
                </Row>
            </Row>
            <Column jc={JustifyContentTypes.spaceAround} fullHeight>
                {config.map(({ id, type, field, label }) => (
                    <Column jc={JustifyContentTypes.flexStart} key={id}>
                        <Description className="modal-crt-trn__label">{label}</Description>
                        <FieldModal
                            type={type}
                            field={field}
                            id={id}
                            onChange={getOnChangeFuncByType(type)}
                            value={formFields[field]}
                        />
                    </Column>
                ))}
            </Column>
            <Column jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.center} className="modal-crt-trn__footer">
                <Button type="primary" onClick={onAdd}>
                    Добавить
                </Button>
            </Column>
        </Column>
    );
};

export { CreateTournamentModal };
