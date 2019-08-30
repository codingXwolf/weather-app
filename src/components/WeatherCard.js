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
                <Card>
                    {WiDayHaze}
                </Card>
            </div>
        )
    };
};

export default WeatherCard;