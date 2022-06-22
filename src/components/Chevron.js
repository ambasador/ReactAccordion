import React from 'react';
import PropTypes from 'prop-types';

function Chevron({className, height, width, fill}) {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 12"
        >
            <path
                fill={fill}
                d="M8.6,11.2L0,2.6L2.6,0l6.1,6.1L14.7,0l2.6,2.6L8.6,11.2z"
            />
        </svg>
    );
}

Chevron.propTypes = {
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    fill: PropTypes.string,
};
export default Chevron;