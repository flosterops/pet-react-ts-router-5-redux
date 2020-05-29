const getTeamTableColumns = () => {
    return [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Фамилия',
            dataIndex: 'surname',
            key: 'surname'
        },
        {
            title: 'Отчество',
            dataIndex: 'patronymic',
            key: 'patronymic'
        }
    ];
};

export { getTeamTableColumns };
