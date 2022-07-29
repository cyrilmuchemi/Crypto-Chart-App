import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { getCoins } from '../redux/actions/coinAction';
import CoinComponent from './CoinComponent';
import img1 from '../images/wallCrypt.jpg';

const CoinListing = () => {
  const coins = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchCoins = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false').catch((err) => {
      console.log('Error', err);
    });
    dispatch(getCoins(response.data));
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  console.log('coins:', coins);
  return (
    <div className="section">
      <Container fluid>
        <div className="header-image">
          <img
            className="header-image-image"
            src={img1}
            alt="crypto wallpaper"
            width="100%"
            height="120px"
          />
        </div>
        <div className="display-grid">
          <CoinComponent />
        </div>
      </Container>
    </div>

  );
};

export default CoinListing;