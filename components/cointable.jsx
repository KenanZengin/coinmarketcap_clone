"use client"
import Link from "next/link"
import { Accordion } from "react-bootstrap"
import {BsInfoCircleFill} from "react-icons/bs"
import {AiOutlineStar} from "react-icons/ai"
import {BiSolidUpArrow,BiSolidDownArrow} from "react-icons/bi"


const getData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/getCoins');
        const data = await res.json();
        return data
    } catch (error) {
      console.log(error.message);
    }
}
  




const CoinTable = async () => {

    const coins = await getData();

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
              {coins.data.data.map((coin)=>(
                <div className="table-body-item" key={coin.id}>
                    <div className="star">
                      <AiOutlineStar size={16} />
                    </div>
                    <div className="t-body-rank rank">
                        {coin.cmc_rank}
                    </div>
                    <div className="t-body-name name">
                        <Link href={"/"}>
                        <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} alt="btcLogo" width={24} height={24} />
                        <p>{coin.name}</p>
                        <p>{coin.symbol}</p>
                        </Link>
                    </div>
                    <div className="t-body-price price">
                        <Link href={"/"}>
                            {coin.quote.USD.price}
                        </Link>
                    </div>  
                    <div className="t-body-change h1-change">
                            <BiSolidUpArrow size={8} />
                            {coin.quote.USD.percent_change_1h}
                    </div>
                    <div className="t-body-change h24-change">
                            <BiSolidUpArrow size={8} />
                            {coin.quote.USD.percent_change_24h}
                    </div>
                    <div className="t-body-change d7-change">
                            <BiSolidUpArrow size={8} />
                            {coin.quote.USD.percent_change_7d}
                    </div>
                    <div className="t-body-mrkcap market-cap">
                        <Link href={"/"}>
                        {coin.quote.USD.market_cap}
                        </Link>
                    </div>
                    <div className="t-body-v volume">
                        <Link href={"/"}>
                            <p>${coin.quote.USD.volume_24h}</p>
                        </Link>
                        <span>511,222{coin.quote.USD.volume_24h/coin.quote.USD.price} BTC</span>
                    </div>
                    <div className="t-body-sp supply">
                        <Link href={"/"}>
                            {coin.total_supply}
                        </Link>
                    </div>
                    <div className="basic-graph">
                        <Link href={"/"}>
                            <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" alt="graph" width={164} height={48} />
                        </Link>
                    </div>
                    <div className="go-detail">
                        <Accordion defaultActiveKey="0" alwaysOpen="false">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> 
                                    <div>
                                        .
                                        <br />
                                        .
                                        <br />
                                        .  
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <Link href={"/"}>
                                            View Charts
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={"/"}>
                                            View Markets
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={"/"}>
                                            View Historical Data
                                        </Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
              ))}
              
            
            </div>           
        </div>
    </div>
  )
}

export default CoinTable