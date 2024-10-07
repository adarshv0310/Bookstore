import React, { useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
import {  useEffect } from 'react';
function Free() {
const [filterdata ,setFilterData] =useState([]);
  
useEffect(()=>{
    const getfilterBook= async()=>{
      try{
        const res= await axios.get("http://localhost:8000/book");
        const book=res.data;
        const filterdata=book.filter((data)=>data.category==="Free")
        setFilterData(filterdata);
      }
      catch(error){
             console.log(error);
      }
    };
    getfilterBook();
},[]);


    //const filterdata=list.filter((data)=>data.category==="Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-2xl pb-20'>Free Offered Books</h1>
        </div>
      
      <div className='' >
      <Slider {...settings}>
       {filterdata.map((item)=>(
        <Card
        item={item}
        id={item.id}
        />
       ))}
      </Slider>
      </div>
      <div/>
    </div>
    </>
  )
}

export default Free
