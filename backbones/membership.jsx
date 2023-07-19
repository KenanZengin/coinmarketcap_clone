"use client"
import { useState } from "react"
import {Modal} from "react-bootstrap"
import { useFormik } from "formik"
import signUp_validate from "@/lib/validate"
import { CgClose } from "react-icons/cg"
import Google from "public/img/google.png"
import Github from "public/img/github.png"
import Wallet from "public/img/wallet2.png"
import Image from "next/image"

const MemberShip = () => {


    const [signUp,setsignUp] = useState(false)
    const [signIn,setsignIn] = useState(false)
    const [checkBox,setCheckBox] = useState(false)

    const SignUpSend = () => {
        setsignIn(false)
        setsignUp(true)
    }
    const SignInSend = () => {
        setsignUp(false)
        setsignIn(true)
    }

    const formik = useFormik({
        initialValues:{
            userName:"",
            email:"",
            password:"",
        },
        validate:signUp_validate,
        onSubmit
    })
    async function onSubmit(values){
        const options = {
            method : "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }
        await fetch('/api/auth/signup',options)
    }

    console.log(formik);
  
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
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="userName">
                            <span>User Name</span>
                            <input type="text" id="userName" name="userName"  placeholder="Enter your user name..."  {...formik.getFieldProps("userName")} className={formik.errors.userName && formik.touched.userName ? "errborder": ""} />
                            {formik.errors.userName && formik.touched.userName ? <span className="errmessage">{formik.errors.userName}</span> : <></>}
                        </label>
                        <label htmlFor="email">
                            <span>Email Address</span>
                            <input type="email" id="email"  name="email" placeholder="Enter your email address..." {...formik.getFieldProps("email")}  className={formik.errors.email && formik.touched.email ? "errborder": ""}/>
                            {formik.errors.email && formik.touched.email ? <span className="errmessage">{formik.errors.email}</span> : <></>}
                        </label>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" id="password" name="password"  placeholder="Enter your password..." {...formik.getFieldProps("password")} className={formik.errors.password && formik.touched.password ? "errborder": ""}/>
                            {formik.errors.password && formik.touched.password ? <span className="errmessage">{formik.errors.password}</span> : <></>}
                        </label>
                        <label htmlFor="rights" className="rights">
                            <input type="checkbox" id="rights" onClick={()=>setCheckBox(!checkBox)} />
                            <p>I agree to receive marketing updates from CoinMarketCap</p>
                        </label>
                        <button type="submit" disabled={checkBox && formik.isValid ? false : true}  style={{opacity: checkBox && formik.isValid ? "1" : ".4"}}>
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