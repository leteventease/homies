import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style/Books.css'

const Books = () => {

    let [kitab,setKitab]=useState([])

    useEffect(()=>{
        let a=fetch(`http://localhost:4000/books`)
        let b=a.then((x)=> x.json())
        b.then((y)=> setKitab(y))
    },[kitab])

    let x=useLocation()
    let nav=useNavigate()
    let y=x.pathname.startsWith("/adminportal")
    
    function f1(id){
        if(y){
            nav(`/adminportal/readbook/${id}`)
        }
        else{
            nav(`/userportal/readbook/${id}`)
        }
    }

    return (
      <div className="books-page">
        {kitab.map((ele)=>{
            return(
                <div className="book-item" key={ele.id}>
                    <h3 className="book-id">id: {ele.id}</h3>
                    <h3 className="book-title">title: {ele.title}</h3>
                    <img src={ele.thumbnailUrl} alt="" className="book-img" />
                    <button className="book-btn" onClick={()=> f1(ele.id)}>READ BOOK</button>
                </div>
            )
        })}
      </div>
    )
}

export default Books