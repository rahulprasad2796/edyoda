import React, { Component } from 'react';
import Topbar from './components/topbar.js';
import Latestpost from './components/latestpost.js';
import Card from './components/card.js';
import axios from 'axios';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cards: [],
      loader: true
    }
  }

  componentDidMount () {
    axios.get("https://api.edyoda.com/v1/blog/")
    .then(res => {
      this.setState({cards: res.data, loader: false})
    })
  }

  render() { 
    return ( <div>
      <Topbar />
      <Latestpost />
      <div id="cards">{!this.state.loader ? this.state.cards.map((v, i) => <Card {...v} key={i} />) : <h2>Loading..</h2>}</div>
    </div> );
  }
}
 
export default App;