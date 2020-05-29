import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Column, Row } from 'ui/Layout';
import { JustifyContentTypes, ModalTypes } from 'models/UIEnums';
import config from './config.json';
import 'antd/dist/antd.css';
import './style.scss';

interface IAdminPanelProps {
    openModal: (type: ModalTypes, options: any) => void;
}

const AdminPanel: React.FC<IAdminPanelProps> = ({ openModal }) => {
    const onElementClick = type => {
        openModal(type, null);
    };

    return (
        <Column className="admin-panel">
            <Column>
                {config.addPanel.map(({ type, text, id }) => (
                    <Button key={id} className="admin-panel__item" type="primary" onClick={() => onElementClick(type)}>
                        {`+ ${text}`}
                    </Button>
                ))}
            </Column>
            <Column>
                {config.requestPanel.map(({ url, text, id }) => (
                    <Link to={url} key={id}>
                        <Button className="admin-panel__item" type="primary">
                            {text}
                        </Button>
                    </Link>
                ))}
            </Column>
        </Column>
    );
};

export { AdminPanel };
