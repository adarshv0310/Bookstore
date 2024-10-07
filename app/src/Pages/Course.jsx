import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'

import {Link} from "react-router-dom"
import axios from "axios"
import { useState ,useEffect } from 'react'
function Course() {

  const [book , setBook]=useState([]);

  useEffect(()=>{
    const getBook=async()=>{
      try{
              const res= await axios.get("http://localhost:8000/book");
              setBook(res.data);
      }
      catch(error){
        console.log(error);

      }
    };
    getBook();
  },[]);
  return (
    <>
  <Navbar/>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
   
      <div className='min-h-screen'>
        <div className='max-w-screen mt-20 items-center justify- text-center'>
            
                <h1 className='text-2xl md:text-4xl font bold '>
                  We are delightd to have you <span className='text-pink-500'>Here !:)</span>
                </h1>
                <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, vitae quae magni hic impedit non exercitationem? Consequatur impedit, illum repellat obcaecati dolor optio doloribus nesciunt ipsum inventore dolorum quis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro, adipisci aliquid alias earum harum numquam aperiam quia. Dolore mollitia distinctio odio quod aperiam, deleniti veritatis aspernatur vero voluptatibus sit!</p>
              <Link to={"/"}>
              <button className='bg-pink-500 px-4 py-2 rounded-lg text-white hover:bg-pink-800 mt-6 duration-200'>Back</button></Link>
        </div>
        <div className=' mt-12 grid grid-cols-1 md:grid-cols-3'>
        {book.map((item)=>
        <Card
         item={item}
        key={item.id}
        />
        )}
      </div>
      
      </div> 
     </div>
    <div className='w-full'>
      <Footer/>
      </div>   
    </>
  )
}

export default Course;
