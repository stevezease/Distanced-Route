import React from 'react';
import './transportation-selector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDirections,
    faCar,
    faTrain,
    faWalking,
    faBicycle,
    faPlane
} from '@fortawesome/free-solid-svg-icons';

const TransportationSelector = ({ transportationState }) => {
    console.log(transportationState);
    const [transportation, setTransportation] = transportationState;
    const transportationModes = [
        {
            icon: faCar,
            id: 'driving'
        },
        {
            icon: faTrain,
            id: 'transit'
        },
        {
            icon: faWalking,
            id: 'walking'
        },
        {
            icon: faBicycle,
            id: 'bicycling'
        }
    ];
    return (
        <div class="transportation-selector">
            {transportationModes.map(({ icon, id }) => {
                return (
                    <div
                        className={`transpotation-button ${
                            id === transportation ? 'active' : ''
                        }`}
                        onClick={() => {
                            setTransportation(id);
                        }}
                    >
                        <FontAwesomeIcon icon={icon} />
                    </div>
                );
            })}
        </div>
    );
};

export default TransportationSelector;
