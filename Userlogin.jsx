import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Userlogin = () => {
let email = useRef()
    let password = useRef()
    console.log(email,password)
    let nav = useNavigate()
    function f2(){
        if(email.current.value==="" || password.current.value===""){
            window.alert("Enter all credentials")
        }
        else if(email.current.value==="user@gmail.com" && password.current.value==="123"){
            // window.alert("Hello User")
            nav("/userportal")
        }
        else{
            window.alert("Invalid Credentials")
        }
    }

    return (
        <div>
            <center>
                <form action="" onSubmit={f2}>
                    <input type="text" placeholder='Enter User Username' ref={email}/><br /><br />
                    <input type="text" placeholder='Enter User password' ref={password}/><br /><br />
                    <button>SUBMIT</button>
                </form>
            </center>
        </div>
    )
}

export default Userlogin