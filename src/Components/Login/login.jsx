import "./login.scss"
import React from "react";
import Image from "../img/Img.svg";
import Google from "../img/GoogleIcon.svg";

function Login() {
    return (
        <>
            <div className="min-h-screen">
                <div className="container mx-auto md:flex md:items-center md:justify-center xl:pr-36">
                    <img className="hidden md:block w-full h-[520px] md:mt-5 md:ml-2 lg:ml-0 xl:h-[600px]" src={Image} alt="Imagee" />
                    <div className="w-full p-5 xl:w-[700px]">
                        <div className="mb-5">
                            <h4>Welcome back</h4>
                            <h1 className="text-black block text-3xl font-bold">Login to your account</h1>
                        </div>
                        <form>
                            <div>
                                <label className="block to-black mb-2 text-lg cursor-pointer" htmlFor="Email">Email</label>
                                <input className="border mb-4 w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-500 rounded-lg" type="email" id="Email" placeholder="John.snow@gmail.com" required/>
                            </div>
                            <div>
                                <label className="block to-black mb-2 text-lg cursor-pointer" htmlFor="password">Password</label>
                                <input className="border mb-5 w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-500 rounded-lg" type="text" id="password" placeholder="*********" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input className="cursor-pointer" type="checkbox" />
                                    <label className="text-sm">Remember Me</label>
                                </div>
                                <a className="text-blue-500 text-sm" href="https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ddm=0&dsh=S-754574172%3A1710762942637987&ec=GAlAFw&flowEntry=AddSession&flowName=GlifWebSignIn&hl=ru&service=mail&theme=glif&authuser=0">Forgot password?</a>
                            </div>
                            <button className="text-white bg-green-500 py-3 w-full mt-5 hover:bg-green-600 rounded-lg" type="submit">Login now</button>
                            <button className="text-white bg-slate-800 py-3 w-full mt-5 hover:bg-slate-900 flex items-center justify-center gap-3 rounded-lg" type="button"><img src={Google} alt="Google" />Or sign-in with google</button>
                        </form>
                        <div className="flex items-center justify-center gap-1 translate-y-7 lg:translate-y-16">
                            <p className="text-sm">Dont have an account?</p>
                            <p className="text-sm text-blue-500 cursor-pointer">Join free today</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;