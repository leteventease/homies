import React, { useEffect, useState } from 'react'
import './style/Cart.css'

const Cart = () => {
    let [tab,setTab]=useState([])

    useEffect(()=>{
        let a=fetch(`http://localhost:4000/cart`)
        let b=a.then((x)=> x.json())
        b.then((y)=> setTab(y))
    }, [tab])

    function removefromcart(id,name){
        let y = window.confirm(`do you want to delete ${name}?`)
        if(y){
            fetch(`http://localhost:4000/cart/${id}`,{method:"DELETE"})
            alert("book got deleted")
        } else {
            alert("book is not removed")
        }
    }

    return (
        <div className="cart-page">
           <table className="cart-table">
            <thead>
            <tr>
                <th>id</th>
                <th>cartid</th>
                <th>cartimage</th>
                <th>carttitle</th>
                <th>cartauthors</th>
                <th>remove</th>
            </tr>
            </thead>
            <tbody>
            {tab.map((ele)=>{
                return(
                    <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.cartid}</td>
                        <td><img src={ele.cartimage} alt="" className="cart-img" /></td>
                        <td>{ele.carttitle}</td>
                        <td>{ele.cartauthors}</td>
                        <td><button className="cart-btn" onClick={()=> removefromcart(ele.id,ele.carttitle)}>remove</button></td>
                    </tr>
                )
            })}
            </tbody>
           </table>
        </div>
    )
}

export default Cart