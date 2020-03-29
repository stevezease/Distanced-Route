import React, { useState } from 'react';
import TransportationSelector from './transportation-selector';
import Geosuggest from 'react-geosuggest';

const defaultForm = {
    origin: null,
    destination: null,
    transportation: 'transit'
};
const Header = ({ generateRoute }) => {
    const [form, setForm] = useState(defaultForm);
    const [transportation, setTransportation] = useState('transit');
    const onSuggestSelect = (context, value) => {
        setForm({
            ...form,
            [context]: value
        });
    };
    const inputStyle = {
        input: {
            padding: '10px 20px',
            boxSizing: 'border-box',
            borderRadius: '5px',
            border: '1px solid rgba(0, 0, 0, 0.25)',
            fontSize: '1.5em'
        },
        suggests: {},
        suggestItem: {}
    };
    return (
        <div className="app-header-content fade-in-slow">
            <h1 className="app-title">A Distanced Route</h1>
            <div className="app-sub-title">
                {' '}
                For those trying to socially distance or just socially awkward
            </div>
            <TransportationSelector
                transportationState={[transportation, setTransportation]}
            />
            <Geosuggest
                style={inputStyle}
                placeholder="Origin"
                onSuggestSelect={value => onSuggestSelect('origin', value)}
            />

            <Geosuggest
                style={inputStyle}
                placeholder="Destination"
                onSuggestSelect={value => onSuggestSelect('destination', value)}
            />

            <button
                onClick={() => {
                    generateRoute(form);
                }}
                class={`submission-button ${
                    !form.origin || !form.destination ? 'disabled' : ''
                }`}
            >
                Find A Route
            </button>
        </div>
    );
};

export default Header;
