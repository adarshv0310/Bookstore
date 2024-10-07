import React from 'react'

function Card({item , id}) {
  return (
    <>
      <div className="card bg-base-100 w-80 shadow-xl mb-10  mx-auto hover:scale-105 duration-200 light:bg-slate-900 light:text-white ">
  <figure>
    <img
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.tittle}</p>
    <div className="card-actions flex justify-between">
    <div className="badge badge-outline hover:bg-pink-500">Buy Now</div>
      <div className="badge badge-outline">${item.price}</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
