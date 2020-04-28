import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFirms } from 'store/reducers/firmsReducer/actions';
import { openModal } from 'store/reducers/modalReducer/actions';
import { Table } from 'widgets/Table';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Icon } from 'ui/Icon';
import { Description } from 'ui/Description';
import { RequestTypes } from 'models/RequestTypes';
import { request } from 'helpers/request';
import { Config } from 'helpers/Config';
import { getFirmColumns } from './helpers';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    IconTypes,
    JustifyContentTypes,
    ModalTypes,
    TagNameTypes
} from 'models/UIEnums';
import './style.scss';

const Firms = ({ fetchFirms, firms, openModal }) => {
    useEffect(() => {
        fetchFirms();
    }, []);

    const onAddFirm = () => {
        openModal(ModalTypes.createFirm, { fetchFirms });
    };

    const onDeleteFirm = (firmId: string) => {
        request(RequestTypes.post, Config('/firm/delete'), { id: firmId }).then(
            res => {
                fetchFirms();
            }
        );
    };

    const onEditFirm = (firmId: string, firmData) => {
        openModal(ModalTypes.createFirm, {
            fetchFirms,
            firmData: { ...firmData, firmId }
        });
    };

    const addContract = (firmId: string) => {
        openModal(ModalTypes.createContract, {
            fetchFirms,
            firmId
        });
    };

    const firmsColumns = getFirmColumns(onDeleteFirm, onEditFirm, addContract);

    return (
        <Column>
            <Column className="firms__header" jc={JustifyContentTypes.center}>
                <Link to="/" className="firms__icon">
                    <Column
                        jc={JustifyContentTypes.center}
                        ai={AlignItemsTypes.center}
                    >
                        <Icon type={IconTypes.iconBackWhite} />
                    </Column>
                </Link>
                <Title
                    tagName={TagNameTypes.h1}
                    color={ColorTypes.white}
                    fontSize={FontSizeTypes.xxl}
                >
                    Фирмы
                </Title>
                <Row
                    className="firms__add"
                    ai={AlignItemsTypes.center}
                    onClick={onAddFirm}
                    widthAuto
                    pointer
                >
                    <Description
                        color={ColorTypes.white}
                        fontSize={FontSizeTypes.m}
                        uppercase
                    >
                        добавить фирму
                    </Description>
                </Row>
            </Column>
            <Table columns={firmsColumns} data={firms} />
        </Column>
    );
};

const ConnectedFirms = connect(
    ({ firms }) => {
        return { firms: firms.firms };
    },
    { fetchFirms, openModal }
)(Firms);

export { ConnectedFirms as Firms };
