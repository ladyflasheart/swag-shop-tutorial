import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
      this.loadData = this.loadData.bind(this);

      this.loadData();
  }

  loadData = () => {
      http.getProducts().then(data => {
        console.log(data);
      }, err => {

      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Swag Shop</h1>
        </header>
        <div className="App-main">
            <Product />
        </div>
      </div>
    );
  }
}

export default App;
