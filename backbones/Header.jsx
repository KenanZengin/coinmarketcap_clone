'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, Nav, Navbar } from 'react-bootstrap'
import {BiSolidUpArrow,BiSolidDownArrow,BiSolidGasPump} from 'react-icons/bi'
import {FiChevronDown} from 'react-icons/fi'
import {BsFillSunFill} from 'react-icons/bs'
import {GoStarFill} from 'react-icons/go'
import {BiSolidPieChartAlt2,BiSearch} from 'react-icons/bi'

import logo from 'public/img/logo.png'
import portfolio from 'public/img/portfolio.png'
import star from 'public/img/star.png'


const Header = () => {
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
                                deneme
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className="options-item">
                  <div className="currency">
                    USD
                    <BiSolidDownArrow size={8.5} />
                  </div>
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
                  <Image src={logo} alt='MainLogo' />
                </Link>
              </div>
              <div className="header-navbar">
                <Navbar>
                  <Nav>
                    <Nav.Item>
                      <Link href={"/"} className='nav-item-link'>
                        Cryptocurrencies
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item>
                      <Link href={"/"} className='nav-item-link'>
                      Exchanges
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item>
                      <Link href={"/"} className='nav-item-link'>
                      Community
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item>
                      <Link href={"/"} className='nav-item-link'>
                      Products
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item>
                      <Link href={"/"} className='nav-item-link'>
                      Learn
                      </Link>
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
                <div className="search-input">
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