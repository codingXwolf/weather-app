import React from 'react';
import WeatherCard from './components/WeatherCard';
import { Header, Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Header>
        Weather App
      </Header>

      <WeatherCard />
    </div>
  );
}

export default App;
