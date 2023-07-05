"use client"

import Link from "next/link"
import {useState} from "react"
import { Carousel, Accordion } from "react-bootstrap"
import {BiSolidUpArrow,BiSolidDownArrow,BiSolidPieChartAlt2,BiCalendarMinus,BiSearch} from "react-icons/bi"
import {FiChevronDown} from "react-icons/fi"
import {MdOutlineKeyboardArrowRight,MdRemoveRedEye} from "react-icons/md"
import {VscVerifiedFilled} from "react-icons/vsc"
import {FaCommentDots,FaHeart} from "react-icons/fa"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {GoStarFill} from "react-icons/go"
import {PiSlidersHorizontalBold} from "react-icons/pi"


const Topbar = () => {  

  const [more,setMore] = useState(false)

  return (
    <div className="topbar">
      <div className="topbar-header">
        <div className="title">
            <h1> Today's Cryptocurrency Prices by Market Cap</h1>
            <p className='desc'>
              The global crypto market cap is $1.2T, a &nbsp;
              <span className="up"><BiSolidUpArrow size={7}/> 0.75%</span>
              &nbsp;increase over the last day.           
              <button onClick={()=>setMore(!more)} >
                {more ? "Read More" : "Read Less"}
              </button>   
            </p>
            <br />
            {more && <div className="more-desc">
              <p className="desc">
                The total crypto market volume over the last 24 hours is $30.9B, which makes a <span className="down"><BiSolidDownArrow size={7}/> 14.97%</span> decrease. The total volume in DeFi is currently $2.66B, 8.60% of the total crypto market 24-hour volume. The volume of all stable coins is now $27.75B, which is 89.81% of the total crypto market 24-hour volume.
              </p>   
              <p className="desc">
                Bitcoin’s dominance is currently 49.65%, an increase of <span className="up"><BiSolidUpArrow size={7}/> 0.11%</span> over the day.
              </p>   
            </div> }     
        </div>    
        <div className="change">
          Highlights
          <input type="checkbox" id="1" defaultChecked="true"/>
          <label htmlFor="1" className="switch-label">
            <span className="switch-button"></span>
          </label>
        </div>
      </div>
      <div className="topbar-cards">
        <div className="card first-card">
          <div className="top">
            <div className="left">
              <img src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=4ebcd9a" alt="fire" width={20} height={20} />                 
              Trending
            </div>
            <Link href={"/"} className="right">
              More
              <MdOutlineKeyboardArrowRight size={15} />
            </Link>
          </div>
          <div className="lists">
            <div className="list">
              <div className="info">
                <span className="order">1</span>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png" alt="pepe" width={16} height={16} className="populerimg" />
                <span className="name">Pepe</span>
                <div className="symbol">PEPE</div>
              </div>
              <div className="change down">
                <BiSolidDownArrow size={9} />
                1.00%
              </div>
            </div>
            <div className="list">
              <div className="info">
                <span className="order">2</span>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="btc" width={16} height={16} className="populerimg" />
                <span className="name">Bitcoin</span>
                <div className="symbol">BTC</div>
              </div>
              <div className="change up">
                <BiSolidUpArrow size={9} />
                2.47%
              </div>
            </div>
            <div className="list">
              <div className="info">
                <span className="order">3</span>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" alt="LTC" width={16} height={16} className="populerimg" />
                <span className="name">Litecoin</span>
                <div className="symbol">LTC</div>
              </div>
              <div className="change down">
                <BiSolidDownArrow size={9} />
                6.38%
              </div>
            </div>
          </div>
        </div>
        <div className="card second-card">
          <Carousel  >
            <Carousel.Item>
              <div className="top">
                <div className="left">
                  <span className="star">⭐️</span>
                  Top Community Accounts
                </div>
                <Link href={"/"} className="right">
                More
                <MdOutlineKeyboardArrowRight size={15} />
              </Link>
              </div>
              <div className="lists">
                <div className="list">
                  <div className="info">              
                    <img src="https://s3.coinmarketcap.com/static/img/portraits/62876e92bedeb632050eb4ae.png" alt="bnb" width={26} height={26} className="comintyimg"/>
                    <span className="name">BNB Chain&nbsp;</span>
                    <VscVerifiedFilled size={15}/>
                    <div className="name-tag">&nbsp;@BNBChain</div>
                  </div>
                  <div className="follow">
                    <button>
                      + Follow
                    </button>
                  </div>
                </div>
                <div className="list">
                  <div className="info">              
                    <img src="https://s3.coinmarketcap.com/static/img/portraits/6310a2776eac787c457a1f09.png" alt="inc" width={26} height={26} className="comintyimg"/>
                    <span className="name">1inch Network&nbsp;</span>
                    <VscVerifiedFilled size={15}/>
                    <div className="name-tag">&nbsp;@1inch</div>
                  </div>
                  <div className="follow">
                    <button>
                      + Follow
                    </button>
                  </div>
                </div>
                <div className="list">
                  <div className="info">              
                    <img src="https://s3.coinmarketcap.com/static-gravity/image/b83ffb5355a04923af9cb40700a3132d.png" alt="vet" width={26} height={26} className="comintyimg"/>
                    <span className="name">VeChain Foundation&nbsp;</span>
                    <VscVerifiedFilled size={15}/>
                    <div className="name-tag">&nbsp;@VeChainFoundation</div>
                  </div>
                  <div className="follow">
                    <button>
                      + Follow
                    </button>
                  </div>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="top">
                <div className="left">
                  <span className="star">⭐️</span>
                  Top Community Post
                </div>
                <Link href={"/"} className="right">
                More
                <MdOutlineKeyboardArrowRight size={15} />
              </Link>
              </div>
              <div className="content">
                <Link href={"/"} className="logo">
                  <img src="https://s3.coinmarketcap.com/static/img/portraits/61d684f57ff10a2f03fd0e57.png" alt="enj" width={36} height={36} />
                </Link>
                <div className="comment">
                  <div className="head">
                    <div className="name">Enjin&nbsp;</div>
                    <VscVerifiedFilled size={15} />
                    <div className="name-tag">&nbsp;@enjin</div>
                  </div>
                  <p className="desc">
                    It's officially here! Say hello to the Enjin Blockchain, with the Efinity Matrixchain! 🌟
                    <br />
                    ...
                  </p>
                  <div className="bottom">
                    <div className="date">
                      Jun 8
                    </div>
                    <div className="date">
                      <div className="point"></div>
                      <FaCommentDots size={14} />
                      34
                    </div>
                    <div className="date">
                      <div className="point"></div>
                      <FaHeart size={14} />
                      61
                    </div>

                    

                  </div>
                  
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="top">
                <div className="left">
                  <span className="star">⭐️</span>
                  Top Community Post
                </div>
                <Link href={"/"} className="right">
                More
                <MdOutlineKeyboardArrowRight size={15} />
              </Link>
              </div>
              <div className="content">
                <Link href={"/"} className="big-img">
                  <img src="https://academy-public.coinmarketcap.com/srd-optimized-uploads/75229ba3a44442d0b96cc65da9cb9c79.jpg"  alt="ont" width={100} height={100} />
                </Link>
                <div className="comment">
                  <div className="head head-m">
                    <img src="https://s3.coinmarketcap.com/static-gravity/image/f4acc2051cfa4b6583b67f740a8e6b34.jpg" alt="ont" width={18} height={18} />
                    <div className="big-img-name">Ontology&nbsp;</div>
                  </div>
                  <p className="desc">
                    Ontology Weekly Report (May 16–22, 2023)    
                  </p>
                  <div className="bottom">
                    <div className="date">
                      Jun 8
                    </div>
                    <div className="date">
                      <div className="point"></div>
                      <MdRemoveRedEye size={15} />
                      3k
                    </div>
                    <div className="date">
                      <div className="point"></div>
                      <FaHeart size={14} />
                      2
                    </div>
                    <Link href={"/"}>
                      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2566.png" alt="ont" width={16} height={16} />
                      <span>ONT</span>
                    </Link>

                    

                  </div>
                  
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="card third-card">
          <div className="top">
              <div className="left fear-info">
                Fear & Greed Index
                <span>
                  <AiOutlineInfoCircle size={16} />
                  <div className="tooltips">
                    <div className="tooltip-info">
                    <div className="tooltip-body">
                      <p>When the value is closer to 0, the market is in Extreme Fear, and investors have over-sold irrationally.</p> 
                      <br />
                      <p>When the value is closer to 100, the market is in Extreme Greed, indicating a likely market correction. </p>
                      <br />
                      <p>CoinMarketCap uses the price and trading data of the most popular crypto coins, together with our unique user behaviour data to present a more accuratecrypto market sentiment.</p>
                    </div>
                </div>
                  </div>
                </span>
              </div>                  
          </div>
          <div className="fear-index">
            <div className="mark"></div>
            <svg width="177" height="89" viewBox="0 0 177 89" fill="none"           xmlns="http://www.w3.org/2000/svg"><path d="M173.262 88C174.967 88 176.354 86.6173 176.294 84.9135C175.747 69.3495 171.069 54.2074 162.739 41.0369C161.829 39.5992 159.909 39.2385 158.502 40.1946V40.1946C157.091 41.1536 156.731 43.073 157.639 44.5176C165.272 56.6598 169.575 70.5911 170.116 84.9137C170.181 86.6174 171.557 88 173.262 88V88Z" fill="#16C784"></path><path d="M156.897 37.9461C158.276 36.9419 158.582 35.0049 157.527 33.664C147.855 21.3698 135.074 11.8665 120.501 6.13374C118.919 5.51151 117.158 6.35475 116.589 7.9564V7.9564C116.019 9.56129 116.861 11.3189 118.444 11.9467C131.848 17.2616 143.611 26.0103 152.545 37.3081C153.6 38.6424 155.522 38.9473 156.897 37.9461V37.9461Z" fill="#93D900"></path><path d="M113.03 6.79368C113.529 5.1655 112.613 3.4359 110.968 2.99624C95.9311 -1.02229 80.0941 -0.998203 65.0696 3.06605C63.4258 3.51072 62.5154 5.24312 63.0192 6.86979V6.86979C63.5221 8.49352 65.2439 9.3971 66.8859 8.95738C80.732 5.24947 95.3122 5.22729 109.17 8.89306C110.813 9.32777 112.532 8.41894 113.03 6.79368V6.79368Z" fill="#F3D42F"></path><path d="M60.1455 7.80322C59.5852 6.19848 57.8286 5.34566 56.2435 5.95929C41.7314 11.5772 28.9667 20.9284 19.2489 33.0606C18.1823 34.3922 18.4716 36.3318 19.842 37.3481V37.3481C21.2083 38.3612 23.1323 38.0731 24.1989 36.7482C33.1738 25.6002 44.9213 16.992 58.2681 11.7833C59.8547 11.1641 60.707 9.41116 60.1455 7.80322V7.80322Z" fill="#EA8C00"></path><path d="M17.7126 40.3161C16.3039 39.3625 14.3841 39.7265 13.4772 41.1658C5.1935 54.313 0.544063 69.4152 0.00210452 84.935C-0.0573952 86.6388 1.3307 88.0212 3.03561 88.0208V88.0208C4.74051 88.0203 6.11617 86.6374 6.18018 84.9337C6.71672 70.6522 10.9931 56.7581 18.5827 44.6376C19.4882 43.1915 19.1255 41.2726 17.7126 40.3161V40.3161Z" fill="#EA3943"></path>
            </svg>
            <span className="fear-value">61</span>
            <span className="fear-text">Greed</span>
          </div>
        </div>
      </div>
      <div className="topbar-customize">
        <div className="categories">
          <ul className="categori-list">
            <li className="member-categori">
              <Link href={"/"}>
                <GoStarFill size={14} />
                Watchlist
              </Link>
            </li>
            <li className="member-categori">
            <Link href={"/"}>
              <BiSolidPieChartAlt2 size={14} />
              Portfolio
            </Link>
            </li>
            <li className="border"></li>
            <li className="all-user-categori">
              <Link href={"/"}>
                Cryptocurrencies
              </Link>
            </li>
            <li className="categori">
              <Link href={"/"}>
              Categories
              </Link>
            </li>
            <li className="border"></li>
            <li className="categori">
              <Link href={"/"}>
                Defi
              </Link>
            </li>
            <li className="categori">
              <Link href={"/"}>
                Bitcoin Ecosystem
              </Link>
            </li>
            <li className="categori">
              <Link href={"/"}>
                Liquit Staking Derivatives
              </Link>
            </li>
            <li className="categori">
              <Link href={"/"}>
                Metaverse
              </Link>
            </li>
          </ul>
        </div>
        <div className="options">
          <ul className="option-list">
            <li className="member-categori">
              <span>Show rows</span>              
                <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> 
                              50
                              <FiChevronDown size={14} />
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="row-v">100</div>
                              <div className="row-v">50</div>
                              <div className="row-v">20</div>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </li>
            <li className="member-categori extra-categori">
              <input type="checkbox"  id="extra" />
                <button>
                  <label htmlFor="extra">
                    <PiSlidersHorizontalBold size={14} />
                    Filters
                  </label>
                </button>
             
            </li>
            <li className="member-categori">
              <button>  
                <BiCalendarMinus size={14} />
                Customize             
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="topbar-extra topbar-customize">
        <div className="options">
          <ul className="option-list">
            <li className="member-categori extra-categori">             
                <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> 
                              Category
                              <FiChevronDown size={14} />
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="search-label">
                                <BiSearch size={18}/>
                                <input type="text" placeholder="Search"/>
                              </div>
                              <div className="extra-list">
                                <div className="info">Popular Categories</div>
                               <ul>
                                  <li>Platform</li>
                                  <li>Store Of Value</li>
                                  <li>Atomic Swaps</li>
                                  <li>Centralized Exchange (CEX)Token</li>
                                  <li>Collectivles & NFTs</li>
                                  <li>Decentralized Exchange (DEX)Token</li>
                                  <li>Defi</li>
                              </ul>
                              </div>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </li>
            <li className="member-categori extra-categori">             
                <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> 
                              Algorithm
                              <FiChevronDown size={14} />
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="search-label">
                                <BiSearch size={18}/>
                                <input type="text" placeholder="Search"/>
                              </div>
                              <div className="extra-list">
                                <div className="info">Popular Algorithms</div>
                               <ul>
                                  <li>Platform</li>
                                  <li>Store Of Value</li>
                                  <li>Atomic Swaps</li>
                                  <li>Centralized Exchange (CEX)Token</li>
                                  <li>Collectivles & NFTs</li>
                                  <li>Decentralized Exchange (DEX)Token</li>
                                  <li>Defi</li>
                              </ul>
                              </div>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </li>
            <li className="member-categori extra-categori">             
                <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> 
                              Platform
                              <FiChevronDown size={14} />
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="search-label">
                                <BiSearch size={18}/>
                                <input type="text" placeholder="Search"/>
                              </div>
                              <div className="extra-list">
                                <div className="info">Platform Algorithms</div>
                               <ul>
                                  <li>Platform</li>
                                  <li>Store Of Value</li>
                                  <li>Atomic Swaps</li>
                                  <li>Centralized Exchange (CEX)Token</li>
                                  <li>Collectivles & NFTs</li>
                                  <li>Decentralized Exchange (DEX)Token</li>
                                  <li>Defi</li>
                              </ul>
                              </div>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </li>
            <li className="member-categori extra-categori">             
                <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> 
                              Industry
                              <FiChevronDown size={14} />
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="search-label">
                                <BiSearch size={18}/>
                                <input type="text" placeholder="Search"/>
                              </div>
                              <div className="extra-list">
                                <div className="info">Industry Algorithms</div>
                               <ul>
                                  <li>Platform</li>
                                  <li>Store Of Value</li>
                                  <li>Atomic Swaps</li>
                                  <li>Centralized Exchange (CEX)Token</li>
                                  <li>Collectivles & NFTs</li>
                                  <li>Decentralized Exchange (DEX)Token</li>
                                  <li>Defi</li>
                              </ul>
                              </div>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar