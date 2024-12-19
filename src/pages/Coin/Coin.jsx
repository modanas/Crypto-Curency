import { useContext, useEffect, useState } from "react";
import"./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Coin = () => {
const {coinId} = useParams();
const [coinData, setCoinData] = useState();
const {currency} = useContext(CoinContext)

const fetchCoinData = async(coinId) => {
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-YswVsHfWhZrxMNzy8D5DoXEc'}
  };
  
  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then(res => res.json())
    .then(res => setCoinData(res))
    .catch(err => console.error(err));
}
 useEffect(() => {
  fetchCoinData(coinId); //fetch data when the components get loadeded and when the currency changes
 },[currency])

  return (
    <div>
      <h1>Coin : {coinId}</h1>
    </div>
  )
}

export default Coin
