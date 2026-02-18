import React, { useState } from 'react'
import Adminlogin from './Adminlogin'
import Userlogin from './Userlogin'

const Loginpage = () => {

    let [st,setSt]=useState(true)
    function f1(){
        setSt(!st)
    }
    return(
        <>
        <center>
            <button onClick={f1}>{st?"Admin Login":"User Login"}</button>
            <h1>Welcome to {st?"Admin Login":"User Login"}</h1>
            {st?<Adminlogin/>:<Userlogin/>}
        </center>
        </>
    )
}

export default Loginpage