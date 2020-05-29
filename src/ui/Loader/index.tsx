import React from 'react';
import cx from 'classnames';
import './style.scss';

interface ILoaderProps {
    size: number;
    className?: string;
}

const Loader: React.FC<ILoaderProps> = ({ size, className }) => {
    return (
        <div className={cx('loader__block', className)}>
            <svg
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
                className="loader__spinner"
                width={size}
                height={size}
            >
                <circle
                    className="loader__path"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    cx="33"
                    cy="33"
                    r="30"
                />
            </svg>
        </div>
    );
};

export { Loader };
