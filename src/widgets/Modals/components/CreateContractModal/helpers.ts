import moment from 'moment';

const getInitialModal = contractData => {
    if (!contractData) {
        return {
            name: '',
            numberd: '',
            sumd: '',
            datastart: '',
            datafinish: '',
            avans: ''
        };
    }
    return {
        name: contractData.name,
        numberd: contractData.numberd,
        sumd: contractData.sumd,
        datastart: moment.unix(contractData.datastart).format('YYYY-MM-DD'),
        datafinish: moment.unix(contractData.datafinish).format('YYYY-MM-DD'),
        avans: contractData.avans
    };
};

const getParamsModel = (formFields, contractData, contractId, firmId) => {
    if (!contractData) {
        return {
            name: formFields.name,
            numberd: Number(formFields.numberd),
            sumd: Number(formFields.sumd),
            datastart: moment(formFields.datastart).unix(),
            datafinish: moment(formFields.datafinish).unix(),
            avans: Number(formFields.avans),
            firmId
        };
    }
    return {
        name: formFields.name,
        numberd: Number(formFields.numberd),
        sumd: Number(formFields.sumd),
        datastart: moment(formFields.datastart).unix(),
        datafinish: moment(formFields.datafinish).unix(),
        avans: Number(formFields.avans),
        id: contractId
    };
};

export { getInitialModal, getParamsModel };
