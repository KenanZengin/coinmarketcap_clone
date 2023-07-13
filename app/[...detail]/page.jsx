"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"
import { CoinMarketCapContext } from "@/context/context"
import useSWR from 'swr'
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





const CoinDetail =  ({searchParams}) => {

  const {getCoins,coinDetail} = useContext(CoinMarketCapContext)
  const [converter,setConverter] = useState(0)
  const [Coinconverter,SetCoinConverter] = useState()
  const {data,error } = useSWR(`/api/coins?limit=${1}&start=${searchParams.rank}`,getCoins)
  
 
  const deneme = (event) => {
    setConverter(event.target.value)
    SetCoinConverter(null)
  }

  console.log(converter);
  const detail = [coinDetail]
  
  
  return (
    <div className="coin-detail">
       
       
          {(coinDetail ? detail : data)?.map((coin)=>(
             <div className="coin-stats">
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
                        <input   placeholder="0" value={Coinconverter ? (Coinconverter / coin.quote.USD.price).toFixed('2')   : converter}  onChange={deneme} />
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
             </div>
          ))}
         
         
       
       
      
      <div className="coin-chart">
        <Graph />
      </div>
      
      <div className="coin-community">

      </div>
    </div>
  )
}

export default CoinDetail