import React from 'react';
import { WiDayHaze } from 'react-icons/wi';
import { Card } from 'semantic-ui-react';

class WeatherCard extends React.Component {
    constructor(props) {
        super(props)

    };

    render() {

        return (
            <div>
                <WiDayHaze />
            </div>
        )
    };
};

export default WeatherCard;