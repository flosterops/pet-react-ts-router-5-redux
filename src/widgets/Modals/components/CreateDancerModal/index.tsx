import React from 'react';
import { Button } from 'antd';
import { ModalField } from 'widgets/Modals/components/CreateDancerModal/ModalField';
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

const CreateDancerModal = ({ options, onClose }) => {
    return (
        <Column className="modal-crt-dancer" jc={JustifyContentTypes.center}>
            <Row className="modal-crt-dancer__header" jc={JustifyContentTypes.spaceBetween} ai={AlignItemsTypes.center}>
                <Title color={ColorTypes.blue} tagName={TagNameTypes.default} fontSize={FontSizeTypes.l} uppercase>
                    добавление фирмы
                </Title>
                <Row pointer widthAuto onClick={onClose} className="modal-crt-dancer__close">
                    <Icon className="modal-crt-dancer__close" type={IconTypes.iconCloseBlack} />
                </Row>
            </Row>
            <Column jc={JustifyContentTypes.spaceAround} fullHeight>
                {config.map(({ id, type, field, label }) => (
                    <Column jc={JustifyContentTypes.flexStart} key={id}>
                        <Description className="modal-crt-dancer__label">{label}</Description>
                        <ModalField type={type} field={field} id={id} formFields={{}} onChange={i => i} />
                    </Column>
                ))}
            </Column>
            <Column jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.center} className="modal-crt-dancer__footer">
                <Button type="primary" onClick={onClose}>
                    Добавить
                </Button>
            </Column>
        </Column>
    );
};

export { CreateDancerModal };
