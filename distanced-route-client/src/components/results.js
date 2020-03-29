import React, { useState } from 'react';
import './results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import {
    faDirections,
    faCar,
    faTrain,
    faWalking,
    faBicycle,
    faPlane
} from '@fortawesome/free-solid-svg-icons';
import Legend from './legend';

const Results = ({ directions, closeResults }) => {
    console.log(directions);
    const [activePage, setActivePage] = useState(0);
    const [day, setDay] = useState(new Date().getDay());
    const dotw = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Thursday',
        'Wednesday',
        'Friday',
        'Saturday'
    ];
    const hourPercentage =
        (new Date().getHours() * 60 + new Date().getMinutes()) / (24 * 60);
    const numRoutes = directions.routes.length;
    const leg = directions.routes[activePage].legs[0];
    const steps = leg.steps;
    console.log(steps);
    let summedPopularity = new Array(24).fill(0);
    steps.forEach((step, index) => {
        for (let i = 0; i < 24; i++) {
            summedPopularity[i] += step.start_location.popularity[day][i];
            if (index === steps.length - 1) {
                summedPopularity[i] += step.end_location.popularity[day][i];
            }
        }
    });
    const max = summedPopularity.reduce((a, b) => Math.max(a, b));
    summedPopularity = summedPopularity.map(val =>
        Math.floor((100 * val) / max)
    );
    console.log(summedPopularity);
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
                                <Tooltip
                                    key={`${popularity},${index},${activePage}`}
                                    placement="left"
                                    overlay={
                                        <span>{`${Math.floor(
                                            popularity
                                        )}% Busyness`}</span>
                                    }
                                >
                                    <div
                                        key={`${popularity},${index},${activePage}`}
                                        class="popularity-block fade-in"
                                        data-effect="solid"
                                        style={{
                                            background: `hsla(0, 80%, 50%, ${(100 *
                                                popularity) /
                                                100}%)`,
                                            animationDelay: `${rowIndex * 75 +
                                                index * 40}ms`,
                                            opacity: 0
                                        }}
                                    ></div>
                                </Tooltip>
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
            <button className="back-button" onClick={closeResults}>
                {' '}
                Back to Search{' '}
            </button>
            <h1 className="results-header">
                {leg.start_address} ⇨ {leg.end_address}
            </h1>
            <div className="label-container">
                <div className="tabs-container">
                    {[...Array(7)].map((x, index) => {
                        return (
                            <div
                                key={'dowtabs,' + index}
                                className={`tab dow ${
                                    index === day ? 'active' : ''
                                }`}
                                onClick={() => {
                                    setDay(index);
                                }}
                            >
                                {dotw[index]}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="tabs-container">
                <div style={{ display: 'inline-block', padding: '0px 3px' }}>
                    {' '}
                    Routes:{' '}
                </div>
                {[...Array(numRoutes)].map((x, index) => {
                    return (
                        <div
                            key={'tabs,' + index}
                            className={`tab ${
                                index === activePage ? 'active' : ''
                            }`}
                            onClick={() => {
                                setActivePage(index);
                            }}
                        >
                            {index + 1}
                        </div>
                    );
                })}
            </div>
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
                        <div key={'time,' + index} class="label-block">{`${x}${
                            index >= 12 ? 'pm' : 'am'
                        }`}</div>
                    );
                })}
            </div>

            <div className="steps-container">
                <div className="step-travel-mode-container">
                    {steps.map((step, index) => {
                        return (
                            <div
                                className="step-travel-mode"
                                key={'step-travel,' + index}
                            >
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
                            <React.Fragment key={'steps,' + index}>
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
                <div
                    className="time-pointer"
                    style={{
                        left: `calc(300px + (100% - 300px) * ${hourPercentage})`
                    }}
                />
            </div>
            <div className="label-container">
                {summedPopularity.map(num => {
                    return (
                        <div
                            style={{
                                color: `hsla(0, ${Math.pow(
                                    num / 10,
                                    2
                                )}%, 50%, 1)`
                            }}
                            className="label-block"
                        >
                            {num}%
                        </div>
                    );
                })}
                <div className="legend-shell">
                    <Legend />
                </div>
            </div>
        </div>
    );
};

export default Results;
