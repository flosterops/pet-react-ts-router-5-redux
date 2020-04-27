import * as React from 'react';
import cx from 'classnames';
import './style.scss';

interface IDescriptionProps {
    color?: any;
    margin?: any;
    fontSize?: any;
    uppercase?: any;
    underline?: any;
    nowrap?: any;
    className?: any;
    children?: any;
}

const Description: React.FC<IDescriptionProps> = ({
    color,
    margin,
    fontSize,
    uppercase,
    underline,
    nowrap,
    className,
    children
}) => {
    const classNames = cx(
        color ? `description__${color}` : 'description__black',
        fontSize
            ? `description__fontSize_${fontSize}`
            : `description__fontSize_s`,
        uppercase && 'description__uppercase',
        nowrap && 'description__nowrap',
        underline && 'description__underline',
        className && className
    );

    return <p className={classNames}>{children}</p>;
};

export { Description };
