"use client"
import useSWR from 'swr'
import { useContext } from "react"
import { CoinMarketCapContext } from "@/context/context"
import {useSession} from "next-auth/react"
import { v4 as uuidv4 } from 'uuid';
import Skeleton from "./skeleton";
import {BsInfoCircleFill} from "react-icons/bs"
import {AiOutlineStar} from "react-icons/ai"
import {BiSolidUpArrow,BiSolidDownArrow} from "react-icons/bi"
import {TbPointFilled} from "react-icons/tb"
import Link from 'next/link'



const CoinTable =  () => {

    const {data : session} = useSession()
    const {getCoins,limit,start,setCoinDetail} = useContext(CoinMarketCapContext)
    const {data,error } = useSWR(`/api/coins?limit=${limit}&start=${start}`)
    
    if(error) return <h1>{error}</h1>

    const sendInfo = (coinInfo) => {
        setCoinDetail(coinInfo)  
    }
    console.log(data);
  return (
    <div className='coin-table'> 
        <div className="coin-table-wrapper">
            <div className="table-head" id="top">
                <div className="star"></div>
                <div className="rank">
                    #
                </div>
                <div className="name">
                    Name
                </div>
                <div className="price">
                    Price
                </div>  
                <div className="h1-change">
                    1h %
                </div>
                <div className="h24-change">
                    24h %
                </div>
                <div className="d7-change">
                    7d %
                </div>
                <div className="market-cap">
                    Market Cap
                    <div className="table-head-tooltips">
                        <BsInfoCircleFill size={12} />
                        <div className="tooltips">
                            <div className="tooltip-info">
                                <div className="tooltip-body">
                                    <p>The total market value of a cryptocurrency's <br /> circulating supply. It is analogous to the free-float <br />capitalization in the stock market.</p>
                                    <p>Market Cap = Current Price x Circulating Supply.</p>
                                    <span>ReadMore</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="volume">
                    Volume(24h)
                    <div className="table-head-tooltips">
                        <BsInfoCircleFill size={12} />
                        <div className="tooltips">
                            <div className="tooltip-info">
                                <div className="tooltip-body">
                                  <p>
                                  A measure of how much of a cryptocurrency was <br />traded in the last 24 hours.
                                  </p>
                                  <span>Read More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="supply">
                    Circulating Supply
                    <div className="table-head-tooltips">
                        <BsInfoCircleFill size={12} />
                        <div className="tooltips">
                            <div className="tooltip-info">
                                <div className="tooltip-body">
                                    <p>
                                        The amount of coins that are circulating in the <br />market and are in public hands. It is analogous to <br /> the flowing shares in the stock market.
                                    </p>
                                    <span>ReadMore</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basic-graph">
                    Last 7 days
                </div>
                <div className="go-detail"></div>
            </div>
            <div className="table-body">         
                
                    {data 
                    ? data.map((coin)=>(
                        <div className="table-body-item" key={coin.id}>
                            <div className="star">
                                <button>
                                    <AiOutlineStar size={16} />
                                </button>
                            </div>
                            <div className="t-body-rank rank" >
                                {coin.cmc_rank}
                            </div>
                            <div className="t-body-name name">
                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>
                                    <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} alt="btcLogo" width={24} height={24} />
                                    <p>{coin.name}</p>
                                    <p>{coin.symbol}</p>
                                </Link>
                            </div>
                            <div className="t-body-price price">
                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>
                                $<abbr title=  { Number(coin.quote.USD.price) >= 1000 
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
                                </Link>
                            </div>  
                            <div className="t-body-change h1-change">
                                {Number(coin.quote.USD.percent_change_1h) >= 0 
                                    ?  <span className="h-change-up">   <BiSolidUpArrow size={8} /> {Number(coin.quote.USD.percent_change_1h).toFixed(2)}%</span>
                                    :  <span className="h-change-down"> <BiSolidDownArrow size={8} /> {Number(coin.quote.USD.percent_change_1h*-1).toFixed(2)}%</span>
                                }                        
                            </div>
                            <div className="t-body-change h24-change">    
                                {Number(coin.quote.USD.percent_change_24h) >= 0 
                                    ?  <span className="h-change-up">   <BiSolidUpArrow size={8} /> {Number(coin.quote.USD.percent_change_24h).toFixed(2)}%</span>
                                    :  <span className="h-change-down"> <BiSolidDownArrow size={8} /> {Number(coin.quote.USD.percent_change_24h*-1).toFixed(2)}%</span>
                                }   
                            </div>
                            <div className="t-body-change d7-change">                                               
                                {Number(coin.quote.USD.percent_change_7d) >= 0 
                                    ?  <span className="h-change-up">   <BiSolidUpArrow size={8} /> {Number(coin.quote.USD.percent_change_7d).toFixed(2)}%</span>
                                    :  <span className="h-change-down"> <BiSolidDownArrow size={8} /> {Number(coin.quote.USD.percent_change_7d*-1).toFixed(2)}%</span>
                                }   
                            </div>
                            <div className="t-body-mrkcap market-cap">
                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>
                                    ${Number(coin.quote.USD.market_cap).toLocaleString('en-US',{maximumFractionDigits:0})} 
                                </Link>
                            </div>
                            <div className="t-body-v volume">
                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>
                                    <p>${Number(coin.quote.USD.volume_24h).toLocaleString('en-US',{maximumFractionDigits:0})} </p> 
                                </Link>
                                <span>{Number(coin.quote.USD.volume_24h/coin.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:0})} {coin.symbol}</span>                            
                            </div>
                            <div className="t-body-sp supply">
                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>                           
                                    <abbr title={Number(coin.total_supply).toLocaleString('en-US',{maximumFractionDigits:0})}>{Number(coin.total_supply).toLocaleString('en-US',{maximumFractionDigits:0})}</abbr>                                
                                </Link>
                                &nbsp;{coin.symbol}
                            </div>
                            <div className="basic-graph">
                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>
                                    <img src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coin.id}.svg`} className={Number(coin.quote.USD.percent_change_7d) >= 0 ? "up" : "low"} alt="graph" width={164} height={48} />
                                </Link>
                            </div>
                            <div className="go-detail">
                                <div className="detail-tooltip">                            
                                    <button >                            
                                        <div className="svgs">
                                            <TbPointFilled size={6.5} />
                                            <TbPointFilled size={6.5} />
                                            <TbPointFilled size={6.5} />
                                        </div>
                                        <div className="tooltips">
                                            <div className="tooltips-info">
                                                <div className="tooltips-body">
                                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>View Charts</Link>
                                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>View Marktes</Link>
                                                <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>View Historical Data</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>                      
                            </div>
                        </div>
                    ))
                    :  Array(limit).fill().map(()=>(
                        <Skeleton key={uuidv4()} />
                    ))
                    }          
                
            </div>           
        </div>
    </div>
  )
}

export default CoinTable


