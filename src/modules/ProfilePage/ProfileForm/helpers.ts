const getDefaultFormFields = user => {
    if (!user) {
        return {
            name: '',
            surname: '',
            patronymic: '',
            phone: 0
        };
    }
    return {
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic,
        phone: user.phone
    };
};

export { getDefaultFormFields };
