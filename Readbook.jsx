import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './style/Readbook.css'

const Readbook = () => {
    let para = useParams()
    let [wishbook, setWishbook] = useState({}) ;

    useEffect(() => {
        let a = fetch(`http://localhost:4000/books/${para.id}`)      
        let b = a.then((x) => x.json())
        b.then((y) => setWishbook(y))
    }, [wishbook])

    let loc = useLocation()
    let currentpath = loc.pathname.startsWith("/adminportal")
    let move = useNavigate()

    function f1() {
        if(currentpath){
            move("/adminportal/books")
        } else {
            move("/userportal/books")
        }
    }

    function addtocart(id,title,image){
        let booktocart = {
            cartid:id,
            cartimage:image,
            carttitle:title
        }
        fetch("http://localhost:4000/cart",{method:"POST",body:JSON.stringify(booktocart)})
        alert("book added to the cart")
        move('/userportal/cart')
    }

    return (
        <div className="readbook-page">
            <div className="readbook-container">
                <h1>id:{wishbook.id}</h1>
                <h1>{wishbook.title}</h1>
                <img src={wishbook.thumbnailUrl} alt="" className="readbook-img" />
                <p className="readbook-desc">{wishbook.longDescription}</p>
                <div className="readbook-buttons">
                    <button onClick={() => addtocart(wishbook.id,wishbook.title,wishbook.thumbnailUrl)}>ADD TO CART</button>
                    <button onClick={f1}>GO BACK</button>
                </div>
            </div>
        </div>
    )
}

export default Readbook