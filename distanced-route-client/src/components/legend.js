import React from 'react';
import './legend.css';
const Legend = () => {
    return (
        <div className="legend">
            <div>Empty</div>
            <div className="legend-bar-container">
                {[...Array(10)].map((_, index) => {
                    return (
                        <div
                            className="legend-bar"
                            style={{
                                background: `hsla(0, 80%, 50%, ${(100 * index) /
                                    10}%`
                            }}
                        />
                    );
                })}
            </div>
            <div>Busiest</div>
        </div>
    );
};

export default Legend;
