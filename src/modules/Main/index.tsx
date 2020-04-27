import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'ui/Layout';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    JustifyContentTypes
} from 'models/UIEnums';
import config from './config.json';
import './style.scss';
import { Description } from 'ui/Description';

const Main = () => {
    return (
        <Row ai={AlignItemsTypes.center} fullHeight className="main">
            <Row
                jc={JustifyContentTypes.spaceAround}
                ai={AlignItemsTypes.center}
                className="main__tabs"
            >
                {config.map(({ id, text, url }) => {
                    return (
                        <NavLink key={id} to={url}>
                            <Description
                                fontSize={FontSizeTypes.xl}
                                color={ColorTypes.white}
                            >
                                {text}
                            </Description>
                        </NavLink>
                    );
                })}
            </Row>
        </Row>
    );
};

export { Main };
