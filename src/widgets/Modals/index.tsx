import * as React from 'react';
import { Column } from 'ui/Layout';

const Modals = ({ modals, openModal, closeModal }) => {
    return <Column>
        {getModalComponent}
    </Column>;
};
