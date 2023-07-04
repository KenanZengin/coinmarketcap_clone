import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/img/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-web">
          <div className="logo">
            <Image src={logo} alt="logo" />
            <p>© 2023 CoinMarketCap. All rights reserved</p>
          </div>
          <div className="info">
            <div className="info-content">
              <div className='item'>
                <p>Products</p>
                <ul>
                  <li>
                    <Link href="/">
                      Blockchain Explorer
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Crpyto API
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Crpyto Indices
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Doodles
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Jobs Board
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='item'>
                <p>Company</p>
                <ul>
                  <li>
                    <Link href="/">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Terms of use
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Cookie preferences
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Community Rules
                    </Link>
                  </li>                  
                  <li>
                    <Link href="/">
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Careers                     
                    </Link>
                    <span>
                      We're hiring!
                    </span>
                  </li>
                  
                </ul>
              </div>
              <div className='item'>
                <p>Support</p>
                <ul>
                  <li>
                    <Link href="/">
                      Request Form
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Glossary
                    </Link>
                  </li>                 
                </ul>
              </div>
              <div className='item'>
                <p>Socials</p>
                <ul>
                  <li>
                    <Link href="/">
                      Facebook  
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Telegram
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Instagram
                    </Link>
                  </li>   
                  <li>
                    <Link href="/">
                      Interactive Chat
                    </Link>
                  </li>                
                </ul>
              </div>
            </div>
            <div className="app">
              <Link href="/">
                <img src="https://s2.coinmarketcap.com/static/cloud/img/app_store_badge_white_1.svg?_=1bafcec" alt="apple" width={120} height={36} />
              </Link>
              <Link href="/">
              <img src="https://s2.coinmarketcap.com/static/cloud/img/google_play_badge_1.png?_=1bafcec" alt="google" width={120} height={36} />
              </Link>
              <Link href="/">
              <img src="https://s2.coinmarketcap.com/static/cloud/img/qr-code-button.svg?_=1bafcec" alt="code" width={36} height={36} />
              </Link>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer