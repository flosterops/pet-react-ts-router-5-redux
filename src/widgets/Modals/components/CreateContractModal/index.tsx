import * as React from 'react';
import { useState } from 'react';
import { Description } from 'ui/Description';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Icon } from 'ui/Icon';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    IconTypes,
    JustifyContentTypes,
    TagNameTypes
} from 'models/UIEnums';
import { RequestTypes } from 'models/RequestTypes';
import { Config } from 'helpers/Config';
import { request } from 'helpers/request';
import config from './config.json';
import './style.scss';

const CreateContractModal = ({ closeModal, options }) => {
    const [formFields, setFormFields] = useState({
        name: '',
        numberd: '',
        sumd: '',
        datastart: '',
        datafinish: '',
        avans: ''
    });

    const handleChange = (e: any, name: string) => {
        setFormFields({ ...formFields, [name]: e.target.value });
    };

    const onAddClick = () => {
        const { fetchContracts, firmId } = options;
        request(RequestTypes.post, Config('/contracts'), {
            ...formFields,
            firmId
        }).then(res => {
            fetchContracts();
            closeModal();
        });
    };

    return (
        <Column className="modal-crt-firm" jc={JustifyContentTypes.center}>
            <Row
                className="modal-crt-firm__header"
                jc={JustifyContentTypes.spaceBetween}
                ai={AlignItemsTypes.center}
            >
                <Title
                    color={ColorTypes.blue}
                    tagName={TagNameTypes.default}
                    fontSize={FontSizeTypes.l}
                    uppercase
                >
                    добавление договора
                </Title>
                <Row
                    pointer
                    widthAuto
                    onClick={closeModal}
                    className="modal-crt-firm__close"
                >
                    <Icon
                        className="modal-crt-firm__close"
                        type={IconTypes.iconCloseBlack}
                    />
                </Row>
            </Row>
            <Column jc={JustifyContentTypes.spaceAround} fullHeight>
                {config.map(({ id, name, label }) => {
                    return (
                        <Column jc={JustifyContentTypes.flexStart} key={id}>
                            <Description className="modal-crt-firm__label">
                                {label}
                            </Description>
                            <input onChange={e => handleChange(e, name)} />
                        </Column>
                    );
                })}
            </Column>
            <Column
                jc={JustifyContentTypes.flexEnd}
                ai={AlignItemsTypes.center}
                className="modal-crt-firm__footer"
            >
                <button className="modal-crt-firm__button" onClick={onAddClick}>
                    Добавить
                </button>
            </Column>
        </Column>
    );
};

export { CreateContractModal };
