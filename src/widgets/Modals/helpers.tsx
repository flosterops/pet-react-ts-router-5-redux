import { ModalTypes } from 'models/UIEnums';

const getModalComponent = (type: ModalTypes, options: any, closeModal) => {
    switch (type) {
        case ModalTypes.createContract:
            return null;
        case ModalTypes.createFirm:
            return null;
        case ModalTypes.infoModal:
            return null;
        default:
            return 'No such modal as type';
    }
};

export { getModalComponent };
