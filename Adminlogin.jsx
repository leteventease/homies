import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
    let email = useRef()
    let password = useRef()
    let nav=useNavigate()
    console.log(email,password)
    function f1(){
        if(email.current.value==="" || password.current.value===""){
            window.alert("Enter all credentials")
        }
        else if(email.current.value==="admin@gmail.com" && password.current.value==="123"){
            // window.alert("Hello Admin")
            nav("/adminportal")
        }
        else{
            window.alert("Invalid Credentials")
           
        }
    }
    return (
        <div>
            <center>
                <form action="" onSubmit={f1}>
                    <input type="text" placeholder='Enter Admin Username' ref={email} /><br /><br />
                <input type="text" placeholder='Enter Admin password' ref={password}/><br /><br />
                <button>SUBMIT</button>
            </form>
            </center>
        </div>
    )
}

export default Adminlogin