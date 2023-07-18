"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"
import { CoinMarketCapContext } from "@/context/context"
import useSWR from 'swr'
import Nav from 'react-bootstrap/Nav';
import {MdShowChart} from "react-icons/md"
import {BiNetworkChart,BiSolidDownload} from "react-icons/bi"
import {AiOutlineLineChart} from "react-icons/ai"
import {BsFillCalendarFill,BsDatabaseFillCheck} from "react-icons/bs"
import {FaExternalLinkAlt} from "react-icons/fa"
import Star from "/public/img/star.png"
import Star2 from "/public/img/star2.png"
import Star3 from "/public/img/starempty.png"
import Share from "/public/img/share.png"
import Chart from "/public/img/chart.png"
import Up from "/public/img/up.png"
import Down from "/public/img/down.png"
import Down2 from "/public/img/down2.png"
import Info from "/public/img/info.png"
import Verify from "/public/img/verify.png"
import Website from "/public/img/website.png"
import Folder from "/public/img/folder.png"
import Github from "/public/img/github.png"
import Reddit from "/public/img/reddit.png"
import Logo from "/public/img/logo2.png"
import Wallet from "/public/img/wallet.png"
import Search from "/public/img/search.png"
import Graph from "@/components/graph"
import Pagination from "@/components/pagination"





const CoinDetail =  ({searchParams}) => {

  const {getCoins,coinDetail} = useContext(CoinMarketCapContext)
  const [converter,setConverter] = useState(0)
  const [Coinconverter,SetCoinConverter] = useState()
  const {data,error } = useSWR(`/api/coindetail?start=${searchParams.rank}`,getCoins)
 
  const getValue = (event) => {
    setConverter(event.target.value)
    SetCoinConverter(null)
  }

  const detail = [coinDetail]
  
  console.log(data,coinDetail)
  return (
    <div className="coin-detail">
       
      <div className="coin-stats">
        {(coinDetail ? detail : data)?.map((coin)=>(
            <>
              <div className="stats-top">
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
                <h2>   
                  $<abbr title=  
                        { Number(coin?.quote.USD.price) >= 1000 
                          ? Number(coin.quote.USD.price.toFixed('2')).toLocaleString('en-US')
                          : coin.quote.USD.price > 1
                              ? Number(coin.quote.USD.price).toFixed('2')
                              : coin.quote.USD.price > 0.1
                              ? Number(coin.quote.USD.price).toFixed('4')
                              : coin.quote.USD.price > 0.01
                                  ? Number(coin.quote.USD.price).toFixed('5')
                                  : coin.quote.USD.price > 0.001 
                                  ? Number(coin.quote.USD.price).toFixed('6')
                                  : coin.quote.USD.price < 0.000001 
                                      ? Number(coin.quote.USD.price).toFixed('12')
                                      : Number(coin.quote.USD.price).toFixed('7')
                      }>
                        { Number(coin.quote.USD.price) >= 1000 
                            ? Number(coin.quote.USD.price.toFixed('2')).toLocaleString('en-US')
                            : coin.quote.USD.price > 1
                                ? Number(coin.quote.USD.price).toFixed('2')
                                : coin.quote.USD.price > 0.1
                                ? Number(coin.quote.USD.price).toFixed('4')
                                : coin.quote.USD.price > 0.01
                                    ? Number(coin.quote.USD.price).toFixed('5')
                                    : coin.quote.USD.price > 0.001 
                                    ? Number(coin.quote.USD.price).toFixed('6')
                                    : coin.quote.USD.price < 0.000001 
                                        ? `0.0...${Number(coin.quote.USD.price * 1000000).toFixed('0')}`
                                        : Number(coin.quote.USD.price).toFixed('7')
                        }
                    </abbr>
                </h2>
                <div className="price-change">                
                  {Number(coin.quote.USD.percent_change_24h) >= 0 
                        ?  <span className="up">   <span><Image src={Up} alt="Up"/></span> {Number(coin.quote.USD.percent_change_24h).toFixed(2)}% (1d)</span>
                        :  <span className="down"> <span><Image src={Down} alt="Down"/></span> {Number(coin.quote.USD.percent_change_24h*-1).toFixed(2)}% (1d)</span>
                  }      
                </div>
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
                  <div className="stat sponsored">
                    <div className="stat-value">
                      <span>
                        <Image src={Logo} alt="logo" />
                        Sponsored                      
                      </span>
                      
                    </div>
                    <div className="stat-sponsored">
                      <Link href={"https://bitcoin.org/tr/"}>
                        Buy
                        <Image src={Down2} alt="down" />
                      </Link>
                      <Link href={"https://bitcoin.org/tr/"}>
                        Gaming
                        <Image src={Down2} alt="down" />
                      </Link>
                      <Link href={"https://bitcoin.org/tr/"}>
                        Earn Crypto
                        <Image src={Down2} alt="down" />
                      </Link>
                    </div>
                  
                  </div>
                  <div className="social">
                    <div className="social-name">                 
                      <p>   
                        Official links 
                      </p>
                    </div>
                    <div className="social-link">                                        
                      <Link href={"https://bitcoin.org/en/"}>
                        <Image src={Website} alt="website"/>
                        Website
                      </Link>                    
                      <Link href={"https://bitcoin.org/bitcoin.pdf"}>
                        <Image src={Folder} alt="website"/>
                        Whitepaper
                      </Link>                    
                      <Link href={"https://github.com/bitcoin/bitcoin"}>
                        <Image src={Github} alt="website"/>
                        Github
                      </Link>
                  </div>
                  </div>
                  <div className="social">
                    <div className="social-name">                 
                      <p>   
                        Social links 
                      </p>
                    </div>
                    <div className="social-link">                                        
                      <Link href={"https://bitcoin.org/en/"}>
                        <Image src={Reddit} alt="website"/>
                        Reddit
                      </Link>                    
                  </div>
                  </div>
                  <div className="social">
                    <div className="social-name">                 
                      <p>   
                      Rating
                      </p>
                      
                      <span>
                      Based on 2 institutional ratings
                      </span>
                    </div>
                    <div className="rating">
                    <p>4.1</p> 
                    <span className="star">
                      <Image src={Star2} alt="info" />
                      <Image src={Star2} alt="info" />
                      <Image src={Star2} alt="info" />
                      <Image src={Star2} alt="info" />
                      <Image src={Star3} alt="info" />
                    </span>
                    <Image src={Info} alt="info" />
                    </div>
                  </div>
                  <div className="social">
                    <div className="social-name">                  
                      <p>   
                        Network information 
                      </p>
                    </div>
                    <div className="social-link">                                        
                      <button >         
                        <Image src={Search} alt="down" />                                   
                        Chain explorers
                        <Image src={Down2} alt="down" />
                      </button>                    
                      <button >      
                      <Image src={Wallet} alt="down" />                     
                      Supported wallets
                        <Image src={Down2} alt="down" />  
                      </button>                                          
                  </div>
                  </div>
                  <div className="social converter">
                    <div className="social-name">                  
                      <p>   
                      {coin.symbol.toUpperCase()} to USD Converter
                      </p>
                    </div>
                    <div className="converter-value">
                      <label htmlFor={coin.name}>
                        {coin.symbol}
                      <input   placeholder="0" value={Coinconverter ? (Coinconverter / coin.quote.USD.price).toFixed('2')   : converter}  onChange={getValue} />
                      </label>
                      <label htmlFor={coin.id}>
                        USD
                        <input placeholder="0" value={Coinconverter ? Coinconverter : converter == 0 ? 0 : (converter * coin.quote.USD.price).toFixed('2')} onChange={(e)=>SetCoinConverter(e.target.value)}   />
                      </label>
                      
                    </div>
                  </div>
                  <div className="stat">
                    <div className="watchlist">Popularity</div>
                    <div className="stat-value">
                      <span>
                      In watchlists&nbsp;
                      <Image src={Info} alt="info" /> 
                      </span>
                      <p>   
                      1,433,693x
                      </p>
                    </div>
                    <div className="stat-percentage ">
                      <div className="percentage-bar">
                        <div className="bar"></div>
                      </div>
                      <div className="rank">
                      86th / 10.2K
                      </div>
                    </div>
                  </div>   
                </div>
              </div>
            </>       
        ))}
      </div>
      <div className="coin-info-detail">
        <div className="info-top">
        <Nav variant="underline" defaultActiveKey="#chart">
        <Nav.Item>
          <Nav.Link href="#chart">Chart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href="#markets">Markets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
        </div>
        <div className="coin-chart">
          <div className="chart-top">
            <div className="buttons--group">
              <button className="check">
                Price
              </button>
              <button>
                Market Cap
              </button>
            </div>
            <div className="buttons--group">
              <button className="check">
                <MdShowChart size={16} />
              </button>
              <button>
                <BiNetworkChart size={16} />
              </button>
            </div>
            <div className="buttons--group trading">
              <button>
                <AiOutlineLineChart size={16} />
                TradingView
              </button>
             
            </div>          
            <div className="buttons--group">
              <button>
                Compare with
                <Image src={Down2} alt="down" />
              </button>
           </div>
            <div className="buttons--group">
              <button className="check">
               1D
              </button>
              <button>
               7D
              </button>
              <button>
               1M
              </button>
              <button>
               1Y
              </button>
              <button>
               ALL
              </button>
              <button>
               <BsFillCalendarFill size={12} />
              </button>
              <button>
               LOG
              </button>
              <button>
                <BiSolidDownload size={12} />
              </button>
            </div>
          </div>
          <Graph id="chart" />
        </div>
        <div id="markets" className="markets">        
          <div className="markets-table">
            <div className='coin-table'> 
              <div className="coin-table-wrapper">
                  <div className="table-title">                 
                      <h3>Markets</h3>  
                      <div className="buttons">
                        <div className="buttons--group">
                          <button className="check">
                            All
                          </button>
                          <button >
                            CEX
                          </button>
                          <button >
                            DEX
                          </button>
                        </div>    
                        <div className="buttons--group">
                          <button className="check">
                            Spot
                          </button>
                          <button >
                            Perpetual
                          </button>
                          <button >
                            Futures
                          </button>
                        </div>  
                        <div className="buttons--group">
                          <button>
                            All pairs
                            <Image src={Down2} alt="down" />
                          </button>
                        </div>
                      </div>                
                  </div>
                  <div className="table-head">                    
                      <div className="rank">
                        #
                      </div>
                      <div className="name">
                        Exchange
                      </div>
                      <div className="price">
                        Pair
                      </div>  
                      <div className="h1-change">
                        Price
                      </div>
                      <div className="h1-change">
                        Volume %
                      </div>
                      <div className="supply">
                        Confidence
                      </div>
                  </div>
                  <div className="table-body">                          
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        1
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png`} alt="btcLogo" width={24} height={24} />
                              <p>Binance</p>
                              <p><BsDatabaseFillCheck size={15} /></p>
                          </button>
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/USDT <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,000.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>9,15%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div> 
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        2
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/89.png`} alt="btcLogo" width={24} height={24} />
                              <p>Coinbase Exchange</p>
                              <BsDatabaseFillCheck size={15} />
                          </button>
                          
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/ETH <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,100.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>4,75%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div>             
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        3
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png`} alt="btcLogo" width={24} height={24} />
                              <p>Kucoin</p>
                              <BsDatabaseFillCheck size={15} />
                          </button>
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/USDC <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,025.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>7,05%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div>   
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        4
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/37.png`} alt="btcLogo" width={24} height={24} />
                              <p>Bitfinex</p>
                              <BsDatabaseFillCheck size={15} />
                          </button>
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/USDD <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,185.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>2,45%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div>   
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        5
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/70.png`} alt="btcLogo" width={24} height={24} />
                              <p>Bitstamp</p>
                              <BsDatabaseFillCheck size={15} />
                          </button>
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/USD <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,001.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>1,52%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div>                       
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        6
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png`} alt="btcLogo" width={24} height={24} />
                              <p>Kraken</p>
                              <BsDatabaseFillCheck size={15} />
                          </button>
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/BNB <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,158.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>4,12%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div>  
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        7
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/89.png`} alt="btcLogo" width={24} height={24} />
                              <p>Coinbase Exchange</p>
                              <BsDatabaseFillCheck size={15} />
                          </button>
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/XRP <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,141.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>6,38%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div>   
                    <div className="table-body-item" >                       
                      <div className="t-body-rank rank" >
                        8
                      </div>
                      <div className="t-body-name name">
                          <button>
                              <img src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png`} alt="btcLogo" width={24} height={24} />
                              <p>Kucoin</p>
                              <BsDatabaseFillCheck size={15} />
                          </button>
                      </div>
                      <div className="t-body-price price">
                          <Link href={"/"}>
                            BTC/DAI <FaExternalLinkAlt size={10} />
                          </Link>
                      </div>  
                      <div className="t-body-change h1-change">
                        $2,122.26                   
                      </div>   
                      <div className="t-body-change h1-change">                            
                        <p>5,23%</p>                                                         
                      </div>
                      <div className="t-body-sp supply">
                          <button>
                            High
                          </button>
                      </div>                                           
                    </div> 
                  </div>
                    
              </div>
            </div>
          </div>
          <Pagination />
        </div>
        <div id="News"></div>
      </div>
      <div className="coin-community">
        <div className="chat-title">
          <p>Live Chat</p>
          <span>see more</span>
        </div>
        <div className="user-info">
         <div className="left">
          <div className="user-img">
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" width={36} height={36} alt="eth" />
            </div>
            <div className="user-name">
              <p className="name">Kenan</p>
              <span className="tag">@kenan_1</span>
            </div>
         </div>
         <div className="right">
            <button><Image src={Up} alt="up"/> Bullish</button>
            <button><Image src={Down} alt="Down"/> Bearish</button>
         </div>
        </div>
        <div className="user-comment">
          <form>
            <input type="text" placeholder="What's happening on BTC?" />
            <button>Post</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default CoinDetail