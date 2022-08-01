import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import "./App.css";
import AssetDashboard from "./assets/components/AssetDashboard/AssetDashboard";
import AssetList from "./assets/components/AssetList/AssetList";

const App = () => {
  const [cryptoList, setCryptoList] = useState([
    { name: "Bitcoin", symbol: "BTC", price: 22001, amount: 0.025 },
    { name: "Ethereum", symbol: "ETH", price: 2000, amount: 0.25564334 },
    { name: "XRP", symbol: "XRP", price: 0.5, amount: 300 },
  ]);

  const [stockList, setStockList] = useState([
    { name: "Apple", symbol: "AAPL", price: 300, amount: 10 },
    { name: "Microsoft", symbol: "MSFT", price: 100, amount: 20 },
    { name: "Matter", symbol: "MTTR", price: 4.3, amount: 59 },
  ]);

  // const cryptoList = [
  //   { name: "Bitcoin", symbol: "BTC", price: 22001, amount: 0.025 },
  //   { name: "Ethereum", symbol: "ETH", price: 2000, amount: 0.25564334 },
  //   { name: "XRP", symbol: "XRP", price: 0.5, amount: 300 },
  // ];

  // const stockList = [
  //   { name: "Apple", symbol: "AAPL", price: 300, amount: 10 },
  //   { name: "Microsoft", symbol: "MSFT", price: 100, amount: 20 },
  //   { name: "Matter", symbol: "MTTR", price: 4.3, amount: 59 },
  // ];

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <AssetDashboard cryptoList={cryptoList} stockList={stockList} />
          </Route>

          <Route path="/cryptos" exact>
            <AssetList cryptoList={cryptoList} />
          </Route>

          <Route path="/stocks">
            <AssetList stockList={stockList} />
          </Route>

          <Route path="/assets">
            <AssetList stockList={stockList} cryptoList={cryptoList} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
