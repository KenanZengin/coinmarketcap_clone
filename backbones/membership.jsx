"use client"
import { useState } from "react"
import {Modal} from "react-bootstrap"
import { CgClose } from "react-icons/cg"
import Google from "public/img/google.png"
import Github from "public/img/github.png"
import Wallet from "public/img/wallet2.png"
import Image from "next/image"

const MemberShip = () => {

    const [signUp,setsignUp] = useState(false)
    const [signIn,setsignIn] = useState(false)

    const SignUpSend = () => {
        setsignIn(false)
        setsignUp(true)
    }
    const SignInSend = () => {
        setsignUp(false)
        setsignIn(true)
    }
  return (
    <>
         <div className="login-btn">
            <button  className="login" onClick={()=>setsignIn(true)}>
            Log in
            </button >
            <Modal
                show={signIn}          
                keyboard={false}     
                           
            >
                <Modal.Body className="modal-signvalidate" >
                    <div className="currency-title">
                        <h4 onClick={SignInSend} className={signIn ? `checked` :  ""}>Log In</h4>
                        <h4 onClick={SignUpSend} className={signUp ? `checked` :  ""}>Sign up</h4>
                        <div className="bordered" style={{left: signUp ? "61%" : "38%"}}></div>
                        <span  onClick={()=>setsignIn(false)}>
                            <CgClose size={25} />
                        </span>
                    </div>
                    <form>
                        <label htmlFor="mail">
                            <span>Email Address</span>
                            <input type="email" id="mail" placeholder="Enter your email address..." />
                        </label>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" id="password"  placeholder="Enter your password..."/>
                        </label>
                        
                        <button>
                            Login
                        </button>
                    </form>
                    <div className="other-sign-in">
                        <div className="or"><span>OR</span></div>
                        <button>
                            <Image src={Google} alt="google" />
                            Contiune With Google
                        </button>
                        <button>
                            <Image src={Github} alt="google" width={20} height={20} />
                            Contiune With Github
                        </button>
                        <button>
                            <Image src={Wallet} alt="google" />
                            Contiune With Wallet
                        </button>
                    </div>
                    <div className="privacy">
                        <p>By proceeding, you agree to CoinMarketCap’s <span>Terms <br /> of Use</span> & <span>Privacy Policy</span>.</p>
                    </div>

                </Modal.Body>
            </Modal>
            
        </div>
        <div className="signup-btn">
            <button  className="signup"  onClick={()=>setsignUp(true)}>
                Sign up
            </button >
            <img src="https://s2.coinmarketcap.com/static/cloud/img/signup/signupGift.gif?_=475eaaf" alt="gift" width={50} height={50} />
            <Modal
                show={signUp}          
                keyboard={false}     
                           
            >
                <Modal.Body className="modal-signvalidate" >
                    <div className="currency-title">
                        <h4 onClick={SignInSend} className={signIn ? `checked` :  ""}>Log In</h4>
                        <h4 onClick={SignUpSend} className={signUp ? `checked` :  ""}>Sign up</h4>
                        <div className="bordered" style={{left: signUp ? "61%" : "38%"}}></div>
                        <span  onClick={()=>setsignUp(false)}>
                            <CgClose size={25} />
                        </span>
                    </div>
                    <form>
                        <label htmlFor="userName">
                            <span>User Name</span>
                            <input type="text" id="userName" placeholder="Enter your user name..." />
                        </label>
                        <label htmlFor="mail">
                            <span>Email Address</span>
                            <input type="email" id="mail" placeholder="Enter your email address..." />
                        </label>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" id="password"  placeholder="Enter your password..."/>
                        </label>
                        <label htmlFor="rights" className="rights">
                            <input type="checkbox" id="rights" />
                            <p>I agree to receive marketing updates from CoinMarketCap</p>
                        </label>
                        <button>
                            Create an account
                        </button>
                    </form>
                    <div className="other-sign-in">
                        <div className="or"><span>OR</span></div>
                        <button>
                            <Image src={Google} alt="google" />
                            Contiune With Google
                        </button>
                        <button>
                            <Image src={Github} alt="google" width={20} height={20} />
                            Contiune With Github
                        </button>
                        <button>
                            <Image src={Wallet} alt="google" />
                            Contiune With Wallet
                        </button>
                    </div>
                    <div className="privacy">
                        <p>By proceeding, you agree to CoinMarketCap’s <span>Terms <br /> of Use</span> & <span>Privacy Policy</span>.</p>
                    </div>

                </Modal.Body>
            </Modal>
        </div>    
    </>
  )
}

export default MemberShip