import * as React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getPrettifyUserName } from 'widgets/Logo/helpers';
import { Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { AlignItemsTypes, ColorTypes, ModalTypes } from 'models/UIEnums';
import { IUserModel } from 'models/User';
import './style.scss';

const DefaultUser = () => (
    <Link to="/auth">
        <Row ai={AlignItemsTypes.center} widthAuto pointer>
            <Description className="user-logo__text" color={ColorTypes.white}>
                Войти
            </Description>
            <Avatar size={42} icon={<UserOutlined />} />
        </Row>
    </Link>
);

interface IUserLogoProps {
    user: IUserModel;
    openModal: (type: ModalTypes, options: any) => void;
    logout: () => void;
}

const UserLogo: React.FC<IUserLogoProps> = ({ user, openModal, logout }): React.ReactElement => {
    if (!user) {
        return <DefaultUser />;
    }

    const { name, surname, patronymic, _id: id } = user;
    const prettifyUserName = getPrettifyUserName(name, surname, patronymic);

    return (
        <Row ai={AlignItemsTypes.center} pointer widthAuto className="user-logo">
            <Link to={`/profile/${id}`}>
                <Description nowrap color={ColorTypes.white} className="user-logo__text">
                    {prettifyUserName}
                </Description>
            </Link>
            <Row onClick={logout}>
                <Avatar size={42} icon={<LogoutOutlined />} />
            </Row>
        </Row>
    );
};

export { UserLogo };
