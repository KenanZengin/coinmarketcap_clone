"use client"
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { useContext } from "react"
import { CoinMarketCapContext } from "@/context/context"
import {BsInfoCircleFill} from "react-icons/bs"
import {AiOutlineStar} from "react-icons/ai"
import {BiSolidUpArrow,BiSolidDownArrow} from "react-icons/bi"
import {TbPointFilled} from "react-icons/tb"



const CoinTable =  () => {

    const router = useRouter()
    const {getCoins,limit,start,setCoinDetail} = useContext(CoinMarketCapContext)
    const {data,error } = useSWR(`/api/coins?limit=${limit}&start=${start}`,getCoins)
    
    if(error) return <h1>{error}</h1>

    const sendInfo = (coinInfo) => {
        setCoinDetail(coinInfo)  
        
        router.push(
            `/currencies/${coinInfo.slug}?rank=${Number(coinInfo.cmc_rank)}`
        )
    }
    console.log(data);
  return (
    <div className='coin-table'> 
        <div className="coin-table-wrapper">
            <div className="table-head">
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
                    <div>
                        <BsInfoCircleFill size={12} />
                    </div>
                </div>
                <div className="volume">
                    Volume(24h)
                    <div>
                        <BsInfoCircleFill size={12} />
                    </div>
                </div>
                <div className="supply">
                    Circulating Supply
                    <div>
                        <BsInfoCircleFill size={12} />
                    </div>
                </div>
                <div className="basic-graph">
                    Last 7 days
                </div>
                <div className="go-detail"></div>
            </div>
            <div className="table-body">         
                {data ? data.map((coin)=>(
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
                            <button  onClick={()=>sendInfo(coin)}>
                                <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} alt="btcLogo" width={24} height={24} />
                                <p>{coin.name}</p>
                                <p>{coin.symbol}</p>
                            </button>
                        </div>
                        <div className="t-body-price price">
                            <button onClick={()=>sendInfo(coin)}>
                                ${ Number(coin.quote.USD.price) >= 1000 
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
                            </button>
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
                            <button onClick={()=>sendInfo(coin.name.toLowerCase(),coin.cmc_rank)}>
                            ${Number(coin.quote.USD.market_cap).toLocaleString('en-US',{maximumFractionDigits:0})} 
                            </button>
                        </div>
                        <div className="t-body-v volume">
                            <button onClick={()=>sendInfo(coin.name.toLowerCase(),coin.cmc_rank)}>
                                <p>${Number(coin.quote.USD.volume_24h).toLocaleString('en-US',{maximumFractionDigits:0})} </p> 
                            </button>
                            <span>{Number(coin.quote.USD.volume_24h/coin.quote.USD.price).toLocaleString('en-US',{maximumFractionDigits:0})} {coin.symbol}</span>
                            
                        </div>
                        <div className="t-body-sp supply">
                            <button onClick={()=>sendInfo(coin.name.toLowerCase(),coin.cmc_rank)}>                            
                                {Number(coin.total_supply).toLocaleString('en-US',{maximumFractionDigits:0})} {coin.symbol}
                            </button>
                        </div>
                        <div className="basic-graph">
                            <button onClick={()=>sendInfo(coin.name.toLowerCase(),coin.cmc_rank)}>
                                <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" className={Number(coin.quote.USD.percent_change_7d) >= 0 ? "up" : "low"} alt="graph" width={164} height={48} />
                            </button>
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
                                            <span>View Charts</span>
                                            <span>View Marktes</span>
                                            <span>View Historical Data</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>                      
                        </div>
                    </div>
                ))
                :  Array(limit).fill().map(()=>(
                    <div className="skeleton-card">
                        <div className="skeleton-card-body">
                        <span className="card-rank skeleton"></span> 
                        <span className="card-img skeleton"></span>
                        <span className="card-name skeleton "></span>
                        <span className="card-symbol skeleton "></span>
                        <span className="card-value skeleton "></span>
                        <span className="card-change skeleton "></span>
                        <span className="card-change skeleton "></span>
                        <span className="card-change skeleton "></span>
                        <span className="card-value price skeleton "></span>
                        <span className="card-value supply skeleton "></span>
                        <span className="card-value skeleton "></span>
                        <span className="card-graph skeleton "></span>
                        <span className="card-accor skeleton "></span>
                        </div>
                    </div>
                ))
                }        
            </div>           
        </div>
       
    </div>
  )
}

export default CoinTable


