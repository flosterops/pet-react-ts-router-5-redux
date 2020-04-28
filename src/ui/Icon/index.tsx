import * as React from 'react';
// @ts-ignore
import iconBackWhite from 'statics/icon-back-white.svg';
// @ts-ignore
import iconCloseBlack from 'statics/icon-close-black.svg';
// @ts-ignore
import iconMenu from 'statics/icon-menu.svg';
import { IconTypes } from 'models/UIEnums';

const ICON_FACTORY = {
    'icon-back-white': iconBackWhite,
    'icon-close-black': iconCloseBlack,
    'icon-menu': iconMenu
};

interface IIconProps {
    type: IconTypes;
    className?: string;
}

const Icon: React.FC<IIconProps> = ({
    type,
    className
}): React.ReactElement => {
    return <img alt={type} src={ICON_FACTORY[type]} className={className} />;
};

export { Icon };
