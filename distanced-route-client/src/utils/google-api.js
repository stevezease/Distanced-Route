import ky from 'ky';
import { mockDirections } from './mock.js';
import faker from 'faker';

const googleMapsApiBaseUrl = 'http://maps.googleapis.com/maps/api/';
const generateMapsUrl = (extension, queryParams = {}) => {
    let url = `${googleMapsApiBaseUrl}${extension}/json`;
    if (Object.keys(queryParams) !== 0) {
        let counter = 0;
        Object.keys(queryParams).forEach(key => {
            if (counter === 0) {
                url += '?';
            } else {
                url += '&';
            }
            url += `${key}=${queryParams[key]}`;
            counter++;
        });
    }
    url += `key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    return url;
};

export const generateDirections = async form => {
    const originId = form.origin.placeId;
    const destinationId = form.destination.placeId;
    console.log(form);
    const transportation = form.transportation;
    const queryParams = {
        origin: `place_id:${originId}`,
        destination: `place_id:${destinationId}`,
        mode: transportation
    };
    const url = generateMapsUrl('directions', queryParams);
    console.log(url);
    // const directionsResp = await fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // });
    await new Promise(resolve => setTimeout(resolve, 3000));
    return generateMockTransit(
        form.origin.description.split(',')[0],
        form.destination.description.split(',')[0]
    );
};

const enrichMock = form => {
    mockDirections.routes.forEach(route => {
        route.legs.forEach(leg => {
            leg.start_address = form.origin.description;
            leg.end_address = form.destination.description;
            leg.steps.forEach(step => {
                enrichStep(step);
            });
        });
    });
    return mockDirections;
};

const enrichStep = step => {
    generatePopularity(step);
    if ('steps' in step) {
        step.steps.forEach(enrichStep);
    }
};

const generatePopularity = obj => {
    if (obj !== null && obj !== undefined) {
        const multiplier = 0.5 + Math.random() * 0.5;
        obj.popularity = [[], [], [], [], [], [], []];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 24; j++) {
                let business =
                    Math.random() * 25 +
                    Math.random() * 25 +
                    Math.random() * 25 +
                    Math.random() * 25;
                if (Math.abs(j - 5) < 6) {
                    business *= Math.pow(1 / (6 - Math.abs(j - 5)), 0.333);
                }

                obj.popularity[i].push(business * multiplier);
            }
        }
    }
};

const generateMockTransit = (start, end) => {
    const numRoutes = Math.floor(Math.random() * 3) + 1;
    const directions = {
        routes: [...Array(numRoutes)].map(() => generateRoutes(start, end))
    };
    return directions;
};

const generateRoutes = (start, end) => {
    const numSteps =
        Math.floor(Math.random() * 2) + 2 + Math.floor(Math.random() * 3) + 1;

    const route = {
        legs: [
            {
                start_address: start,
                end_address: end,
                steps: [...Array(numSteps)].map((x, index) => {
                    return generateSteps(
                        start,
                        end,
                        index === 0,
                        index === numSteps - 1
                    );
                })
            }
        ]
    };
    return route;
};

const generateSteps = (start, end, first, last) => {
    const start_address = first ? start : faker.address.streetName();
    const end_address = last ? end : faker.address.streetName();
    const travel_mode =
        first || last ? 'WALKING' : Math.random() > 0.7 ? 'WALKING' : 'TRANSIT';
    const step = {
        start_location: { label: start_address },
        end_location: { label: end_address },
        travel_mode
    };
    generatePopularity(step.start_location);
    generatePopularity(step.end_location);
    return step;
};
