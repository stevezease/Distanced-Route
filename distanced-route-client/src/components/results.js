import React, { useState } from 'react';
import './results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDirections,
    faCar,
    faTrain,
    faWalking,
    faBicycle,
    faPlane
} from '@fortawesome/free-solid-svg-icons';

const Results = ({ directions }) => {
    console.log(directions);
    const [activePage, setActivePage] = useState(0);
    const [day, setDay] = useState(new Date().getDay());
    const leg = directions.routes[activePage].legs[0];
    const steps = leg.steps;
    console.log(steps);
    const stepsGenerator = (location, first, last, rowIndex) => {
        return (
            <div className="steps-row">
                <div className="steps-content">
                    <div className="steps-instruction">
                        {!first && <div className="top-segment" />}
                        {!last && <div className="bottom-segment" />}
                        <div className="step-bullet" />
                        {location.label}
                    </div>
                    <div className="steps-popularity">
                        {location.popularity[day].map((popularity, index) => {
                            return (
                                <div
                                    class="popularity-block fade-in"
                                    style={{
                                        background: `hsla(0, 80%, 50%, ${(100 *
                                            popularity) /
                                            100}%)`,
                                        animationDelay: `${rowIndex * 75 +
                                            index * 40}ms`,
                                        opacity: 0
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
                {/* {step.steps &&
                    step.steps.map(subStep => {
                        return stepsGenerator(subStep, depth + 1);
                    })} */}
            </div>
        );
    };
    return (
        <div className="results-page">
            <h1 className="results-header">
                {leg.start_address} ⇨ {leg.end_address}
            </h1>
            <div className="label-container">
                {[
                    12,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ].map((x, index) => {
                    return (
                        <div class="label-block">{`${x}${
                            index >= 12 ? 'pm' : 'am'
                        }`}</div>
                    );
                })}
            </div>

            <div className="steps-container">
                <div className="step-travel-mode-container">
                    {steps.map((step, index) => {
                        return (
                            <div className="step-travel-mode">
                                <FontAwesomeIcon
                                    icon={
                                        step.travel_mode === 'WALKING'
                                            ? faWalking
                                            : faTrain
                                    }
                                />{' '}
                                <div className="step-travel-mode-label">
                                    {step.travel_mode}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {steps.map((step, index) => {
                    const first = index === 0;
                    const last = index === steps.length - 1;
                    if (index === steps.length - 1) {
                        return (
                            <React.Fragment>
                                {stepsGenerator(
                                    step.start_location,
                                    first,
                                    last - 1,
                                    index
                                )}
                                {stepsGenerator(
                                    step.end_location,
                                    first,
                                    last,
                                    index + 1
                                )}
                            </React.Fragment>
                        );
                    }
                    return stepsGenerator(
                        step.start_location,
                        first,
                        last,
                        index
                    );
                })}
            </div>
        </div>
    );
};

export default Results;
