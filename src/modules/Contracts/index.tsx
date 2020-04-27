import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContracts } from 'store/reducers/contractsReducer/actions';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { Icon } from 'ui/Icon';
import { Title } from 'ui/Title';
import { contractsColumns } from 'modules/Contracts/helpers';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    IconTypes,
    JustifyContentTypes,
    TagNameTypes
} from 'models/UIEnums';
import './style.scss';

const Contracts = ({ fetchContracts, contracts }) => {
    useEffect(() => {
        fetchContracts();
    }, []);

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
    { fetchContracts }
)(Contracts);

export { ConnectedContracts as Contracts };
