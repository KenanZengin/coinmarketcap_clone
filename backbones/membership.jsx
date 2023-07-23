"use client"
import Image from "next/image"
import { useState,useContext } from "react"
import { CoinMarketCapContext } from "@/context/context"
import {signIn as SignIn , signOut , useSession} from "next-auth/react"
import { useFormik } from "formik"
import {Modal} from "react-bootstrap"
import SignInForm from "@/components/signin"
import signUp_validate from "@/lib/validate"
import { CgClose } from "react-icons/cg"
    import {TiTick} from "react-icons/ti"
import {HiFingerPrint,HiAtSymbol, HiOutlineUser} from "react-icons/hi"
import Google from "public/img/google.png"
import Wallet from "public/img/wallet2.png"


const MemberShip = () => {

    const {signUp, setsignUp,signIn,setsignIn} = useContext(CoinMarketCapContext)
    const {data : session} = useSession()
    const [checkBox,setCheckBox] = useState(false)
    const [success,setSuccess] = useState(false)
    const [showPassword,setShowPassword] = useState(false)

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
        setSuccess(true)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        SignInSend()
        const options = {
            method : "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }
        await fetch('/api/auth/signup',options)
        setSuccess(false)
        setCheckBox(false)
        formik.resetForm()
    }

    async function handleGoogleSingIn(){
        SignIn('google',{redirect:"/"})
    }
  
  return (
    <>
        {session && session.user ? <div className="signout-btn">
            <button onClick={()=>signOut()}>
                Sign out
            </button>
        </div>
            : <>
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
                                <span  onClick={()=>{setsignIn(false),formik.resetForm()}}>
                                    <CgClose size={25} />
                                </span>
                            </div>
                            <SignInForm />
                            <div className="other-sign-in">
                                <div className="or"><span>OR</span></div>
                                <button>
                                    <Image src={Google} alt="google" />
                                    Contiune With Google
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
                                <span  onClick={()=>{setsignUp(false),formik.resetForm()}}>
                                    <CgClose size={25} />
                                </span>
                            </div>
                            <p className="register-success" style={{display:success ? "flex" : "none"}}>registration successful <TiTick size={18}/></p>
                            <form onSubmit={formik.handleSubmit}>
                                <label htmlFor="userName">
                                    <span>User Name</span>
                                    <input type="text" id="userName" name="userName"  
                                        placeholder="Enter your user name..."  
                                        {...formik.getFieldProps("userName")} 
                                        className={formik.errors.userName && formik.touched.userName ? "errborder": ""} 
                                    />
                                    <HiOutlineUser size={18} />
                                    {formik.errors.userName && formik.touched.userName ? <span className="errmessage">{formik.errors.userName}</span> : <></>}
                                </label>
                                <label htmlFor="email">
                                    <span>Email Address</span>
                                    <input type="email" id="email"  name="email" 
                                        placeholder="Enter your email address..." 
                                        {...formik.getFieldProps("email")}  
                                        className={formik.errors.email && formik.touched.email ? "errborder": ""}
                                    />
                                    <HiAtSymbol size={18} />
                                    {formik.errors.email && formik.touched.email ? <span className="errmessage">{formik.errors.email}</span> : <></>}
                                </label>
                                <label htmlFor="password">
                                    <span>Password</span>
                                    <input type={showPassword ? "text" : "password"} id="password" name="password"  
                                        placeholder="Enter your password..." 
                                        {...formik.getFieldProps("password")} 
                                        className={formik.errors.password && formik.touched.password ? "errborder": ""}
                                    />
                                    <HiFingerPrint size={18} onClick={()=>setShowPassword(!showPassword)} />
                                    {formik.errors.password && formik.touched.password ? <span className="errmessage">{formik.errors.password}</span> : <></>}
                                </label>
                                <label htmlFor="rights" className="rights">
                                    <input type="checkbox" id="rights" onClick={()=>setCheckBox(!checkBox)} />
                                    <p>I agree to receive marketing updates from CoinMarketCap</p>
                                </label>
                                <button  type="submit" disabled={checkBox && formik.isValid ? false : true}  style={{opacity: checkBox && formik.isValid ? "1" : ".4"}}>
                                    Create an account
                                </button>
                            </form>
                            <div className="other-sign-in">
                                <div className="or"><span>OR</span></div>
                                <button onClick={handleGoogleSingIn}>
                                    <Image src={Google} alt="google" />
                                    Contiune With Google
                                </button>
                                {/* <button>
                                    <Image src={Github} alt="google" width={20} height={20} />
                                    Contiune With Github
                                </button> */}
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
        }

         
        
    </>
  )
}

export default MemberShip