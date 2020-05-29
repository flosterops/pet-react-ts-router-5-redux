import React from 'react';
import { Button } from 'antd';
import { Row } from 'ui/Layout';
import './style.scss';
import { JustifyContentTypes } from 'models/UIEnums';

const getTournamentsRequestsColumns = (onAccept, onCancel) => {
    return [
        {
            title: 'Название турнира',
            dataIndex: 'tournamentTitle',
            key: 'tournamentTitle'
        },
        {
            title: 'Название команды',
            dataIndex: 'teamTitle',
            key: 'teamTitle'
        },
        {
            title: '',
            dataIndex: 'startDate',
            key: 'startDate',
            render: (value, args) => {
                const { tournamentId, teamId, _id: id } = args;
                return (
                    <Row widthAuto jc={JustifyContentTypes.flexEnd}>
                        <Button
                            onClick={() => onAccept(tournamentId, teamId, id)}
                            className="request-trn__button"
                            type="primary"
                        >
                            Одобрить
                        </Button>
                        <Button onClick={() => onCancel(id)} className="request-trn__button" type="primary" danger>
                            Отменить
                        </Button>
                    </Row>
                );
            }
        }
    ];
};

export { getTournamentsRequestsColumns };
