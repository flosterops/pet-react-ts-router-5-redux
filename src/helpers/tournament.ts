const tournamentStatusModel = [
    {
        status: 1,
        text: 'Открыт'
    },
    {
        status: 2,
        text: 'Окончен'
    },
    {
        status: 3,
        text: 'Сейчас проходит'
    },
    {
        status: 4,
        text: 'Отменен'
    },
    {
        status: 5,
        text: 'Перенесен'
    }
];

function getTournamentStatusText(status: number) {
    const { text }: any = tournamentStatusModel.find(item => status === item.status);
    return text;
}

export { getTournamentStatusText, tournamentStatusModel };
