import React from 'react';

const ChevronRight = ({ width, height, className, fill, onClick }) => {
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
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
        </svg>
    );
};

export default ChevronRight;
