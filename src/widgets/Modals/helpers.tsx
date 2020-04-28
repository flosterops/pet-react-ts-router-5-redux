import * as React from 'react';
import { ModalTypes } from 'models/UIEnums';
import { CreateFirmModal } from 'widgets/Modals/components/CreateFirmModal';
import { CreateContractModal } from 'widgets/Modals/components/CreateContractModal';

const getModalComponent = (type: ModalTypes, options: any, closeModal) => {
    switch (type) {
        case ModalTypes.createContract:
            return (
                <CreateContractModal
                    options={options}
                    closeModal={closeModal}
                />
            );
        case ModalTypes.createFirm:
            return (
                <CreateFirmModal
                    key={type}
                    closeModal={closeModal}
                    options={options}
                />
            );
        case ModalTypes.infoModal:
            return null;
        default:
            return 'No such modal as type';
    }
};

export { getModalComponent };
