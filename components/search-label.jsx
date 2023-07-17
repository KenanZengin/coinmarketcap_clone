'use client'

import Link from "next/link"
import { useContext, useState } from "react"
import { CoinMarketCapContext } from "@/context/context"
import useSWR from "swr"
import {AiFillCloseCircle} from "react-icons/ai"
import {BsFire} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"

const Search = () => {
    const {getCoins,setCoinDetail,searchLabel,search,setSearch,searchContent,setshowFourthCanvas} = useContext(CoinMarketCapContext)
    const {data,error } = useSWR(`/api/coins?limit=100&start=1`,getCoins)
   

    const sendInfo = (coinInfo) => {
        setCoinDetail(coinInfo)  
        searchContent("none")
        setshowFourthCanvas(false)
    }
    return (
    <div className="search-area" style={{"--dp-v":searchLabel}}>
        <div className="search-area-content">
            <div className="searching-label">
                <BiSearch size={15} />
                <input type="text"  placeholder='Search coin, pair, contract address or exchange' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <div className="close" onClick={()=>searchContent("none")}>
                <AiFillCloseCircle size={18} />
                </div>
            </div>
            {search.length > 0 
            ?  
                <div className="trending user-list">
                    <div className="title">
                        Cryptoassets
                    </div>
                    <ul className="trend-list">            
                        {data && data?.filter((item)=>{
                            return search.toLowerCase() === ""
                                ? ""
                                : item.name.toLowerCase().includes(search)
                            }).map((coin,i)=>(
                                i < 6
                                ?  <li><Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>
                                    <span className="info">
                                        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt="eCash" width={20} height={20} />
                                        <span className='name'>{coin.name}</span>
                                        <span className="symbol">{coin.symbol}</span>
                                    </span>
                                    <span className="rank">
                                        #{coin.cmc_rank}
                                    </span>
                                    </Link></li>
                                :""
                            ))                   
                        }                           
                    </ul>
                </div> 
            :  
                <div className="trending normal-list">
                    <div className="title">
                        Top Coins
                        &nbsp;
                        <span>
                            <BsFire size={14} />
                        </span>
                    </div>
                    <ul className="trend-list">
                        {data?.map((coin,i)=>(
                        i < 6 
                                ?   <li>
                                        <Link  onClick={()=>sendInfo(coin)} href={`/currencies/${coin.slug}?rank=${Number(coin.cmc_rank)}`}>
                                        <span className="info">
                                            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt="pepe" width={20} height={20} />
                                            <span className='name'>{coin.name}</span>
                                            <span className="symbol">{coin.symbol}</span>
                                        </span>
                                        <span className="rank">
                                            #{coin.cmc_rank}
                                        </span>
                                        </Link>
                                    </li>
                                :   ""
                        ))}                
                    </ul>
                </div>
            }
        <div className="recent-searches">
            <div className="title">
            Recent search 
            </div>
            <ul className="recentlist">
            <li>
                <Link href={"/"}>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="btc" height={20} width={20} />
                <span className="name">Bitcoin</span>
                <span className="symbol">BTC</span>
                </Link>
            </li>
            <li>
                <Link href={"/"}>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/10791.png" alt="xec" height={20} width={20} />
                <span className="name">eCash</span>
                <span className="symbol">XEC</span>
                </Link>
            </li>
            
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Search