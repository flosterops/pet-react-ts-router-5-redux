import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from 'store/reducers/appReducer/actions';
import { Logo } from 'widgets/Logo';
import { UserLogo } from 'widgets/UserLogo';
import { Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    JustifyContentTypes,
    ModalTypes,
    TagNameTypes
} from 'models/UIEnums';
import { IUserModel } from 'models/User';
import './style.scss';

interface IHeaderProps {
    appUser: IUserModel;
    openModal: (type: ModalTypes, options: any) => void;
    logoutUser: () => void;
}

const Header: React.FC<IHeaderProps> = ({ appUser, openModal, logoutUser }): React.ReactElement => {
    return (
        <Row className="header" ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween}>
            <Logo />
            <Link to="/">
                <Row widthAuto>
                    <Title color={ColorTypes.white} fontSize={FontSizeTypes.xl} tagName={TagNameTypes.h1}>
                        Dancer.Dance
                    </Title>
                </Row>
            </Link>
            <UserLogo user={appUser} logout={logoutUser} openModal={openModal} />
        </Row>
    );
};

const ConnectedHeader = connect(({ app }) => ({ appUser: app.appUser }), { logoutUser })(Header);

export { ConnectedHeader as Header };
