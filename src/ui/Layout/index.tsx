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
    pointer?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({
    jc,
    ai,
    fullHeight,
    widthAuto,
    className,
    direction,
    pointer,
    children,
    ...props
}) => {
    const classNames = cx(
        'layout',
        pointer && 'layout__pointer',
        jc && `layout__jc_${jc}`,
        ai && `layout__ai_${ai}`,
        direction ? `layout__direction_${direction}` : 'layout__direction_row',
        fullHeight && 'layout__fullHeight',
        widthAuto && 'layout__widthAuto',
        className && className
    );

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
};

const Row = props => {
    return <Layout {...props} />;
};

const Column = props => {
    return <Layout {...props} direction="column" />;
};

export { Layout, Row, Column };
