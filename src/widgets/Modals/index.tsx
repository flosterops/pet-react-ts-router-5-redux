import * as React from 'react';
import { getModalComponent } from 'widgets/Modals/helpers';
import { Column } from 'ui/Layout';
import { AlignItemsTypes, JustifyContentTypes } from 'models/UIEnums';
import './style.scss';

const Modals = ({ modals, closeModal }) => {
    if (!modals.length) {
        return null;
    }
    return (
        <Column className="modal" jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
            {modals.map(({ type, options }) => getModalComponent(type, options, closeModal))}
        </Column>
    );
};

export { Modals };
