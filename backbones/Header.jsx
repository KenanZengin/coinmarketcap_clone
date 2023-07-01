'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Accordion, Nav, Navbar, Button, Modal } from 'react-bootstrap'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BiSolidUpArrow, BiSolidDownArrow, BiSolidGasPump} from 'react-icons/bi'
import {FiChevronDown} from 'react-icons/fi'
import {BsFillSunFill, BsFire} from 'react-icons/bs'
import {GoStarFill} from 'react-icons/go'
import {BiSolidPieChartAlt2, BiSearch} from 'react-icons/bi'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
import {PiArrowSquareOutBold} from 'react-icons/pi'
import logo from 'public/img/logo.png'
import calendar from 'public/img/calendar.png'


const Header = () => {

  const [show, setShow] = useState(false);
  const [dp,setDp] = useState("none")

  
  return (
    <header className='header'>
      <div className="header-web">

        <div className="header-web-topbar">
          <div className="web-container">
            <div className="web-container-left">
              <ul className="global-stats">
                <li className="glo-stat-item">
                  <span className='base-text'>Cryptos:</span>
                  &nbsp;
                  <Link href={"/"} className='links'>
                    26.017
                  </Link>
                </li>
                <li className="glo-stat-item">
                  <span className='base-text'>Exchanges:</span>
                  &nbsp;
                  <Link href={"/"} className='links'>
                    640
                  </Link>
                </li>
                <li className="glo-stat-item">
                  <span className='base-text'>Market Cap:</span>
                  &nbsp;
                  <Link href={"/"} className='links'>
                    $1.19T
                  </Link>
                  <span className="percent-change">
                    <BiSolidUpArrow size={7} />
                    <span className="value">0.67%</span>
                  </span>
                </li>
                <li className="glo-stat-item">
                  <span className='base-text'>24h Vol:</span>
                  &nbsp;
                  <Link href={"/"} className='links'>
                    $36.93B
                  </Link>
                  <span className="percent-change">
                    <BiSolidUpArrow size={7} />
                    <span className="value">13.76%</span>
                  </span>
                </li>
                <li className="glo-stat-item">
                  <span className='base-text'>Dominance:</span>
                  &nbsp;
                  <Link href={"/"} className='links'>
                    BTC:&nbsp;50.2%&nbsp;ETH:&nbsp;19.0%
                  </Link>
                </li>
                <li className="glo-stat-item gas">
                  <div className="eth-gas-img">
                    <BiSolidGasPump size={15} />
                  </div>
                  <span className='base-text'>
                    ETH Gas:
                  </span>
                  &nbsp;
                  <div className='eth-gas'>
                    <Link href={"/"} className='links'>
                      14 Gwei 
                    </Link>
                    <span className="downarrow">
                      <FiChevronDown size={12} />
                    </span>
                    <div className="tooltips">
                      <div className="tooltip-info">
                        <div className="tooltip-body">
                          <div className="gas-values">
                            <div className="value">
                              <span className='title'>Slow</span>
                              <span className='gwei'>30 Gwei</span>
                              <span className='sec'>~195 sec</span>
                            </div>
                            <div className="value">
                              <span className='title'>Slow</span>
                              <span className='gwei'>30 Gwei</span>
                              <span className='sec'>~185 sec</span>
                            </div>
                            <div className="value">
                              <span className='title'>Slow</span>
                              <span className='gwei'>20 Gwei</span>
                              <span className='sec'>~160 sec</span>
                            </div>
                          </div>
                          <div className="supporter">
                            Powered by Etherscan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>               
                </li>
                <li className="glo-stat-item">
                  <span className='base-text'>Fear & Greed: </span>
                  &nbsp;
                  <div  className='links'>
                    59/100
                  </div>
                </li>
              </ul>
            </div>
            <div className="web-container-right">
              <div className="options">
                <div className="options-item">
                  <div className="lang-accordion">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> 
                              <span>
                                English
                                <BiSolidDownArrow size={8.5} />
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="lang-search">
                                <input type="text" placeholder="Search" autoComplete="off" spellCheck="false" autoFocus/>
                                <BiSearch size={16} />
                              </div>
                              <div className="lang-lists">
                              <div className="title">Popular languages</div>
                                  <ul className="lang-list-populer">
                                    <li>
                                      English
                                      <span>EN</span>
                                    </li>
                                    <li>
                                      Русский 
                                      <span>RU</span>
                                    </li>
                                    <li>
                                      Tiếng Việt 
                                      <span>VI</span>
                                    </li>
                                    <li>
                                      Türkçe 
                                      <span>TR</span>
                                    </li>
                                    <li>
                                      Español 
                                      <span>ES</span>
                                    </li>
                                  </ul>
                                  <div className="title">All languages</div>
                                  <ul className="lang-list">
                                    <li>
                                      اَلْعَرَبِيَّةُ 
                                      <span>AR</span>
                                    </li>
                                    <li>
                                      български 
                                      <span>BG</span>
                                    </li>
                                    <li>
                                      Čeština 
                                      <span>CSةُ</span>
                                    </li>
                                    <li>
                                      Dansk 
                                      <span>DA</span>
                                    </li>
                                    <li>
                                      Deutsch  
                                      <span>DE</span>
                                    </li>
                                    <li>
                                      ελληνικά  
                                      <span>EL</span>
                                    </li>
                                    <li>
                                      Čeština 
                                      <span>CSةُ</span>
                                    </li>
                                    <li>
                                      Dansk 
                                      <span>DA</span>
                                    </li>
                                    <li>
                                      български 
                                      <span>BG</span>
                                    </li>
                                    <li>
                                      Čeština 
                                      <span>CSةُ</span>
                                    </li>
                                  </ul>
                              </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className="options-item">
                  <button className="currency" onClick={()=>setShow(true)}>
                    USD
                    <BiSolidDownArrow size={8.5} />
                  </button>
                  <Modal
                    show={show}          
                    keyboard={false}
                    
                  >
                    <Modal.Body className='modal-currency' >
                      <div className="currency-title">
                        <span>Select Currency</span>
                        <span onClick={()=>setShow(false)}>
                          <CgClose size={25} />
                        </span>
                      </div>
                      <div className="search-bar">
                        <input type="text" placeholder="Search" />
                      </div>      
                      <div className="currency-items">                         
                          <div className="currency-item popular">
                            <span>Popular currencies</span>
                            <div className="group-list">
                              <div className="list-item checking">
                                <div className="item-option">
                                  <div className="option-img">
                                    <img src={"https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"} alt="USD" width={18} height={18}/>
                                  </div>
                                  <div className="option-currency">
                                    <span className="name">United States Dollar</span>
                                    <span className="symbol">USD - $</span>
                                  </div>
                                </div>
                                <div className="item-check">
                                  <AiOutlineCheckCircle size={18} />
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                    <img src={"https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/EUR.svg"} alt="EUR" width={18} height={18}/>
                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Euro</span>
                                    <span className="symbol">EUR - €</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                    <img src={"https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/GBP.svg"} alt="EUR" width={18} height={18}/>
                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Pound Sterling</span>
                                    <span className="symbol">GBP - £</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                    <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>
                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Bitcoin</span>
                                    <span className="symbol">BTC</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                    <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"} alt="ETH" width={18} height={18}/>
                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Ethereum</span>
                                    <span className="symbol">ETH</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="currency-item bitcoin-units">
                            <span>Bitcoin Units</span>
                            <div className="group-list">
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Bits</span>
                                    <span className="symbol">BITS</span>
                                  </div>
                                </div>
                              
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                             
                              
                            </div>
                          </div>

                          <div className="currency-item fiat">
                            <span>Fiat currencies</span>
                            <div className="group-list">
                              <div className="list-item checking">
                                <div className="item-option">
                                  <div className="option-img">
                                    <img src={"https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"} alt="USD" width={18} height={18}/>
                                  </div>
                                  <div className="option-currency">
                                    <span className="name">United States Dollar</span>
                                    <span className="symbol">USD - $  </span>
                                  </div>
                                </div>
                                <div className="item-check">
                                  <AiOutlineCheckCircle size={18} />
                                </div>
                              
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>

                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>

                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                             
                              
                            </div>
                          </div>

                          <div className="currency-item cryptocurrency">
                            <span>Cryptocurrencies</span>
                            <div className="group-list">
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">United States Dollar</span>
                                    <span className="symbol">USD - $  </span>
                                  </div>
                                </div>
                              
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                              <div className="list-item">
                                <div className="item-option">
                                  <div className="option-img">
                                  <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="BTC" width={18} height={18}/>                                  </div>
                                  <div className="option-currency">
                                    <span className="name">Satoshi</span>
                                    <span className="symbol">SATS</span>
                                  </div>
                                </div>
                              </div>
                             
                              
                            </div>
                          </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="options-item">
                  <div className="theme">
                     <button><BsFillSunFill size={22} /></button>
                  </div>
                </div>
                <div className="options-item options-border"></div>
              </div>
              <div className="user-section">
                <div className="diamond">
                  <Link href={"/"} className="diamond-img">
                    <img src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg" alt="diamond" width={20} height={20} />
                  </Link>
                  <div className="tooltips">
                    <div className="tooltip-info">
                      <div className="tooltip-body">
                        <div className="body-img">
                          <img src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/promo-2.png" alt="suprisebox" width={64} />
                          <p className='title'>CoinMarketCap Diamonds</p>
                          <p className='desc'>Earn CoinMarketCap Rewards by completing various tasks on the CoinMarketCap website.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="login-btn">
                  <button className='login'>
                    Log in
                  </button>
                </div>
                <div className="signup-btn">
                  <button className='signup'>
                    Sign up
                  </button>
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/signup/signupGift.gif?_=475eaaf" alt="gift" width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-web-middle"></div>
        <div className="header-web-global">       
          <div className="web-container">
            <div className="web-container-left">
              <div className="mainlogo">
                <Link href={"/"} className='logo-link'>
                  <Image src={logo} alt='MainLogo' priority />
                </Link>
              </div>
              <div className="header-navbar">
                <Navbar>
                  <Nav>
                    <Nav.Item className='crypto-tooltip first-nav'>
                      <Link href={"/"} className='nav-item-link '>
                        Cryptocurrencies
                      </Link>
                      <div className="tooltips">
                      <div className="tooltip-info">
                        <div className="tooltip-body">
                          <div className="cryptocurrencies">
                          <div className="title">CRYPTOCURRENCIES</div>
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"} width={32}
                                height={32} alt="Ranking" />
                                Ranking
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg"} width={32}
                                height={32} alt="recentlyAdded" />
                                Recently Added
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg"} width={32}
                                height={32} alt="Categories" />
                                Categories
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg"} width={32}
                                height={32} alt="Spotlight" />
                                Spotlight
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg"} width={32}
                                height={32} alt="Stats" />
                                Gainers & Losers
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg"} width={32}
                                height={32} alt="Charts" />
                                Global Charts
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg"} width={32}
                                height={32} alt="Charts" />
                                Historical Snapshots
                              </Link>
                              <hr />
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPriceEstimateIcon.svg"} width={32}
                                height={32} alt="priceEstimates" />
                                Price Estimates
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPolkadotIcon.svg"} width={32}
                                height={32} alt="Parachains" />
                                Polkadot Parachains
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuLegalIcon.svg"} width={32}
                                height={32} alt="legalCountries" />
                                Legal Tender Countries
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFiatsIcon.svg"} width={32}
                                height={32} alt="Fiats/Companies" />
                                Fiats / Companies Rankings
                              </Link>
                            </div>
                          </div>
                          <div className="cryptocurrencies">
                            <div className="title">NFT</div>
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverview.svg"} width={32}
                                height={32} alt="nFTStats" />
                                Overall NFT Stats
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTCollections.svg"} width={32}
                                height={32} alt="topCollections" />
                                Top Collections
                              </Link>
                              <Link href={"/"}>
                                <Image src={calendar} width={32}
                                height={32} alt="topCollections" />
                                Upcoming Sales
                              </Link>
                            </div>
                            <div className="title title-m">On Chain Data</div>
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexscan.svg"} width={32}
                                height={32} alt="dexPairs" />
                                Dex Pairs
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuChainRanking.svg"} width={32}
                                height={32} alt="chainRanking" />
                                Chain Ranking
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item className='crypto-tooltip second-nav'>
                      <Link href={"/"} className='nav-item-link'>
                      Exchanges
                      </Link>
                      <div className="tooltips">
                      <div className="tooltip-info">
                        <div className="tooltip-body">
                          <div className="cryptocurrencies">
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg"} width={32}
                                height={32} alt="Spot" />
                                Spot
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg"} width={32}
                                height={32} alt="Deravatives" />
                                Derivatives
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg"} width={32}
                                height={32} alt="dex" />
                                Dex
                              </Link>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      </div>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item className='crypto-tooltip third-nav'>
                      <Link href={"/"} className='nav-item-link'>
                      Community
                      </Link>
                      <div className="tooltips">
                      <div className="tooltip-info">
                        <div className="tooltip-body">
                          <div className="cryptocurrencies">
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg"} width={32}
                                height={32} alt="Feedback" />
                                Feeds
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg"} width={32}
                                height={32} alt="Articles " />
                                Articles
                              </Link>
                             
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      </div>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item className='crypto-tooltip fourth-nav'>
                      <Link href={"/"} className='nav-item-link'>
                      Products
                      </Link>
                      <div className="tooltips">
                      <div className="tooltip-info">
                        <div className="tooltip-body">
                          <div className="cryptocurrencies">
                          <div className="title">PRODUCTS</div>
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg"} width={32}
                                height={32} alt="Ranking" />
                                Converter
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg"} width={32}
                                height={32} alt="blockchainExplorer" />
                                Blockchain Explorer
                                <PiArrowSquareOutBold size={15} />
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTelegramBotIcon.svg"} width={32}
                                height={32} alt="Telegram" />
                                Telegram bot
                                <PiArrowSquareOutBold size={15} />
                              </Link>
                              <hr />
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCryptoApiIcon.dark.svg"} width={32}
                                height={32} alt="cryptoApi" />
                                Crypto API
                                <PiArrowSquareOutBold size={15} />
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuWidgetsIcon.dark.svg"} width={32}
                                height={32} alt="Parachains" />
                                Site Widgets
                              </Link>
                            </div>
                          </div>
                          <div className="cryptocurrencies">
                          <div className="title">CAMPAIGNS</div>
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg"} width={32}
                                height={32} alt="freeAirdrops" />
                                Free Airdrops
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg"} width={32}
                                height={32} alt="blockchainExplorer" />
                                Diamond Rewards
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg"} width={32}
                                height={32} alt="learn&Earn" />
                                Learn & Earn
                                <PiArrowSquareOutBold size={15} />
                              </Link>                            
                            </div>
                          </div>
                          <div className="cryptocurrencies">
                          <div className="title">CALENDARS</div>
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg"} width={32}
                                height={32} alt="icoCalendar" />
                                ICO Calendar
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEvents2Icon.svg"} width={32}
                                height={32} alt="eventsCalendar" />
                                Events Calendar
                              </Link>                   
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item className='crypto-tooltip fifth-nav'>
                      <Link href={"/"} className='nav-item-link'>
                      Learn
                      </Link>
                      <div className="tooltips">
                      <div className="tooltip-info">
                        <div className="tooltip-body">
                          <div className="cryptocurrencies">
                            <div className="menu">
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg"} width={32}
                                height={32} alt="News" />
                                News
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAlexandriaIcon.svg"} width={32}
                                height={32} alt="Alexandria " />
                                Alexandria
                                <PiArrowSquareOutBold size={15} />
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMCResearch.svg"} width={32}
                                height={32} alt="Research " />
                                Research
                                <PiArrowSquareOutBold size={15} />
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuVideosIcon.svg"} width={32}
                                height={32} alt="Videos " />
                                Videos
                                <PiArrowSquareOutBold size={15} />
                              </Link>
                              <Link href={"/"}>
                                <img src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlossaryIcon.svg"} width={32}
                                height={32} alt="Glossary " />
                                Glossary
                                <PiArrowSquareOutBold size={15} />
                              </Link>
                             
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      </div>
                    </Nav.Item>
                  </Nav>
                </Navbar>
              </div>
            </div>
            <div className="web-container-right">
              <div className="user-favorite">
                <button className='watchlist'>
                  <GoStarFill size={14} />
                  <span className="star-text">
                   Watchlist
                  </span>
                </button>
                <button className='portfolio'>
                  <BiSolidPieChartAlt2 size={14} />
                  <span className='portfolio-text'>
                    Portfolio
                  </span>
                </button>
              </div>
              <div className="coin-search-btn">
                <div className="search-input" onClick={()=>setDp("block")}>
                  <BiSearch size={19} />
                  <div className="placeholder">Search</div>
                  <div className="search-tooltip">
                    /
                    <div className="tooltips">
                      <div className="tooltip-info">
                        <div className="tooltip-body">
                          use to trigger search 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search-area" style={{"--dp-v":dp}}>
                  <div className="search-area-content">
                    <div className="searching-label">
                      <BiSearch size={15} />
                      <input type="text" placeholder='Search coin, pair, contract address or exchange' />
                      <div className="close" onClick={()=>setDp("none")}>
                        <AiFillCloseCircle size={18} />
                      </div>
                    </div>
                    <div className="trending">
                      <div className="title">
                        Trending
                        &nbsp;
                        <span>
                          <BsFire size={14} />
                        </span>
                      </div>
                      <ul className="trend-list">
                        <li>
                          <Link href={"/"}>
                            <span className="info">
                              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png" alt="pepe" width={20} height={20} />
                              <span className='name'>Pepe</span>
                              <span className="symbol">PEPE</span>
                            </span>
                            <span className="rank">
                              #58
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/"}>
                            <span className="info">
                              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/10791.png" alt="eCash" width={20} height={20} />
                              <span className='name'>eCash</span>
                              <span className="symbol">XEC</span>
                            </span>
                            <span className="rank">
                              #62
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/"}>
                            <span className="info">
                              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png" alt="bitcoinCash" width={20} height={20} />
                              <span className='name'>Bitcoin Cash</span>
                              <span className="symbol">BCH</span>
                            </span>
                            <span className="rank">
                              #14
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/"}>
                            <span className="info">
                              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="bitcoin" width={20} height={20} />
                              <span className='name'>Bitcoin Cash</span>
                              <span className="symbol">BCH</span>
                            </span>
                            <span className="rank">
                              #1
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/"}>
                            <span className="info">
                              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/18037.png" alt="MAV" width={20} height={20} />
                              <span className='name'>Maverick Protocol</span>
                              <span className="symbol">MAV</span>
                            </span>
                            <span className="rank">
                              #242
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/"}>
                            <span className="info">
                              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" alt="LTC" width={20} height={20} />
                              <span className='name'>Litecoin</span>
                              <span className="symbol">LTC</span>
                            </span>
                            <span className="rank">
                              #9
                            </span>
                          </Link>
                        </li>
                      
                      </ul>
                    </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="header-web-middle"></div> 

      </div>
    </header>
  )
}

export default Header