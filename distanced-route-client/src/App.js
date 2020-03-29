import React, { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import './App.css';
import useScript from './hooks/useScript';
import Header from './components/header';
import Results from './components/results';
import { generateDirections } from './utils/google-api';

function App() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [generatedDirections, setGeneratedDirections] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const generateRoute = async form => {
        const directions = await generateDirections(form);
        setGeneratedDirections(directions);
        setShowResults(true);
    };
    useScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`,
        () => setScriptLoaded(true)
    );
    return (
        <div className="App" id="main">
            <div
                className={`app-background ${scriptLoaded ? 'blurred' : ''}`}
            ></div>
            <div className="app-header">
                {scriptLoaded && !showResults && (
                    <Header generateRoute={generateRoute} />
                )}
            </div>
            {generatedDirections && showResults && (
                <div className="app-results fade-in">
                    <Results
                        directions={generatedDirections}
                        closeResults={() => {
                            setShowResults(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
