import moment from 'moment';

function getDate(date): string {
    return moment.unix(date).format('DD.MM.YYYY');
}

export { getDate };
