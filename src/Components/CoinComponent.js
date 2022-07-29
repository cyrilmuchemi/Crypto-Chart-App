import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CoinComponent = () => {
  const coins = useSelector((state) => state.allCoins.coins);
  const renderCoins = coins.map((coin, index) => {
    const {
      id, name, price_change_percentage_24h: changePercent24Hr, image,
    } = coin;
    return (
      <div key={id}>
        <Link to={`/coin/${index}`}>
          <div className="wrapper">
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </div>
            <div className="card">
              <div className="content">
                <div className="name">{name}</div>
                <div className={changePercent24Hr < 0 ? 'neg' : 'pos'}>
                  %
                  {changePercent24Hr}
                </div>
              </div>
            </div>
            <div className="crypto-image">
              <img className="crypto-image-image" src={image} alt={`${id} icon`} width="65px" />
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderCoins}</>;
};

export default CoinComponent;
