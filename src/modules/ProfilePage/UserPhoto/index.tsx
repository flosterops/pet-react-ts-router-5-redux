import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserPhoto = () => {
    return <Avatar size={85} icon={<UserOutlined />} />;
};

export { UserPhoto };
