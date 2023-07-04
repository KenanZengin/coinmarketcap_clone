"use client"

import Link from "next/link"
import { Accordion } from "react-bootstrap"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import {FiChevronDown} from "react-icons/fi"


const Pagination = () => {
  return (
   <>
    <div className="table-footer">
        <div className="table-pagination">
        <div className="pagi-info">
            <p>Showing 1 - 20 out of 10307</p>
        </div>
        <div className="page-pass">
            <ul>
                <li>
                    <Link href={"/"}>
                        <AiOutlineLeft size={12} />
                    </Link>
                </li>
                <li className="blue-bg">
                    <Link href={"/"}>
                        1   
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        2   
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        3   
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        4   
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        5   
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        6   
                    </Link>
                </li>
                <li className="empty">
                    ...
                </li>
                <li>
                    <Link href={"/"}>
                        516       
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <AiOutlineRight size={12} />      
                    </Link>
                </li>
            </ul>
        </div>
        <div className="rows-set">
            <p>Show rows</p>              
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="2">
                    <Accordion.Header> 
                        20
                        <FiChevronDown size={14} />
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="row-v">100</div>
                        <div className="row-v">50</div>
                        <div className="row-v">20</div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </div>
        <div className="work-info">
            <div className="info-accordion">
                <p>Find out how we work by click here.</p>
                <label htmlFor="readMore">
                    <input type="checkbox"  id="readMore" />
                </label>
            </div>
            <div className="text-content">
                <h2>Today’s Cryptocurrency Prices, Charts and Data</h2>
                <p>Welcome to CoinMarketCap.com! This site was founded in May 2013 by Brandon Chez to provide up-to-date cryptocurrency prices, charts and data about the emerging cryptocurrency markets. Since then, the world of blockchain and cryptocurrency has grown exponentially and we are very proud to have grown with it. We take our data very seriously and we do not change our data to fit any narrative: we stand for accurately, timely and unbiased information.</p>
                <h2>All Your Crypto Market Data Needs in One Place</h2>
                <p>Here at CoinMarketCap, we work very hard to ensure that all the relevant and <Link href={"/"}>up-to-date information</Link> about cryptocurrencies, coins and tokens can be located in one easily discoverable place. From the very first day, the goal was for the site to be the number one location online for crypto market data, and we work hard to empower our users with our unbiased and accurate information.</p>
                <h3>We Provide Live and Historic Crypto Charts for Free</h3>
                <p>Each of our coin data pages has a graph that shows both the current and historic price information for the coin or token. Normally, the graph starts at the launch of the asset, but it is possible to select specific to and from dates to customize the chart to your own needs. These charts and their information are free to visitors of our website.</p>
                <h3>How Do We Calculate Our Cryptocurrency Prices?</h3>
                <p>We receive updated cryptocurrency prices directly from many exchanges based on their pairs. We then convert the number to USD. A full explanation can be found <Link href={"/"}>here</Link>.</p>
                <p>Related Links <br />New to crypto?<Link href={"/"}> Learn how to buy bitcoin today</Link>. <br />Ready to learn more? Visit our <Link href={"/"}>crypto glossary</Link> and <Link href={"/"}>Learning hub</Link>. <br />Want to look up a transaction? <Link href={"/"}>Visit our blockchain explorer</Link>.</p>
                <h3>How Do We Calculate Our Crypto Valuations?</h3>
                <p>We calculate our valuations based on the total circulating supply of an asset multiplied by the currency reference price. The topic is explained in more detail <Link href={"/"}>here</Link>.</p>
                <h3>How Do We Calculate the Cryptocurrency Market Cap?</h3>
                <p>We calculate the total cryptocurrency market capitalization as the sum of all cryptocurrencies listed on the site.</p>
                <h2>Does CoinMarketCap.com List All Cryptocurrencies?</h2>
                <p>No, we do not list all cryptocurrencies at CoinMarketCap. As a company and team, we are very aware that not all coins and projects have good intentions. While we cannot guarantee to exclude them all, we have a vetting process that each coin goes through before it is listed on the site. If we suspect that a coin or project is a scam, it does not get listed.</p>
                <h3>How Big Is the Global Coin Market?</h3>
                <p>At the time of writing, we estimate that there are around 8,000 coins, tokens and projects in the global coin market. As mentioned above, we have a <Link href={"/"}>due diligence process</Link> that we apply to new coins before they are listed. This process controls how many of the cryptocurrencies from the global market are represented on our site.</p>
                <h3>What Is an Altcoin?</h3>
                <p>The very first cryptocurrency was <Link href={"/"}>Bitcoin</Link>. Since it is open source, it is possible for other people to use the majority of the code, make a few changes and then launch their own separate currency. Many people have done exactly this. Some of these coins are very similar to Bitcoin, with just one or two amended features (such as <Link href={"/"}>Litecoin</Link>), while others are very different, with varying models of security, issuance and governance. However, they all share the same moniker — every coin issued after Bitcoin is considered to be an altcoin.</p>
                <h3>What Is an ICO?</h3>
                <p>ICO stands for initial coin offering. Many of the smaller projects in the crypto space — and a few of the largest ones — raised money from private investors around the world in the crypto equivalent of a crowdfunding campaign. Investors would send funds — usually in the form of Bitcoin — to the project and receive coin or tokens in return.<br /> Most ICOs happened in 2017 and early 2018 and used <Link href={"/"}>Ethereum</Link> as a platform of operation via the ERC-20 standard. In 2018, the United States Securities and Exchange Commission (SEC) clarified their rules relating to fundraising for assets, which made it much harder for new cryptocurrency projects to issue their own tokens in this way. Since the appearance of the SEC guidance and the organization’s heightened interest in regulating ICOs for U.S. citizens, the number of ICOs has been reduced substantially.</p>
                <h3>What Is a Stablecoin?</h3>
                <p>Price volatility has long been one of the features of the cryptocurrency market. When asset prices move quickly in either direction and the market itself is relatively thin, it can sometimes be difficult to conduct transactions as might be needed. To overcome this problem, a new type of cryptocurrency tied in value to existing currencies — ranging from the U.S. dollar, other fiats or even other cryptocurrencies — arose. These new cryptocurrency are known as stablecoins, and they can be used for a multitude of purposes due to their stability.</p>
                <h3>What Are In-game Tokens?</h3>
                <p><Link href={"/"}>Play-to-earn</Link> (P2E) games, also known as <Link href={"/"}>GameFi</Link>, has emerged as an extremely popular category in the crypto space. It combines <Link href={"/"}>non-fungible tokens (NFT)</Link>, in-game crypto tokens, <Link href={"/"}>decentralized finance (DeFi)</Link> elements and sometimes even metaverse applications. Players have an opportunity to generate revenue by giving their time (and sometimes capital) and playing these games. <br /><br /> One of the biggest winners is <Link href={"/"}>Axie Infinity</Link>— a Pokémon-inspired game where players collect Axies (NFTs of digital pets), breed and battle them against other players to earn Smooth Love Potion (SLP) — the in-game reward token. This game was extremely popular in developing countries like The Philippines, due to the decent income they can earn. Players in the Philippines can check the price of <Link href={"/"}>SLP to PHP today</Link>directly on CoinMarketCap.</p>
                <h2>Which Is the Best Cryptocurrency to Invest in?</h2>
                <p>CoinMarketCap does not offer financial or investment advice about which cryptocurrency, token or asset does or does not make a good investment, nor do we offer advice about the timing of purchases or sales. We are strictly a data company.<br />Please remember that the prices, yields and values of financial assets change. This means that any capital you may invest is at risk. We recommend seeking the advice of a professional investment advisor for guidance related to your personal circumstances.</p>
                <h3>If You Are Investing in Cryptocurrency — CoinMarketCap.com Is for You</h3>
                <p>The data at CoinMarketCap updates throughout the day, which means that it is possible to check in on the value of your investments and assets at any time and from anywhere in the world. We look forward to seeing you regularly!</p>

                <label htmlFor="readMore" >
                    Read Less
                </label>
            </div>
        </div>
    </div>
    <div className="subs">
       <div className="subs-content">
            <div className="left">
                <h2 className="title">
                    Be the first to know about&nbsp;
                    <span>crypto news every day</span>
                </h2>
                <p>Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
                <div className="subs-btn">
                    <button>
                        Subscribe now
                    </button>
                </div>
            </div>
            <div className="right">
                <img src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_dark.svg?_=1bafcec" alt="cloudimg" />
            </div>
        </div>
    </div>
   </>
  )
}

export default Pagination