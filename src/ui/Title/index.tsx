import * as React from 'react';
import cx from 'classnames';
import { ColorTypes, FontSizeTypes, MarginTypes, TagNameTypes } from 'models/UIEnums';
import './style.scss';

interface ITitleProps {
    color?: ColorTypes;
    margin?: MarginTypes;
    fontSize?: FontSizeTypes;
    uppercase?: boolean;
    underline?: boolean;
    nowrap?: boolean;
    className?: string;
    children?: React.ReactChildren | string;
    tagName: TagNameTypes;
}

const Title: React.FC<ITitleProps> = ({
    color,
    margin,
    fontSize,
    uppercase,
    underline,
    nowrap,
    className,
    children,
    tagName
}) => {
    const classNames = cx(
        color ? `title__${color}` : 'title__black',
        fontSize ? `title__fontSize_${fontSize}` : `title__fontSize_s`,
        uppercase && 'title__uppercase',
        nowrap && 'title__nowrap',
        underline && 'title__underline',
        className && className
    );
    return React.createElement(tagName, { className: classNames }, children);
};

export { Title };
