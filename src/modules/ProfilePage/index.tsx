import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from 'store/reducers/userReducer/actions';
import { openModal } from 'store/reducers/modalReducer/actions';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Loader } from 'ui/Loader';
import { ProfileForm } from 'modules/ProfilePage/ProfileForm';
import { ProfileActivity } from 'modules/ProfilePage/ProfileActivity';
import { UserPhoto } from 'modules/ProfilePage/UserPhoto';
import { AlignItemsTypes, ColorTypes, FontSizeTypes, JustifyContentTypes, TagNameTypes } from 'models/UIEnums';
import './style.scss';

const ProfilePage = ({ user, fetchUser, appUser, userTeam, openModal }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        fetchUser(id);
    }, []);

    if (!user) {
        return (
            <Column fullHeight ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
                <Loader size={64} />;
            </Column>
        );
    }

    const currentUser = !appUser ? false : appUser._id === id;

    return (
        <Column ai={AlignItemsTypes.flexStart} className="profile-page">
            <Row widthAuto className="profile-page__title">
                <Title tagName={TagNameTypes.default} color={ColorTypes.blue} fontSize={FontSizeTypes.xl}>
                    Личный кабинет
                </Title>
            </Row>
            <Row fullHeight>
                <Column ai={AlignItemsTypes.center} className="profile-page__photo">
                    <Row jc={JustifyContentTypes.center} className="profile-page__photo_item">
                        <UserPhoto />
                    </Row>
                    {!editMode && currentUser && (
                        <Button type="primary" onClick={() => setEditMode(true)}>
                            Изменить
                        </Button>
                    )}
                </Column>
                <Row jc={JustifyContentTypes.spaceBetween}>
                    <ProfileForm user={user} isEdit={editMode} setEditMode={setEditMode} />
                    <ProfileActivity userTeam={userTeam} openModal={openModal} fetchUser={fetchUser} />
                </Row>
            </Row>
        </Column>
    );
};

const ConnectedProfilePage = connect(
    ({ user, app }) => ({
        user: user.user,
        userTeam: user.userTeam,
        appUser: app.appUser
    }),
    { fetchUser, openModal }
)(ProfilePage);

export { ConnectedProfilePage as ProfilePage };
