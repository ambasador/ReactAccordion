import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Chevron from './Chevron';
import './Accordion.css';


function Accordion({question, answer}) {
    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState('accordion__icon');

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(
            setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === 'active'
                ? 'accordion__icon'
                : 'accordion__icon rotate'
        );
    }
    return (
        <div className={`accordion__section ${setActive}`}>
            <button
                className={`accordion ${setActive}`}
                onClick={toggleAccordion}
            >
                <p className="accordion__title">{question}</p>
                <Chevron
                    className={`${setRotate}`}
                    width={18}
                    height={13}
                    fill={'#f60'}
                />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <div
                    className="accordion__content--text"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
        </div>
    );
}

Accordion.propTypes = {
    pytanie: PropTypes.string,
    odpowiedz: PropTypes.string,
};

export { Accordion };