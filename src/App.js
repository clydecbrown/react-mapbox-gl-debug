import React, { Component } from 'react';
import ReactMap from 'react-mapbox-gl';
import {Feature, Layer} from 'react-mapbox-gl';

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w";
const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMap({
  accessToken
});

const mapStyle = {
  height: '100vh',
  width: '100vw'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        locations: [[0.0, 0.0]]
    }
  }

    render() {
        return (
            <div>
              <Map
                  style={style}
                  containerStyle={mapStyle}
                  center={[0.0, 0.0]}
              >
                  {this.state.locations.length > 0 &&
                  this.state.locations.map((l, id) =>
                      <Layer type="symbol" id={id} layout={{'icon-image': 'marker-15'}} key={id}>
                        <Feature coordinates={[l[0], l[1]]}/>
                      </Layer>
                  )}
              </Map>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({locations: []})
        }, 5000)
    }
}

export default App;
