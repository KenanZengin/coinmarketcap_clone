"use client"
import { useState,useContext } from "react"
import { CoinMarketCapContext } from "@/context/context"
import {signIn as SignIn , signOut , useSession} from "next-auth/react"
import { useFormik } from "formik"
import { signIn_validate } from "@/lib/validate"
import {HiFingerPrint,HiAtSymbol, HiOutlineUser} from "react-icons/hi"
import {TiTick} from "react-icons/ti"



const SignInForm = () => {

    const {setsignIn} = useContext(CoinMarketCapContext)
    const [showPassword,setShowPassword] = useState(false)
    const [success,setSuccess] = useState(false)
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validate : signIn_validate,
        onSubmit
    })

    async function onSubmit(values){
        setSuccess(true)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const status = await SignIn('credentials',{
            redirect: false,
            email : values.email,
            password : values.password,
        })
        setSuccess(false)
        if(status.ok) setsignIn(false)
        formik.resetForm()
    }

  return (
    <>
        <p className="register-success" style={{display:success ? "flex" : "none"}}>successful login <TiTick size={18}/></p>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="mail">
                <span>Email Address</span>
                <input type="email" id="mail" 
                    placeholder="Enter your email address..." 
                    {...formik.getFieldProps("email")}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={formik.errors.email && formik.touched.email ? "errborder": ""} 
                />
                <HiAtSymbol size={18} />
                {formik.errors.email && formik.touched.email ? <span className="errmessage">{formik.errors.email}</span> : <></>}
            </label>
            <label htmlFor="password">
                <span>Password</span>
                <input type={showPassword ? "text" : "password"}  
                    placeholder="Enter your password..."  
                    {...formik.getFieldProps("password")}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={formik.errors.password && formik.touched.password ? "errborder": ""}
                />
                <HiFingerPrint size={18} onClick={()=>setShowPassword(!showPassword)} />
                {formik.errors.password && formik.touched.password ? <span className="errmessage">{formik.errors.password}</span> : <></>}
            </label>
            
            <button>
                Login
            </button>
        </form>
    </>
  )
}

export default SignInForm