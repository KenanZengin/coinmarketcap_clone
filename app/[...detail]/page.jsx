"use client"

import Image from "next/image"
import { useContext } from "react"
import { CoinMarketCapContext } from "@/context/context"
import useSWR from 'swr'
import Star from "/public/img/star.png"
import Share from "/public/img/share.png"
import Chart from "/public/img/chart.png"
import Up from "/public/img/up.png"
import Down from "/public/img/down.png"
import Info from "/public/img/info.png"
import Verify from "/public/img/verify.png"



const CoinDetail =  ({searchParams}) => {

  const {getCoins,coinDetail} = useContext(CoinMarketCapContext)
  
  const {data,error } = useSWR(`/api/coins?&start=${searchParams.rank}&limit=1`,getCoins)

  const detail = [coinDetail]
  
  console.log(data);
  
  return (
    <div className="coin-detail">
       {(coinDetail ? detail : data)?.map((coin)=>(
          <div className="coin-stats">
            <div className="info">
              <div className="detail">
                <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} alt="coin-img" width={24} height={24} />
                <h1>
                  <span className="name">{coin.name}</span>
                  <span className="symbol">{coin.symbol}</span>
                </h1>
              </div>
              <div className="add-card">
                <button>
                  <Image src={Star} alt="Star"/>
                </button>
                <button>
                  <Image src={Share} alt="Share"/>
                </button>
              </div>
            </div>
            <div className="price">
              <h2>${ Number(coin.quote.USD.price) >= 1000 
                      ? Number(coin.quote.USD.price.toFixed(2)).toLocaleString('en-US')
                      : coin.quote.USD.price > 1
                          ? Number(coin.quote.USD.price).toFixed(2)
                          : coin.quote.USD.price > 0.1
                          ? Number(coin.quote.USD.price).toFixed(4)
                          : coin.quote.USD.price > 0.01
                              ? Number(coin.quote.USD.price).toFixed(5)
                              : coin.quote.USD.price > 0.001 
                              ? Number(coin.quote.USD.price).toFixed(6)
                              : coin.quote.USD.price > 0.0000001 
                                  ? Number(coin.quote.USD.price).toFixed(9)
                                  : Number(coin.quote.USD.price).toFixed(13)
                }
              </h2>
              <div className="price-change">                
                {Number(coin.quote.USD.percent_change_24h) >= 0 
                      ?  <span className="up">   <span><Image src={Up} alt="Up"/></span> {Number(coin.quote.USD.percent_change_24h).toFixed(2)}% (1d)</span>
                      :  <span className="down"> <span><Image src={Down} alt="Down"/></span> {Number(coin.quote.USD.percent_change_24h*-1).toFixed(2)}% (1d)</span>
                }      
              </div>
            </div>
            <div className="stats-wrapper">
              <div className="add-list">
                <button>
                  <span className="watchlist">
                    <Image src={Star} alt="Star"/> <span>Add to watchlist</span>
                  </span>
                  <span>
                    +
                  </span>
                </button>
                <button>
                  <span className="watchlist">
                    <Image src={Chart} alt="Chart"/> <span>Track in portfolio</span>
                  </span>
                  <span>
                    +
                  </span>
                </button>
              </div>
              <div className="detail-stats">
                <div className="stat">
                  <div className="stat-value">
                    <span>
                      Market cap &nbsp;
                     <Image src={Info} alt="info" /> 
                    </span>
                    <p>   
                    {Number(coin.quote.USD.volume_change_24h) >= 0 
                      ?  <span className="up">   <Image src={Up} alt="Up"/> {Number(coin.quote.USD.volume_change_24h / 1.6).toFixed('2')}</span>
                      :  <span className="down"> <Image src={Down} alt="Down"/> {Number((coin.quote.USD.volume_change_24h*-1)/1.6).toFixed('2')}</span>
                    }${Number(coin.quote.USD.market_cap).toLocaleString('en-US',{maximumFractionDigits:0})}  
                    </p>
                  </div>
                  <div className="stat-percentage">
                    <div className="percentage-bar">
                      <div className="bar"></div>
                    </div>
                    <div className="rank">
                      #{coin.cmc_rank}
                    </div>
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-value">
                    <span>
                      Volume (24h)&nbsp;
                     <Image src={Info} alt="info" /> 
                    </span>
                    <p>   
                    {Number(coin.quote.USD.volume_change_24h) >= 0 
                      ?  <span className="up">   <Image src={Up} alt="Up"/> {Number(coin.quote.USD.volume_change_24h).toFixed('2')}</span>
                      :  <span className="down"> <Image src={Down} alt="Down"/> {Number(coin.quote.USD.volume_change_24h*-1).toFixed('2')}</span>
                    }${Number(coin.quote.USD.volume_24h).toLocaleString('en-US',{maximumFractionDigits:0})}  
                    </p>
                  </div>
                  <div className="stat-percentage">
                    <div className="percentage-bar">
                      <div className="bar"></div>
                    </div>
                    <div className="rank">
                      #2
                    </div>
                  </div>
                </div>          
                <div className="stat">
                  <div className="stat-value">
                    <span>
                      Circulating supply &nbsp;
                      <Image src={Verify} alt="verify" /> 
                      <Image src={Info} alt="info" /> 
                    </span>
                    <p>   
                      {coin.circulating_supply ? `${coin.circulating_supply.toLocaleString('en-US',{maximumFractionDigits:0})} ${coin.symbol}`   : "--"}
                    </p>
                  </div>
                  {coin.max_supply == null 
                    ? "" 
                    :<div className="stat-percentage">
                      <div className="percentage-bar">
                        <div className="bar" style={{width:`${(coin.circulating_supply / coin.max_supply)*100}%`}}></div>
                      </div>
                      <div className="circulation">
                        {((coin.circulating_supply / coin.max_supply)*100).toFixed('2')}%
                      </div>
                    </div>
                  }
                 
                </div>
                <div className="stat">
                  <div className="stat-value">
                    <span>
                      Total supply&nbsp;
                     <Image src={Info} alt="info" /> 
                    </span>
                    <p>   
                      {coin.total_supply.toLocaleString('en-US',{maximumFractionDigits:0})} {coin.symbol} 
                    </p>
                  </div>
                 
                </div>
                <div className="stat">
                  <div className="stat-value">
                    <span>
                      Max. supply&nbsp;
                     <Image src={Info} alt="info" /> 
                    </span>
                    <p>  
                      {coin.max_supply == null ? "∞" :`${coin.max_supply.toLocaleString('en-US',{maximumFractionDigits:0})} ${coin.symbol} `} 
                    </p>
                  </div>
                 
                </div>
                <div className="stat">
                  <div className="stat-value">
                    <span>
                      Fully diluted market cap &nbsp;
                     <Image src={Info} alt="info" /> 
                    </span>
                    <p>   
                      {coin.quote.USD.fully_diluted_market_cap.toLocaleString('en-US',{maximumFractionDigits:0})}
                    </p>
                  </div>
                 
                </div>
                <div className="stat">
                  <div className="stat-value">
                    <span>
                      Market Cap Dominance&nbsp;
                     <Image src={Info} alt="info" /> 
                    </span>
                    <p>   
                      {coin.quote.USD.market_cap_dominance.toFixed('2')}%
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
       ))}
      
      <div className="coin-chart">

      </div>
      
      <div className="coin-community">

      </div>
    </div>
  )
}

export default CoinDetail