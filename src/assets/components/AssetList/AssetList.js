import React from "react";

import Crypto from "../Assets/Crypto";
import Stock from "../Assets/Stock";

const AssetList = (props) => {
  return (
    <div>
      <ul>
        {props?.cryptoList?.map((crypto) => {
          return (
            <li key={crypto.name}>
              <Crypto crypto={crypto} />
            </li>
          );
        })}
      </ul>

      <ul>
        {props?.stockList?.map((stock) => {
          return (
            <li key={stock.name}>
              <Stock stock={stock} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AssetList;
