import { getTournamentStatusText } from 'helpers/tournament';
import { getDate } from 'helpers/dates';
import { getPrice } from 'helpers/price';

const getMainTableColumns = () => {
    return [
        {
            title: 'Название',
            dataIndex: 'tournamentTitle',
            key: 'tournamentTitle'
        },
        {
            title: 'Призовой фонд',
            dataIndex: 'tournamentPrice',
            key: 'tournamentPrice',
            render: price => getPrice(price)
        },
        {
            title: 'Дата начала',
            dataIndex: 'startDate',
            key: 'startDate',
            render: startDate => getDate(startDate)
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: status => getTournamentStatusText(status)
        }
    ];
};

export { getMainTableColumns };
