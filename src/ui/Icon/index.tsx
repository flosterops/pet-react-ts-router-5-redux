import * as React from 'react';
// @ts-ignore
import iconBackWhite from 'statics/icon-back-white.svg';
import { IconTypes } from 'models/UIEnums';
const ICON_FACTORY = {
    'icon-back-white': iconBackWhite
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
