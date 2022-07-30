import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container } from 'semantic-ui-react';
import { getCoins } from '../redux/actions/coinAction';

const CoinDetails = () => {
  const coins = useSelector((state) => state.allCoins.coins);
  const dispatch = useDispatch();
  const { id } = useParams();

  const fetchCoins = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false').catch((err) => {
      console.log('Error', err);
    });
    dispatch(getCoins(response.data));
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <div className="details">
      <Container fluid>
        <div className="larger">
          <div className="back-button">
            <Link to="/">
              <Button className="button" primary>Back</Button>
            </Link>
          </div>
          <div className="detail-container">
            <div className="detail-image">
              <img src={coins[id].image} alt={coins[id].name} width="105px" />
            </div>
            <div className="detail-content">
              <div className="detail-name">{coins[id].name}</div>
              <div className="detail-rank">
                <p>
                  {' '}
                  Ranked:
                  {coins[id].market_cap_rank}
                </p>
              </div>
              <div className="detail-price">
                <p>
                  {' '}
                  Current Price: $
                  {coins[id].current_price}
                </p>
              </div>
              <div className={coins[id].price_change_percentage_24h < 0 ? 'neg' : 'pos'}>
                %
                {coins[id].price_change_percentage_24h}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoinDetails;
