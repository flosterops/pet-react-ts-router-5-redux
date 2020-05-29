import * as React from 'react';
import { ModalTypes } from 'models/UIEnums';
import { CreateTeamModal } from 'widgets/Modals/components/CreateTeamModal';
import { CreateTournamentModal } from 'widgets/Modals/components/CreateTournamentModal';
import { CreateDancerModal } from 'widgets/Modals/components/CreateDancerModal';
import { FinishTournamentModal } from 'widgets/Modals/components/FinishTournamentModal';

const getModalComponent = (type: ModalTypes, options: any, closeModal) => {
    switch (type) {
        case ModalTypes.createTeamModal:
            return <CreateTeamModal options={options} onClose={closeModal} />;
        case ModalTypes.createTournamentModal:
            return <CreateTournamentModal options={options} onClose={closeModal} />;
        case ModalTypes.createDancerModal:
            return <CreateDancerModal options={options} onClose={closeModal} />;
        case ModalTypes.finishTournament:
            return <FinishTournamentModal options={options} onClose={closeModal} />;
        case ModalTypes.infoModal:
            return null;
        default:
            return 'No such modal as type';
    }
};

export { getModalComponent };
