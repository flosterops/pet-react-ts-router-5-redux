const getTeamsColumn = () => {
    return [
        {
            title: 'Название',
            dataIndex: 'teamTitle',
            key: 'teamTitle'
        },
        {
            title: 'Описание',
            dataIndex: 'teamDescription',
            key: 'teamDescription'
        }
    ];
};

export { getTeamsColumn };
