import React from 'react';

function Card({ item }) {
  // console.log(item);
  return (
    <div style={{border:'2px solid white'}}className="card w-92 bg-base-100 shadow-xl ml-5 mr-5 mt-4 mb-4 p-2 rounded-lg hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white  dark:border" >
      <figure>
        <img src={item.image} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p className='text-blue-300'>{item.Title}</p>
        <div className="card-actions flex md:justify-between" >
          <div className="badge badge-outline ">{item.price} $</div>
          <div className="badge px-2 py-1 rounded-full cursor-pointer border-{2px} badge-outline hover:bg-red-500 duration-200 hover:text-white ">Buy Now</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
