import React from 'react';

const ChevronLeft = ({ width, height, className, fill, onClick }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            height={height ? height : '24'}
            viewBox='0 0 24 24'
            width={width ? width : '24'}
            className={className && className}
            fill={fill ? fill : 'black'}
            onClick={onClick}
        >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
        </svg>
    );
};

export default ChevronLeft;
