import * as React from 'react';
import cx from 'classnames';
import {
    JustifyContentTypes,
    AlignItemsTypes,
    DirectionTypes
} from 'models/UIEnums';
import './style.scss';

interface ILayoutProps {
    jc?: JustifyContentTypes;
    ai?: AlignItemsTypes;
    fullHeight?: boolean;
    widthAuto?: boolean;
    className?: string;
    direction?: DirectionTypes;
    children?: React.ReactChildren;
}

const Layout: React.FC<ILayoutProps> = ({
    jc,
    ai,
    fullHeight,
    widthAuto,
    className,
    direction,
    children
}) => {
    const classNames = cx(
        'layout',
        jc && `layout__jc_${jc}`,
        ai && `layout__ai_${ai}`,
        direction ? `layout__direction_${direction}` : 'layout__direction_row',
        fullHeight && 'layout__fullHeight',
        widthAuto && 'layout__widthAuto',
        className && className
    );

    return <div className={classNames}>{children}</div>;
};

const Row = props => {
    return <Layout {...props} />;
};

const Column = props => {
    return <Layout {...props} direction="column" />;
};

export { Layout, Row, Column };
