"use client"

import Link from "next/link"
import { Carousel } from "react-bootstrap"
import {BiSolidUpArrow,BiSolidDownArrow} from "react-icons/bi"
import {MdOutlineKeyboardArrowRight,MdRemoveRedEye} from "react-icons/md"
import {VscVerifiedFilled} from "react-icons/vsc"
import {FaCommentDots,FaHeart} from "react-icons/fa"

const Topbar = () => {  
  return (
    <div className="topbar">
      <div className="topbar-header">
      <div className="title">
            <h1> Today's Cryptocurrency Prices by Market Cap</h1>
            <p className='desc'>
            The global crypto market cap is $1.2T, a &nbsp;
            <span><BiSolidUpArrow size={7}/> 0.75%</span>
            &nbsp;increase over the last day.           
            <span>Read More</span>
            </p>
            
        </div>
        <div className="change">
          Highlights
          <input type="checkbox" id="1" />
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
          <Carousel>
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
        <div className="card first-card">
          card 3
        </div>
      </div>
    </div>
  )
}

export default Topbar