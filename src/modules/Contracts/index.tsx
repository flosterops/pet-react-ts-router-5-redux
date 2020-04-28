import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContracts } from 'store/reducers/contractsReducer/actions';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { Icon } from 'ui/Icon';
import { Title } from 'ui/Title';
import { getContractsColumns } from './helpers';
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
import { openModal } from 'store/reducers/modalReducer/actions';
import { request } from 'helpers/request';
import { RequestTypes } from 'models/RequestTypes';
import { Config } from 'helpers/Config';

const Contracts = ({ fetchContracts, contracts, openModal }) => {
    useEffect(() => {
        fetchContracts();
    }, []);

    const deleteContract = (contractId, firmId) => {
        request(RequestTypes.post, Config('/contract/delete'), {
            id: contractId,
            firmId
        }).then(res => {
            fetchContracts();
        });
    };

    const editContract = (id, contractData, firmId) => {
        openModal(ModalTypes.createContract, {
            fetchContracts,
            contractData: { ...contractData },
            contractId: id
        });
    };

    const contractsColumns = getContractsColumns(deleteContract, editContract);

    return (
        <Column>
            <Column
                className="contracts__header"
                jc={JustifyContentTypes.center}
            >
                <Link to="/" className="contracts__icon">
                    <Column
                        jc={JustifyContentTypes.center}
                        ai={AlignItemsTypes.center}
                    >
                        <Icon type={IconTypes.iconBackWhite} />
                    </Column>
                </Link>
                <Title
                    className="contracts__title"
                    tagName={TagNameTypes.h1}
                    color={ColorTypes.white}
                    fontSize={FontSizeTypes.xxl}
                >
                    Договоры
                </Title>
            </Column>
            <Table columns={contractsColumns} data={contracts} />
        </Column>
    );
};

const ConnectedContracts = connect(
    ({ contracts }) => {
        return { contracts: contracts.contracts };
    },
    { fetchContracts, openModal }
)(Contracts);

export { ConnectedContracts as Contracts };
