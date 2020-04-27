import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFirms } from 'store/reducers/firmsReducer/actions';
import { Table } from 'widgets/Table';
import { Column } from 'ui/Layout';
import { Title } from 'ui/Title';
import { firmsColumns } from 'modules/Firms/helpers';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    IconTypes,
    JustifyContentTypes,
    TagNameTypes
} from 'models/UIEnums';
import './style.scss';
import { Icon } from 'ui/Icon';

const Firms = ({ fetchFirms, firms }) => {
    useEffect(() => {
        fetchFirms();
    }, []);

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
                    className="firms__title"
                    tagName={TagNameTypes.h1}
                    color={ColorTypes.white}
                    fontSize={FontSizeTypes.xxl}
                >
                    Фирмы
                </Title>
            </Column>
            <Table columns={firmsColumns} data={firms} />
        </Column>
    );
};

const ConnectedFirms = connect(
    ({ firms }) => {
        return { firms: firms.firms };
    },
    { fetchFirms }
)(Firms);

export { ConnectedFirms as Firms };
