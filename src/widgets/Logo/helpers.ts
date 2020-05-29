function getPrettifyUserName(name: string, surname: string, patronymic: string): string {
    const firstOfName = getFirstUpperTextString(name);
    const firstOfPatronymic = getFirstUpperTextString(patronymic);
    const prettifySurname = setSurnameAsFormat(surname);
    return `${prettifySurname} ${firstOfName}. ${firstOfPatronymic}.`;
}

function setSurnameAsFormat(string: string): string {
    const firstOfSurname = getFirstUpperTextString(string);
    const withoutFirstLetter = string.slice(1, string.length);
    return firstOfSurname + withoutFirstLetter;
}

function getFirstUpperTextString(string: string): string {
    return string.slice(0, 1).toUpperCase();
}

export { getPrettifyUserName };
