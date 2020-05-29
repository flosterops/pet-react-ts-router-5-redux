import React from 'react';
import { Column } from 'ui/Layout';
import { ProfileTeam } from 'modules/ProfilePage/ProfileActivity/ProfileTeam';

const ProfileActivity = ({ userTeam, openModal, fetchUser }) => {
    return (
        <Column>
            <ProfileTeam userTeam={userTeam} openModal={openModal} fetchUser={fetchUser} />
        </Column>
    );
};

export { ProfileActivity };
