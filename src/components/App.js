import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import CityList from './CityList';
import MapCities from './MapCities';
import '../stylesheets/App.scss'
import fetchCities from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollution: [],
      loading: true
    }
    this.renderMapCities = this.renderMapCities.bind(this);
    this.onHover = this.onHover.bind(this);
  }
  componentDidMount() {
    fetchCities().then(loadData => {
      if (loadData === undefined) {
        return this.setState({ loading: true });
      }
      else {
        console.log(loadData);

        return this.setState({ pollution: loadData, loading: false });
      }
    });
  }

  //OnHover 
  onHover(ev) {
    console.log(ev + "Has accedido!!")
    // const {
    //   features,
    //   srcEvent: { offsetX, offsetY }
    // } = ev;
    // const hoveredFeature = features && features.find(f => f.layer.id === 'data');

    // this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  }



  //Render of MapCities
  renderMapCities() {
    return (
      <div>
        <MapCities pollution={this.state.pollution} />
      </div >
    )


  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filters />
        <Switch>
          <Route exact path='/'>
            <CityList />
          </Route>
          <Route path='/cities' render={this.renderMapCities} />
        </Switch>
      </div>
    );
  }
}

export default App;