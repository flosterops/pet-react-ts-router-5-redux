import * as React from 'react';
import { Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import {
    AlignItemsTypes,
    ColorTypes,
    JustifyContentTypes
} from 'models/UIEnums';
import './style.scss';

const Logo = (): React.ReactElement => {
    return (
        <Row
            ai={AlignItemsTypes.center}
            jc={JustifyContentTypes.center}
            widthAuto
            className="logo"
        >
            <Description color={ColorTypes.white}>Logo</Description>
        </Row>
    );
};

export { Logo };
